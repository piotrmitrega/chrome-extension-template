import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ImageOffIcon } from "lucide-react";

export type ProductAvatarProps = {
  src?: string;
  FallbackIcon?: React.ComponentType;
};

export const ProductAvatar = ({
  src,
  FallbackIcon = ImageOffIcon,
}: ProductAvatarProps): JSX.Element => {
  return (
    <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
      <AvatarImage alt="Avatar" src={src} />
      <AvatarFallback className="p-2">
        <FallbackIcon />
      </AvatarFallback>
    </Avatar>
  );
};
