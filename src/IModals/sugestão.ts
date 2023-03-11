import { CanalSchem } from "../Schem/Schematica";
import { Embed } from "../Constructors/Embed";
import { ModalSubmitInteraction, TextChannel } from "discord.js";
import { Hiridium } from "../Utils/Client";
export async function execute(
  interaction: ModalSubmitInteraction,
  client: Hiridium
) {
  const findChannel = await CanalSchem.findOne({
    guildId: interaction.guildId,
  });
  const suggestionChannel = client.channels.cache.get(
    findChannel?.sChannelId ?? ""
  );
  const embed = new Embed().builder(
    `${interaction.user.username} > "${interaction.fields.getTextInputValue(
      "SuggestionInput1"
    )}"`,
    `\`\`\`${interaction.fields.getTextInputValue("SuggestionInput2")}\`\`\``,
    `BLURPLE`,
    `${new Date()}`
  );
  const message = await (suggestionChannel as TextChannel).send({
    embeds: [embed],
  });
  message.react("👍");
  message.react("👎");
  return interaction.reply({
    content: `[✔️] Ação executada com sucesso. (<#${findChannel?.sChannelId}>)`,
    ephemeral: true,
  });
}
