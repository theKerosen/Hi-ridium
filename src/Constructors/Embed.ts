//THIS FILE IS NOT THE FINAL VERSION, FIXES ARE COMING.
//

import { MessageEmbed } from "discord.js";
let Body = new MessageEmbed();
class Embed {
  Author: any;
  Color: any;
  Description: any;
  Thumbnail: any;
  Image: any;
  Footer: any;
  constructor(Color: string) {
    this.Color = Color;
  }
  Text(Author: string, Description: string, Footer: string) {
    Body.setAuthor({
      name: Author,
    });
    Body.setColor(this.Color);
    Body.setDescription(Description!);
    Body.setFooter({ text: `${Footer!}` });
    return Body;
  }

  Images(Thumbnail?: string, Image?: string) {
    Body.setThumbnail(Thumbnail!);
    Body.setImage(Image!);
  }
  TextFields(FieldTitle: string[], FieldValue: string[], inline?: boolean[]) {
    for (let i = 0; i < FieldTitle.length; i++) {
      Body.addFields({
        name: `${FieldTitle[i]}`,
        value: `${FieldValue[i]}`,
        inline: inline![i],
      });
    }
    return Body;
  }
}
//
// somehow the textfields() is hooking itself to other embeds. fix asap
//
export { Embed };
