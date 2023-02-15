import { readdirSync } from "fs";
import { client } from ".";

async function handler() {
  readdirSync(`${__dirname}/../Commands`).forEach(async (cmd) => {
    const command = await import(`../Commands/${cmd}`);
    if (!command || !command?.data?.name) return;
    client.commands.set(command.data.name, command);
  });
}
export { handler };
