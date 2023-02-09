const { MessageActionRow, MessageButton } = require("discord.js");
class createButton {
  id: any;
  name: any;
  style: any;
  /**
   * @param {Array} id button's custom IDs
   * @param {Array} name button's names
   * @param {Array} style style of the buttons (PRIMARY, SECONDARY, SUCCESS, DANGER, LINK)
   * @param {Array} emoji unicode emojis on the buttons
   */
  constructor(id: any, name: any, style: any) {
    this.id = id;
    this.name = name;
    this.style = style;
  }
  builder() {
    const button = new MessageActionRow();
    for (let i = 0; i < this.name.length; i++) {
      button.addComponents(
        new MessageButton()
          .setLabel(`${this.name[i]}`)
          .setCustomId(`${this.id[i]}`)
          .setStyle(`${this.style[i]}`)
      );
    }
    return button;
  }
}
export { createButton };
