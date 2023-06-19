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
      .createModal({ custom_id: "sugestão", title: "Sugestão" })
      .addText({
        custom_id: "SuggestionInput1",
        label: `Qual é a ideia, ${interaction.user.username}?`,
        style: TextInputStyle.Short,
        placeholder: "Mais cupcakes no chat geral.",
        min_length: 24,
        max_length: 150,
        required: true,
      })
      .addText({
        custom_id: "SuggestionInput2",
        label: `Conte me mais, ${interaction.user.username}!`,
        style: TextInputStyle.Paragraph,
        placeholder: "Se os administradores conseguissem bancar uma festa...",
        min_length: 68,
        max_length: 250,
        required: true,
      });
    await interaction.showModal(modal);
  },
} as Command;
