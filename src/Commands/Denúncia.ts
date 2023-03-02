import { Embed } from "../Constructors/Embed";
import { SelectMenu } from "../Constructors/SelectMenu";
import { ReportSchem } from "../Schem/Schematica";
import { Command } from "../Utils/command";
export = {
  data: {
    name: "denunciar",
    description: "► Denuncie um usuário mal-intencionado",
    type: "ACTION_ROW",
    options: [
      {
        name: "usuário",
        description: "► Usuário para ser denunciado...",
        type: "USER",
        required: true,
      },
    ],
  },
  async execute(client, interaction) {
    const reportedUser = interaction.options.getUser("usuário");
    const menu = new SelectMenu().builder(
      "report",
      "► Selecione o tipo da denúncia...",
      1,
      12,
      [
        "Provocações indesejadas",
        "Avatar indecente",
        "Descriminação",
        "Conteúdo falso",
        "Conteúdo Sexual",
        "Propaganda nazista",
        "Comportamento ilegal",
        "Menções fantasmas",
        "Spam",
        "Divulgação",
        "Cheats",
        "MicSpam",
      ],
      [
        "Insultos, Apelidos de mau gosto, etc.",
        "Grupos terroristas, extremistas, nazistas, conteúdos sexuais",
        "Insultos a raça, sexualidade, etc.",
        "Notícias falsas, Scam, etc.",
        "Links/Arquivos/Imagens de conteúdo pornográfico",
        "Símbolos, abreviaturas, sobre/nomes ativistas nazistas",
        "Todo tipo de comportamento criminal",
        "Mencionar e então deletar a menção",
        "Mandar várias mensagens seguidas com o mesmo conteúdo",
        "Links de lojas, vídeos, grupos do Discord, etc.",
        "Compartilhando tela utilizando Cheats",
        "Gritando, gemendo, modificadores de voz, etc",
      ],
      [
        "provocação",
        "avatar indecente",
        "descriminação",
        "conteúdo falso",
        "conteúdo sexual",
        "propaganda nazista",
        "ações ilegais",
        "menção falsa",
        "spam",
        "divulgação",
        "cheating",
        "micspam",
      ]
    );
    const embed = new Embed().builder(
      "<⚠️> | Denúncia",
      `O usuário denunciado será "\`${reportedUser?.username}\`"\n por favor, selecione o motivo abaixo.`,
      `YELLOW`,
      `${reportedUser?.id}`
    );
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
