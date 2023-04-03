import {
  CommandInteraction,
  SlashCommandBuilder,
  ChatInputCommandInteraction,
} from "discord.js";
import { Hiridium } from "../Utils/Client";

export interface Command {
  data: SlashCommandBuilder;
  execute(
    interaction: CommandInteraction | 
    ChatInputCommandInteraction,
    client?: Hiridium
  ): Promise<void>;
}
