import { ApplicationCommandOption, CommandInteraction } from "discord.js";
import { Hiridium } from "./Client";

export interface Command {
  data: {
    name: string;
    description: string;
    type?: number;
    options?: ApplicationCommandOption[];
  };
  execute(client: Hiridium, interaction: CommandInteraction): void;
}
export interface ICustomID {
  execute(client: Hiridium, interaction: CommandInteraction): void;
}
