import { reEmbed } from "../Constructors/reEmbed";
import { selMenu } from "../Constructors/selMenu";
import { ReportSchem } from "../Schem/Schematica";
import { Command } from "../Utils/interfaces";
export = {
  data: {
    name: "denunciar",
    description: "► Denuncie um usuário mal-intencionado",
    type: 1,
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
    var reportedUser = interaction.options.getUser("usuário");
    let menu = new selMenu(
      ["report"],
      [3],
      ["► Selecione o tipo da denúncia..."],
      [false],
      [
        {
          label: [
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
          description: [
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
          value: [
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
          ],
        },
      ]
    ).builder();
    let embed = new reEmbed(
      "<⚠️> | Denúncia",
      `O usuário denunciado será "\`${reportedUser?.username}\`"\n por favor, selecione o motivo abaixo.`,
      "YELLOW",
      `${reportedUser?.id}`,
      `${interaction.user.avatarURL({ dynamic: true })}`
    ).builder();
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
