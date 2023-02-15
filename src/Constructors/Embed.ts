//THIS FILE IS NOT THE FINAL VERSION, FIXES ARE COMING.
//

import { ColorResolvable, MessageEmbed } from "discord.js";
let Body = new MessageEmbed();
class Embed {
  Text(
    Author: string,
    Description: string,
    Color: ColorResolvable,
    Footer: string
  ) {
    Body.setAuthor({
      name: Author,
    });
    Body.setColor(Color);
    Body.setDescription(Description);
    Body.setFooter({ text: Footer });
    return Body;
  }

  Images(Thumbnail?: string, Image?: string) {
    Body.setThumbnail(Thumbnail!);
    Body.setImage(Image!);
  }
  TextFields(FieldTitle: string[], FieldValue: string[], inline?: boolean[]) {
    for (let i = 0; i < FieldTitle.length; i++) {
      Body.addFields({
        name: FieldTitle[i],
        value: FieldValue[i],
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
