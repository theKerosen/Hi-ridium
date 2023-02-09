import { Hiridium } from "./Client";
import { handler } from "./handler";
const client = new Hiridium();
client.login();
client.mongoConnect();
handler();
client.once("ready", async (...args) =>
  (await import("../Events/ready")).default(client)
);
client.on("interactionCreate", async (...args) =>
  (await import("../Events/InteractionCreate")).default(...args, client)
);
export { client };
