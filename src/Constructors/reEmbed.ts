import { MessageEmbed } from "discord.js";
class reEmbed {
  Author: any;
  Color: any;
  Description: any;
  Thumbnail: any;
  Image: any;
  Footer: any;
  constructor(
    Author: string,
    Description?: string,
    Color?: string,
    Footer?: string,
    Thumbnail?: string,
    Image?: string
  ) {
    reEmbed.prototype.Color = "BLURPLE";
    reEmbed.prototype.Thumbnail = "";
    reEmbed.prototype.Footer = Date.now();
    this.Author = Author;
    this.Color = Color;
    this.Description = Description;
    this.Thumbnail = Thumbnail;
    this.Image = Image;
    this.Footer = Footer;
  }
  builder() {
    const Embed = new MessageEmbed()
      .setAuthor({
        name: this.Author,
      })
      .setColor(this.Color)
      .setDescription(this.Description)
      .setThumbnail(this.Thumbnail)
      .setImage(this.Image)
      .setFooter({ text: `${this.Footer}` });
    return Embed;
  }
}
export { reEmbed };
