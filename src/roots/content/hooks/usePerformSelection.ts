import { useCallback, useEffect, useRef } from "react";
import { xPathFromElement } from "@src/utils/xPathFromElement";
import { useSaveCurrentSelector } from "@src/roots/content/hooks/useSaveCurrentSelector";
import { cssSelectorFromElement } from "@src/utils/cssSelectorFromElement";

export const usePerformSelection = () => {
  const saveCurrentSelector = useSaveCurrentSelector();

  const lastElement = useRef<Element>();

  const onPointerMove = useCallback((e: PointerEvent) => {
    const element = document.elementsFromPoint(e.clientX, e.clientY)[0];

    if (lastElement.current === element) {
      return;
    }

    if (lastElement.current) {
      lastElement.current.classList.remove("brevy-hover");
    }

    if (element) {
      element.classList.add("brevy-hover");
      lastElement.current = element;
    }
  }, []);

  const onClick = useCallback(
    async (e: MouseEvent) => {
      if (!lastElement.current) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      lastElement.current.classList.remove("brevy-hover");

      const xpath = xPathFromElement(lastElement.current);
      const cssSelector = cssSelectorFromElement(lastElement.current) ?? "Invalid";
      const readValue = lastElement.current?.textContent;

      if (!readValue || !xpath) {
        console.error("Could not get read value or xpath", readValue, xpath);
        throw new Error("Could not get read value or xpath");
      }

      await saveCurrentSelector(readValue, { cssSelector, xpath });
    },
    [saveCurrentSelector],
  );

  useEffect(() => {
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("click", onClick);

      if (lastElement.current) {
        lastElement.current.classList.remove("brevy-hover");
      }
    };
  }, []);
};
