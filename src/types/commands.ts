import { ContentScriptCommandType, PopupCommandType } from "@src/consts/commands";

export type ExtensionCommand<TPayload = undefined> = {
  type: ContentScriptCommandType | PopupCommandType;
  payload: TPayload;
};

export type PickModeCompletedCommandPayload = {
  elementHtml: string;
  xPath: string;
  cssSelector: string;
};

export type PickModeCompletedCommand = ExtensionCommand<PickModeCompletedCommandPayload>;
