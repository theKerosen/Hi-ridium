export default async (interaction: any, client: any) => {
  if (interaction?.id) {
    (await import(`../customId/${interaction?.id}`)).execute(
      interaction,
      client
    );
    console.log(interaction);
  }
  const command = client.commands.get(interaction.commandName);
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
