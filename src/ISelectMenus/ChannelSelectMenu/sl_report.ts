import { ButtonStyle, ChannelSelectMenuInteraction } from "discord.js";
import { Hiridium } from "../../Utils/Client";
import { CanalSchem } from "../../Schem/Schematica";
import { BButton } from "../../Constructors/Button";
import { BEmbed } from "../../Constructors/Embed";
export async function execute(
  interaction: ChannelSelectMenuInteraction,
  client: Hiridium
) {
    const Canal = client.channels.cache.get(interaction.values[0]);
    await CanalSchem.findOneAndUpdate(
      { guildId: interaction.guildId },
      {
        dChannelId: Canal?.id,
        date: Date.now(),
      },
      { upsert: true, new: true }
    );
    const search = await CanalSchem.findOne({ guildId: interaction.guildId });
    const dChannel =
      interaction.guild?.channels.cache.get(search?.dChannelId as string) ||
      "> ❌ `Não configurado`";
    const sChannel =
      interaction.guild?.channels.cache.get(search?.sChannelId as string) ||
      "> ❌ `Não configurado`";
    const embed = new BEmbed().addFields(
      {
        name: "Canal de Denúncias",
        value: `${dChannel?.toString()}`,
        inline: true,
      },
      {
        name: "Canal de Sugestões",
        value: `${sChannel?.toString()}`,
        inline: true,
      }
    );

    const buttons = new BButton()
      .addButton({
        customId: "button_changeReportChannel",
        label: "Alt. Denúncias",
        style: ButtonStyle.Success
})
      .addButton({
        customId: "button_changeSuggestionChannel",
       label: "Alt. Sugestões",
       style: ButtonStyle.Success
});

      interaction.reply({ embeds: [embed], components: [buttons], ephemeral: true });
    console.log(
      `\x1b[35m[Hi-Ridium] > \x1b[36mCanal de denúncias alterado para "${Canal?.id}" em "${interaction.guild?.name}"`
    );
}