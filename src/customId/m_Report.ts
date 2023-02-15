import { Embed } from "../Constructors/Embed";
import { ReportSchem } from "../Schem/Schematica";
import { CanalSchem } from "../Schem/Schematica";
export async function execute(interaction: any, client: any) {
  interaction.update({
    ephemeral: true,
    components: [],
  });
  const findChannel = await CanalSchem.findOne({
    guildId: interaction.guildId,
  });
  const reportedUser = client.users.cache.get(
    interaction.message.embeds[0].footer.text
  );
  const embed = new Embed().Text(
    " ⚠️| Denúncia",
    `${reportedUser} foi reportado por <@${interaction.user.id}>\n> Motivo: \`${interaction.values[0]}\``,
    `YELLOW`,
    `${new Date()}`
  );
  let reportChannel = await client.channels.cache.get(findChannel?.dChannelId);
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
  reportChannel.send({ embeds: [embed] });
}
