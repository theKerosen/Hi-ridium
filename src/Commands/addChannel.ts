import { Command } from "../interfaces/command";
import {
  ButtonStyle,
  PermissionFlagsBits,
  SlashCommandBuilder,
} from "discord.js";
import { BEmbed } from "../Constructors/Embed";
import { CanalSchem } from "../Schem/Schematica";
import { BButton } from "../Constructors/Button";

export = {
  data: new SlashCommandBuilder()
    .setName("canal")
    .setDescription("► [ADMIN] Comando para configuração de canais"),
  async execute(interaction, client) {
    const Guild = client?.guilds.cache.get(interaction.guildId ?? "");
    const User = Guild?.members.cache.get(interaction.user.id);
    if (!User?.permissions.has(PermissionFlagsBits.Administrator))
      return interaction.reply({
        content: "[❌] Sem permissão.",
        ephemeral: true,
      });
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
        style: ButtonStyle.Success,
      })
      .addButton({
        customId: "button_changeSuggestionChannel",
        label: "Alt. Sugestões",
        style: ButtonStyle.Success,
      });

    interaction.reply({
      embeds: [embed],
      components: [buttons],
      ephemeral: true,
    });
  },
} as Command;
