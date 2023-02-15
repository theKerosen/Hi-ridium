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
   *
   * @param {String} modalId
   * @param {String} modalTitle
   * @param {Array} customId STRING
   * @param {Array} Label STRING
   * @param {Array} Style PARAGRAPH, SHORT, STRING
   * @param {Array} MinLength NUMBER
   * @param {Array} MaxLength NUMBER
   * @param {Array} Required BOOLEAN
   */
  insertInputs(
    customId: string[],
    Label: string[],
    Style: string[],
    MinLength: number[],
    MaxLength: number[],
    Required: boolean[]
  ): void {
    let modal: any = {
      title: `${this.modalTitle}`,
      custom_id: `${this.modalId}`,
      components: Array(),
    };
    for (let i = 0; i < customId.length; i++) {
      let textinput = {
        type: "ACTION_ROW",
        components: Array(),
      };
      textinput.components.push({
        type: "TEXT_INPUT",
        customId: `${customId[i]}`,
        label: `${Label[i]}`,
        maxLength: `${MaxLength[i]}`,
        minLength: `${MinLength[i]}`,
        required: `${Required[i]}`,
        style: `${Style[i]}`,
      });
      modal.components.push(textinput);
    }
    return modal;
  }
}
export { Modal };
