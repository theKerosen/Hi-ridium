import { Message } from "discord.js";
import { Hiridium } from "../Utils/Client";

export default {
  name: "messageCreate",
  once: false,
  async execute(message: Message, client: Hiridium) {
    if (message.author.bot) return;
  },
};
