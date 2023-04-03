import { SlashCommandBuilder } from "discord.js";
import { BEmbed } from "../Constructors/Embed";
import { BStringMenu } from "../Constructors/SelectMenu";
import { ReportSchem } from "../Schem/Schematica";
import { Command } from "../interfaces/command";
export = {
  data: new SlashCommandBuilder()
    .setName("denunciar")
    .setDescription("► Denuncie um usuário mal-intencionado")
    .addUserOption((sub) =>
      sub
        .setName("usuário")
        .setDescription("► Usuário para ser denunciado...")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const reportedUser = interaction.options.getUser("usuário");
    client?.misc.set(`report_${interaction.user.id}`, reportedUser?.id);
    const menu = new BStringMenu().createStringMenu(
      "report",
      "► Selecione o tipo da denúncia...",
    ).setOptions([{label: "Provocações indesejadas", value: "provocação"},
    {label: "Avatar indecente", value: "avatar indecente"},
    {label: "Descriminação", value: "descriminação"},
    {label: "Conteúdo falso", value:"conteúdo falso"},
    {label: "Conteúdo Sexual", value: "conteúdo sexual"},
    {label: "Propaganda nazista", value: "propaganda nazista"},
    {label: "Comportamento ilegal", value: "ações ilegais"},
    {label: "Menções fantasmas", value: "menção falsa"},
    {label: "Spam", value: "spam"},
    {label: "Divulgação", value: "divulgação"},
    {label: "Cheats", value: "cheats"},
    {label: "MicSpam", value: "micspam"}])
    const embed = new BEmbed().setADC(
      { name: "<⚠️> | Denúncia" },
      `O usuário denunciado será "\`${reportedUser?.username}\`"\n por favor, selecione o motivo abaixo.`,
      "Blurple"
    )

    await ReportSchem.findOneAndUpdate(
      {
        ReportedUserId: reportedUser?.id,
      },
      {},
      { upsert: true, new: true }
    );
    interaction.reply({
      embeds: [embed],
      components: [menu],
      ephemeral: true,
    });
  },
} as Command;
