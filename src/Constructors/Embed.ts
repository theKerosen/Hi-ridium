import { ColorResolvable, MessageEmbed } from "discord.js";
class Embed {
  /**
   * @param {String} Author The title/Author text
   * @param {String} Description The description text
   * @param {ColorResolvable} Color The color
   * @param {String} Footer The footer text
   * @param {String} Thumbnail The thumbnail URL
   * @param {String} Image The image URL
   */
  builder(
    Author: string,
    Description: string,
    Color: ColorResolvable,
    Footer: string,
    Thumbnail?: string,
    Image?: string
  ) {
    let Body = new MessageEmbed()
      .setAuthor({
        name: Author,
      })
      .setColor(Color)
      .setDescription(Description)
      .setFooter({ text: Footer })
      .setThumbnail(Thumbnail!)
      .setImage(Image!);
    return Body;
  }
}
export { Embed };
