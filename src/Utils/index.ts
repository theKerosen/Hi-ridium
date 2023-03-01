import { Hiridium } from "./Client";
import { handler } from "./handler";
import { onInteraction } from "../Events/onInteraction";
import { Init } from "../Events/Init";
const client = new Hiridium();
client.login();
client.mongoConnect();
handler();
client.once("ready", async () => await Init(client));
client.on(
  "interactionCreate",
  async (interaction) => await onInteraction(interaction, client)
);
export { client };
