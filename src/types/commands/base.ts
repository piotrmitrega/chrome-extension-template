import { BackgroundCommandType, ContentCommandType, PopupCommandType } from "@src/consts/commands";

export class ExtensionCommand<TPayload = undefined> {
  constructor(
    public readonly type: ContentCommandType | PopupCommandType | BackgroundCommandType,
    public readonly payload?: TPayload,
  ) {}
}
