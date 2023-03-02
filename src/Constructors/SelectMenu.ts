import {
  APIActionRowComponent,
  APIMessageActionRowComponent,
} from "discord-api-types/v9";
import {
  MessageSelectMenuOptions,
  MessageComponentType,
  MessageActionRow,
  MessageActionRowComponent,
  MessageActionRowComponentResolvable,
} from "discord.js";
export class SelectMenu {
  builder(
    custom_id: string,
    placeholder: string,
    minvalues: number,
    maxvalues: number,
    label: string[],
    description: string[],
    value: string[]
  ) {
    interface iSelectMenu {
      type: MessageComponentType;
      components: MessageSelectMenuOptions[];
    }
    const Menu: iSelectMenu = {
      type: "ACTION_ROW",
      components: [
        {
          type: "SELECT_MENU",
          customId: custom_id,
          placeholder: placeholder,
          minValues: minvalues,
          maxValues: maxvalues,
          options: [],
        },
      ],
    };
    for (let i = 0; i < label.length; i++) {
      Menu.components[0].options?.push({
        label: label[i],
        value: value[i],
        description: description[i],
      });
    }
    return Menu as MessageActionRow<
      MessageActionRowComponent,
      MessageActionRowComponentResolvable,
      APIActionRowComponent<APIMessageActionRowComponent>
    >;
  }
}
