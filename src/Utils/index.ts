import { Hiridium } from "./Client";
import { handler } from "./handler";
const client = new Hiridium();
client.login();
client.mongoConnect();
handler();
client.once("ready", async () =>
  (await import("../Events/ready")).default(client)
);
client.on(
  "interactionCreate",
  async (...interaction) =>
    await (await import("../Events/InteractionCreate")).default(...interaction, client)
);
export { client };
