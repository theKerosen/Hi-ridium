import {
  MessageActionRow,
  MessageButton,
  MessageButtonStyleResolvable,
} from "discord.js";
export class Button {
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
