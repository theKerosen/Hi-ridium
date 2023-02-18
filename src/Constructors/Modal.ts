import { ModalOptions } from "discord.js";

class Modal {
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
    customId: string[],
    Label: string[],
    Style: string[],
    MinLength: number[],
    MaxLength: number[],
    Required: boolean[]
  ) {
    interface TextInput {
      type: number;
      components: Array<object>;
    }

    const modal: ModalOptions = {
      title: this.modalTitle,
      customId: this.modalId,
      components: [],
    };
    for (let i = 0; i < customId.length; i++) {
      const TextInput: TextInput = {
        type: 1,
        components: [],
      };

      TextInput.components.push({
        type: 4,
        custom_id: customId[i],
        label: Label[i],
        style: Style[i],
        min_length: MinLength[i],
        max_length: MaxLength[i],
        required: Required[i],
      });
    }
    return modal;
  }
}
export { Modal };
