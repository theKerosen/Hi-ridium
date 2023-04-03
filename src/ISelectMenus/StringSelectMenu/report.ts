import { StringSelectMenuInteraction, TextChannel } from "discord.js";
import { BEmbed } from "../../Constructors/Embed";
import { ReportSchem } from "../../Schem/Schematica";
import { CanalSchem } from "../../Schem/Schematica";
import { Hiridium } from "../../Utils/Client";
export async function execute(
  interaction: StringSelectMenuInteraction,
  client: Hiridium
) {
  interaction.update({
    components: [],
  });
  const findChannel = await CanalSchem.findOne({
    guildId: interaction.guildId,
  });
  const reportedUser = client.users.cache.get(
    client.misc.get(`report_${interaction.user.id}`) as string
  );
  const embed = new BEmbed().setADC(
    { name: "⚠️| Denúncia" },
    `${reportedUser} foi reportado por <@${interaction.user.id}>\n> Motivo: \`${interaction.values[0]}\``,
    "Gold"
  );
  const reportChannel = (await client.channels.cache.get(
    findChannel?.dChannelId ?? ""
  )) as TextChannel;
  await ReportSchem.findOneAndUpdate(
    {},
    {
      $push: {
        Reports: {
          $each: [
            {
              userId: interaction.user.id,
              Reason: interaction.values[0],
              date: Date.now(),
            },
          ],
          $sort: {
            date: -1,
          },
        },
      },
      $inc: {
        ReportPoints: 1,
      },
    },
    { upsert: true, new: true }
  );
  if (reportChannel) reportChannel.send({ embeds: [embed] });
}
