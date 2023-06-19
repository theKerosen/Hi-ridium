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
  setInput(Input: {
    custom_id: string;
    label: string;
    style: TextInputStyle;
    placeholder?: string;
    min_length?: number;
    max_length?: number;
    required?: boolean;
  }) {
    return super
      .setCustomId(Input.custom_id)
      .setLabel(Input.label)
      .setStyle(Input.style)
      .setMinLength(Input.min_length ?? 1)
      .setMaxLength(Input.max_length ?? 250)
      .setPlaceholder(Input.placeholder ?? "...")
      .setRequired(Input.required);
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
  addText(Modal: {
    custom_id: string;
    label: string;
    style: TextInputStyle;
    placeholder?: string;
    min_length?: number;
    max_length?: number;
    required?: boolean;
  }) {
    return super.addComponents(
      new ActionAdd().addComponents(
        new TextInputBuilding().setInput({
          custom_id: Modal.custom_id,
          label: Modal.label,
          style: Modal.style,
          placeholder: Modal.placeholder,
          min_length: Modal.min_length,
          max_length: Modal.max_length,
          required: Modal.required,
        })
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
  createModal(Modal: { custom_id: string; title: string }) {
    return new ModalBuilding()
      .setCustomId(Modal.custom_id)
      .setTitle(Modal.title);
  }
}
//
// TODO:
//  find a way to make the code cleaner
//  (right now it looks hideous)
//
