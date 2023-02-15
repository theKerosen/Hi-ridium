const { MessageActionRow, MessageButton } = require("discord.js");
class Button {
  id: string[];
  name: string[];
  style: string[];
  /**
   * @param {Array} id button custom ID
   * @param {Array} name button name
   * @param {Array} style style of the button (PRIMARY, SECONDARY, SUCCESS, DANGER, LINK)
   * @param {Array} emoji unicode emojis
   */
  constructor(id: string[], name: string[], style: string[]) {
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
export { Button };
