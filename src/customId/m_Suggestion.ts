import { CanalSchem } from "../Schem/Schematica";
import { Embed } from "../Constructors/Embed";
export async function execute(interaction: any, client: any) {
  const findChannel = await CanalSchem.findOne({
    guildId: interaction.guildId,
  });
  let suggestionChannel = client.channels.cache.get(findChannel?.sChannelId);
  var Text1 = await interaction.fields.getTextInputValue("sGuildText1");
  var Text2 = await interaction.fields.getTextInputValue("sGuildText2");

  let embed = new Embed("BLURPLE").Text(
    `${interaction.user.username} > "${Text1}"`,
    `\`\`\`${Text2}\`\`\``,
    `${new Date()}`
  );
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
