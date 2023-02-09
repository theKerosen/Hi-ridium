import { CanalSchem } from "../Schem/Schematica";
import { reEmbed } from "../Constructors/reEmbed";
export async function execute(interaction: any, client: any) {
  const findChannel = await CanalSchem.findOne({
    guildId: interaction.guildId,
  });
  let suggestionChannel = client.channels.cache.get(findChannel?.sChannelId);
  var Text1 = await interaction.fields.getTextInputValue("sGuildText1");
  var Text2 = await interaction.fields.getTextInputValue("sGuildText2");

  let embed = new reEmbed(
    `${interaction.user.username} > "${Text1}"`,
    `BLURPLE`,
    `\`\`\`${Text2}\`\`\``,
    interaction.user,
    `${interaction.user.avatarURL({ dynamic: true })}`
  ).builder();
  let message = await suggestionChannel.send({
    embeds: [embed],
    fetchReply: true,
  });
  message.react("👍");
  message.react("👎");
  return interaction.reply({
    content: `[✔️] Ação executada com sucesso. (<#${findChannel?.sChannelId}>)`,
    ephemeral: true,
  });
}
