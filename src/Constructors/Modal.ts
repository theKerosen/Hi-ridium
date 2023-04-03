import {
  ModalBuilder,
  TextInputBuilder,
  APIModalInteractionResponseCallbackData,
  ModalComponentData,
  TextInputStyle,
  ActionRowBuilder,
  ModalActionRowComponentBuilder,
  APIActionRowComponent,
  APIActionRowComponentTypes,
  ComponentType,
  APITextInputComponent,
  Equatable,
  JSONEncodable,
  ActionRowComponentData,
  ActionRowData,
  APIMessageActionRowComponent,
  APIModalActionRowComponent,
} from "discord.js";
export class TextInputBuilding
  extends TextInputBuilder
  implements
    Equatable<APITextInputComponent | JSONEncodable<APITextInputComponent>>
{
  constructor(
    data?: APITextInputComponent & {
      type?: ComponentType.TextInput;
    }
  ) {
    super(data);
  }
  setInput(
    custom_id: string,
    label: string,
    style: TextInputStyle,
    placeholder?: string,
    min_length?: number,
    max_length?: number,
    required?: boolean
  ) {
    return super
      .setCustomId(custom_id)
      .setLabel(label)
      .setStyle(style)
      .setMinLength(min_length ?? 1)
      .setMaxLength(max_length ?? 250)
      .setPlaceholder(placeholder ?? "...")
      .setRequired(required);
  }
}
export class ActionAdd extends ActionRowBuilder<TextInputBuilder> {
  constructor(
    data?: Partial<
      | ActionRowData<
          ActionRowComponentData | JSONEncodable<APIActionRowComponentTypes>
        >
      | APIActionRowComponent<
          APIMessageActionRowComponent | APIModalActionRowComponent
        >
    >
  ) {
    super(data);
  }
}
export class ModalBuilding extends ModalBuilder {
  constructor(
    data?:
      | Partial<ModalComponentData>
      | Partial<APIModalInteractionResponseCallbackData>
  ) {
    super(data);
  }
  /**
   * @param {String} custom_id Sets the customID of the Text Input
   * @param {String} label Sets the label of the Text Input
   * @param {TextInputStyle} style This sets the Style of the Text Input (default: TextInputStyle.Short)
   * @param {String} placeholder Sets the "placeholder" message.
   * @param {Number} min_length Sets the min character length of the Text Input (default: 1)
   * @param {Number} max_length Sets the max character length of the Text Input (default: 250)
   * @param {Boolean} required Makes the Text Input required or not (default: false)
   * @returns a nice Discord.js-Compatible Text Input object.
   */
  addText(
    custom_id: string,
    label: string,
    style: TextInputStyle,
    placeholder?: string,
    min_length?: number,
    max_length?: number,
    required?: boolean
  ) {
    return super.addComponents(
      new ActionAdd().addComponents(
        new TextInputBuilding().setInput(
          custom_id,
          label,
          style,
          placeholder,
          min_length,
          max_length,
          required
        )
      )
    );
  }
}
export class BModal extends ActionRowBuilder<ModalActionRowComponentBuilder> {
  constructor(
    data?: Partial<APIActionRowComponent<APIActionRowComponentTypes>>
  ) {
    super(data);
  }
  createModal(custom_id: string, title: string) {
    return new ModalBuilding().setCustomId(custom_id).setTitle(title);
  }
}
//
// TODO:
//  find a way to make the code cleaner
//  (right now it looks hideous)
//