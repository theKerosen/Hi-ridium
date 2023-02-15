class SelectMenu {
  /**
   * @param {Array} customId
   * @param {Array} label
   * @param {Array} value
   * @param {Array} description
   **/
  builder(
    customId: string,
    type: number,
    placeholder: string,
    options: [{ label: string[]; description: string[]; value: string[] }]
  ) {
    interface Options {
      label: string;
      description: string;
      value: string;
    }
    interface ArrayMenu {
      type: number;
      components: [
        {
          type: number;
          custom_id: string;
          placeholder: string;
          options: Options[];
        }
      ];
    }
    let SelectMenu: Array<ArrayMenu> = [];
    for (let i = 0; i < customId.length; i++) {
      let Menu: ArrayMenu = {
        type: 1,
        components: [
          {
            type: type,
            custom_id: customId,
            placeholder: placeholder,
            options: [],
          },
        ],
      };
      SelectMenu.push(Menu);
    }
    for (let i = 0; i < options[0].label.length; i++) {
      SelectMenu[0].components[0].options.push({
        label: options[0].label[i],
        description: options[0].description[i],
        value: options[0].value[i],
      });
    }
    console.log(SelectMenu[0]);
    return SelectMenu[0];
  }
}
export { SelectMenu };
