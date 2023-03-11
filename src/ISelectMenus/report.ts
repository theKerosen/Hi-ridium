import { SelectMenuInteraction, TextChannel } from "discord.js";
import { Embed } from "../Constructors/Embed";
import { ReportSchem } from "../Schem/Schematica";
import { CanalSchem } from "../Schem/Schematica";
import { Hiridium } from "../Utils/Client";
export async function execute(
  interaction: SelectMenuInteraction,
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
  const embed = new Embed().builder(
    " ⚠️| Denúncia",
    `${reportedUser} foi reportado por <@${interaction.user.id}>\n> Motivo: \`${interaction.values[0]}\``,
    `YELLOW`,
    `${new Date()}`
  );
  const reportChannel = await client.channels.cache.get(
    findChannel?.dChannelId ?? ""
  );
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
  (reportChannel as TextChannel).send({ embeds: [embed] });
}
