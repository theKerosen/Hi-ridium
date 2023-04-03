import { Hiridium } from "./Client";
import { handler } from "./handler";
import { onInteraction } from "../Events/onInteraction";
import { Init } from "../Events/Init";
import { Events } from "discord.js";
const client = new Hiridium();
client.login();
client.mongoConnect();
handler();
client.on(Events.ClientReady, async () => await Init(client));
client.on(
  Events.InteractionCreate,
  async (interaction) => await onInteraction(interaction, client)
);
export { client };
