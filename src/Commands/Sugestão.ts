import { Command } from "../Utils/interfaces";
import { reModal } from "../Constructors/reModal";
export = {
  data: {
    name: "enviar",
    description: "► Enviar...",
    type: 1,
    options: [
      {
        name: "sugestão",
        description: "► Enviar uma sugestão...",
        type: "SUB_COMMAND_GROUP",
        options: [
          {
            name: "servidor",
            description: "► Envie uma sugestão para a guilda atual",
            type: "SUB_COMMAND",
          },
        ],
      },
    ],
  },
  async execute(client, interaction) {
    const modal = new reModal("sGuildModal", "Sugestão").insertInputs(
      ["sGuildText1", "sGuildText2"],
      [
        `Qual é a ideia, ${interaction.user.username}?`,
        `Conte me mais, ${interaction.user.username}!`,
      ],
      ["SHORT", "PARAGRAPH"],
      [24, 68],
      [150, 250],
      [true, true]
    );
    await interaction.showModal(modal!);
  },
} as Command;
