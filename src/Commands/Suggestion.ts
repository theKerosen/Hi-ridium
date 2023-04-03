import { Command } from "../interfaces/command";
import { BModal } from "../Constructors/Modal";
import { SlashCommandBuilder, TextInputStyle } from "discord.js";
export = {
  data: new SlashCommandBuilder()
    .setName("sugestão")
    .setDescription("► Enviar sugestão...")
    .addSubcommand((sub) =>
      sub.setName("servidor").setDescription("...para o servidor")
    ),
  async execute(interaction) {
    const modal = new BModal()
      .createModal("sugestão", "Sugestão")
      .addText(
        "SuggestionInput1",
        `Qual é a ideia, ${interaction.user.username}?`,
        TextInputStyle.Short,
        "Mais cupcakes no chat geral.",
        24,
        150,
        true
      )
      .addText(
        "SuggestionInput2",
        `Conte me mais, ${interaction.user.username}!`,
        TextInputStyle.Paragraph,
        "Se os administradores conseguissem bancar uma festa...",
        68,
        250,
        true
      );
    await interaction.showModal(modal);
  },
} as Command;
