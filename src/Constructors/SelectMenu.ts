class SelectMenu {
  customId: string[];
  type: number[];
  placeholder: string[];
  label: string[];
  value: string[];
  description: string[];
  options: object[];
  disabled: boolean[];
  /**
   *
   * @param {Array} customId custom ID of the Menu
   * @param {Array} label name of the Option
   * @param {Array} value raw name of the Option
   * @param {Array} description description of the Option
   **/
  constructor(
    customId: string[],
    type: number[],
    placeholder: string[],
    disabled: boolean[],
    options?: [{ label: string[]; description: string[]; value: string[] }]
  ) {
    this.options = options!;
    this.customId = customId;
    this.label = options?.[0].label!;
    this.description = options?.[0].description!;
    this.value = options?.[0].value!;
    this.type = type;
    this.placeholder = placeholder;
    this.disabled = disabled;
  }
  builder() {
    let selectMenu: any[] = [];
    for (let i = 0; i < this.customId.length; i++) {
      let menu = [
        {
          type: 1,
          components: [
            {
              type: this.type[i],
              custom_id: this.customId[i],
              placeholder: this.placeholder[i],
              options: Array(),
            },
          ],
        },
      ];
      selectMenu.push(menu);
    }
    if (this.options) {
      for (let i = 0; i < this.label.length; i++) {
        selectMenu[0][0].components[0].options.push({
          label: this.label[i],
          description: this.description[i],
          value: this.value[i],
          disabled: this.disabled[i],
        });
      }
    }
    return selectMenu[0][0];
  }
}
export { SelectMenu };
