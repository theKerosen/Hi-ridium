import { ColorResolvable, MessageEmbed } from "discord.js";
export class Embed {
  builder(
    Author: string,
    Description: string,
    Color: ColorResolvable,
    Footer: string,
    Thumbnail?: string,
    Image?: string
  ) {
    const Body = new MessageEmbed()
      .setAuthor({
        name: Author,
      })
      .setColor(Color)
      .setDescription(Description)
      .setFooter({ text: Footer })
      .setThumbnail(Thumbnail ?? "")
      .setImage(Image ?? "");
    return Body;
  }
}
