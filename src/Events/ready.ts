import { Hiridium } from "../Utils/Client";
export default (client: Hiridium) => {
  console.log("\x1b[35m[Hi-ridium] \x1b[36mLigado com sucesso!");
  client.application?.commands.set(client.commands.map((v: any) => v.data));
};
