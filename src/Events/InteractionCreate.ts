export default async (interaction: any, client: any) => {
  if (interaction?.customId) {
    (await import(`../customId/${interaction?.customId}`)).execute(
      interaction,
      client
    );
  }
  let command = client.commands.get(interaction.commandName);
  if (interaction.user.bot === true) return;
  if (!command) return;
  try {
    await command.execute(client, interaction);
  } catch (error) {
    console.log(error);
    await interaction.reply({
      content: "[❌] A não ser que eu esteja errado, isso é um erro.",
      ephemeral: true,
    });
  }
};
