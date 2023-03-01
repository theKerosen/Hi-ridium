import {
  MessageActionRow,
  MessageButton,
  MessageButtonStyleResolvable,
} from "discord.js";
class Button {
  /**
   * @param {Array} id button custom ID
   * @param {Array} name button name
   * @param {Array} style style of the button (PRIMARY, SECONDARY, SUCCESS, DANGER, LINK)
   * @param {Array} emoji unicode emojis
   */

  builder(id: string[], name: string[], style: MessageButtonStyleResolvable[]) {
    const button = new MessageActionRow();
    for (let i = 0; i < name.length; i++) {
      button.addComponents(
        new MessageButton()
          .setLabel(name[i])
          .setCustomId(id[i])
          .setStyle(style[i])
      );
    }
    return button;
  }
}
export { Button };
