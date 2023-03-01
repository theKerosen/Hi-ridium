import {
  ApplicationCommandOption,
  CommandInteraction,
  MessageComponentType,
} from "discord.js";
import { Hiridium } from "./Client";

export interface Command {
  data: {
    name: string;
    description: string;
    type?: MessageComponentType;
    options?: ApplicationCommandOption[];
  };
  execute(client: Hiridium, interaction: CommandInteraction): void
}
