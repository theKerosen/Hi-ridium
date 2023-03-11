import { Command } from "../Utils/command";
import { RepSchem } from "../Schem/Schematica";
import { Embed } from "../Constructors/Embed";

export = {
  data: {
    name: "reputação",
    description: "► De uma reputação...",
    type: "ACTION_ROW",
    options: [
      {
        name: "remover",
        description: "► Adicione pontos negativos para um usuário...",
        type: "SUB_COMMAND",
        options: [
          {
            name: "usuário",
            description: "► Usuário...",
            type: "USER",
            required: true,
          },
          {
            name: "comentário",
            description: "► Comentário...?",
            type: "STRING",
            required: true,
          },
        ],
      },
      {
        name: "comentários",
        description: "► Veja uma lista de comentários sobre um usuário...",
        type: "SUB_COMMAND",
        options: [
          {
            name: "usuário",
            description: "► Usuário...",
            type: "USER",
            required: true,
          },
        ],
      },
      {
        name: "adicionar",
        description: "► Adicione pontos positivos para um usuário...",
        type: "SUB_COMMAND",
        options: [
          {
            name: "usuário",
            description: "► Usuário...",
            type: "USER",
            required: true,
          },
          {
            name: "comentário",
            description: "► Comentário...?",
            type: "STRING",
            required: true,
          },
        ],
      },
    ],
  },
  async execute(client, interaction) {
    if (interaction.options.getSubcommand() == "adicionar") {
      const Comment = interaction.options.getString("comentário");
      const User = interaction.options.getUser("usuário");

      if (User?.id === interaction?.user?.id)
        return interaction.reply({
          content:
            "[❌] Você não pode adicionar pontos de reputação a si mesmo.",
          ephemeral: true,
        });

      await RepSchem.findOneAndUpdate(
        {},
        {
          UserId: User?.id,
          $push: {
            Comments: {
              $each: [
                {
                  [interaction.user.id]: Comment,
                  createdAt: new Date(),
                  isPositive: true,
                },
              ],
              $sort: {
                createdAt: -1,
              },
            },
          },
          $inc: {
            Reputation: 1,
          },
        },
        {
          upsert: true,
        }
      );

      const Reply = new Embed().builder(
        `${User?.username}🤝${interaction.user.username}`,
        `**🤑 | REPUTAÇÃO ADICIONADA! **\n
        \`\`\`${User?.username} recebeu ponto de reputação de ${interaction.user.username}.\n
        ${interaction.user.username} comentou: "${Comment}"\`\`\``,
        `GREEN`,
        `${new Date()}`
      );

      interaction.reply({ embeds: [Reply] });
    }
    if (interaction.options.getSubcommand() === "remover") {
      const Comment = interaction.options.getString("comentário");
      const User = interaction.options.getUser("usuário");

      if (User?.id === interaction?.user?.id)
        return interaction.reply({
          content: "[❌] Você não pode remover pontos de reputação a si mesmo.",
          ephemeral: true,
        });

      await RepSchem.findOneAndUpdate(
        {},
        {
          UserId: User?.id,
          $push: {
            Comments: {
              $each: [
                {
                  [interaction.user.id]: Comment,
                  createdAt: new Date(),
                  isPositive: false,
                },
              ],
              $sort: {
                createdAt: -1,
              },
            },
          },
          $inc: {
            Reputation: -1,
          },
        },
        {
          upsert: true,
        }
      );

      const Reply = new Embed().builder(
        `${User?.username}🖕 ${interaction.user.username}`,
        `**💸 | REPUTAÇÃO REMOVIDA! **\n
        \`\`\`${User?.username} removeu um ponto de reputação de ${interaction.user.username}.\n
        ${interaction.user.username} comentou: "${Comment}"\`\`\``,
        `RED`,
        `${new Date()}`
      );

      interaction.reply({ embeds: [Reply] });
    }
    if (interaction.options.getSubcommand() === "comentários") {
      const User = interaction.options.getUser("usuário");
      const Index = await RepSchem.findOne({ UserId: User?.id });

      if (!Index)
        return interaction.reply({
          content: "[❌] Este usuário não tem reputação alguma.",
          ephemeral: true,
        });

      const LastReply = new Embed().builder(
        `${User?.username}`,
        `Este usuário tem ${Index.Reputation} ponto(s) de reputação e ${Index.Comments.length} comentário(s)`,
        `BLURPLE`,
        `${new Date()}`,
        `${User?.avatarURL()}`
      );
      for (let i = 0; i < Index.Comments.length; i++) {
        const fetchUser = await client.users.fetch(
          Object.keys(Index.Comments[i])[0]
        );
        LastReply?.addFields({
          name: `${fetchUser.username}`,
          value: `> \`${Object.values(Index.Comments[i])[0]}\``,
          inline: true,
        });
      }

      interaction.reply({
        embeds: [LastReply],
        ephemeral: true,
      });
    }
  },
} as Command;
