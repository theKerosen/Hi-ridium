import {
  ModalOptions,
  MessageComponentType,
  TextInputStyle,
  TextInputComponentOptions,
  MessageActionRow,
  TextInputComponent,
  ModalActionRowComponentResolvable,
} from "discord.js";
import {
  APITextInputComponent,
  APIActionRowComponent,
} from "discord-api-types/v10";

class TextInput {
  modalId: string;
  modalTitle: string;
  /**
   * @param {String} modalId
   * @param {String} modalTitle
   */
  constructor(modalId: string, modalTitle: string) {
    this.modalId = modalId;
    this.modalTitle = modalTitle;
  }
  /**
   * @param {String} modalId STRING
   * @param {String} modalTitle STRING
   * @param {Array} customId ARRAY STRING
   * @param {Array} Label ARRAY STRING
   * @param {Array} Style PARAGRAPH, SHORT, STRING
   * @param {Array} MinLength ARRAY NUMBER
   * @param {Array} MaxLength ARRAY NUMBER
   * @param {Array} Required  ARRAY BOOLEAN
   */
  insertInputs(
    customid: string[],
    Label: string[],
    Style: TextInputStyle[],
    MinLength: number[],
    MaxLength: number[],
    Required: boolean[],
    Placeholder: string[]
  ) {
    const modal: ModalOptions = {
      title: this.modalTitle,
      customId: this.modalId,
      components: [],
    };
    interface iTextInput {
      type: MessageComponentType;
      components: TextInputComponentOptions[];
    }
    for (let i = 0; i < customid.length; i++) {
      const textinput: iTextInput = {
        type: "ACTION_ROW",
        components: [
          {
            type: "TEXT_INPUT",
            customId: customid[i],
            label: Label[i],
            maxLength: MaxLength[i],
            minLength: MinLength[i],
            placeholder: Placeholder[i],
            required: Required[i],
            style: Style[i],
          },
        ],
      };
      modal.components.push(
        textinput as MessageActionRow<
          TextInputComponent,
          ModalActionRowComponentResolvable,
          APIActionRowComponent<APITextInputComponent>
        >
      );
    }
    return modal;
  }
}
export { TextInput };
