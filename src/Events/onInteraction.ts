import { Interaction } from "discord.js";
import { Hiridium } from "../Utils/Client";

export const onInteraction = async (
  interaction: Interaction,
  client: Hiridium
) => {
  if (interaction.isChatInputCommand()) {
    const command = client.commands.get(interaction.commandName);
    if (interaction.user.bot == true) return;
    if (!command) return;
    try {
      command.execute(interaction, client);
    } catch (error) {
      console.log(error);
      await interaction.reply({
        content:
          "[❌] A não ser que os servidores do Discord tenham pegado fogo, isso é um erro.",
        ephemeral: true,
      });
    }
  }
  if (interaction.isButton()) {
    (await import(`../IButtons/${interaction?.customId}`)).execute(
      interaction,
      client
    );
  }
  if (interaction.isStringSelectMenu()) {
    (await import(`../ISelectMenus/StringSelectMenu/${interaction?.customId}`)).execute(
      interaction,
      client
    );
  }
  if(interaction.isChannelSelectMenu()) {
    (await import(`../ISelectMenus/ChannelSelectMenu/${interaction?.customId}`)).execute(
      interaction,
      client
    );
  }
  if (interaction.isModalSubmit()) {
    (await import(`../IModals/${interaction?.customId}`)).execute(
      interaction,
      client
    );
  }
};
