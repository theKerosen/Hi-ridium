export default {
  name: "messageCreate",
  once: false,
  async execute(message: any, client: any) {
    if (message.author.bot) return;
  },
};
