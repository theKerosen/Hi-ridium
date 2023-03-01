import * as dotenv from "dotenv";
dotenv.config();
import { Client, Collection } from "discord.js";
import { connect, set } from "mongoose";
import { Command } from "./command";

class Hiridium extends Client {
  commands: Collection<string, Command> = new Collection();
  constructor() {
    super({ intents: 3276799 });
  }

  login() {
    return super.login(process.env.TOKEN);
  }

  mongoConnect() {
    set("strictQuery", true);
    return connect(process.env.MONGO_URI ?? "").then(() =>
      console.log("\x1b[35m[Mongoose] \x1b[36mConectado ao MongoDB")
    );
  }
}
export { Hiridium };
