import { BackgroundCommandType, ContentCommandType, PopupCommandType } from "@src/consts/commands";

export abstract class ExtensionCommand {
  protected constructor(
    public readonly type: ContentCommandType | PopupCommandType | BackgroundCommandType,
  ) {}
}

export abstract class PayloadExtensionCommand<TPayload> extends ExtensionCommand {
  protected constructor(
    type: ContentCommandType | PopupCommandType | BackgroundCommandType,
    public readonly payload: TPayload,
  ) {
    super(type);
  }
}
