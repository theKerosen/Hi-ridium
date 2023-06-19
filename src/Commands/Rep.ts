import { Command } from "../interfaces/command";
import { RepSchem } from "../Schem/Schematica";
import { BEmbed } from "../Constructors/Embed";
import {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  codeBlock,
} from "discord.js";

export = {
  data: new SlashCommandBuilder()
    .setName("reputação")
    .setDescription("► De uma reputação...")
    .addSubcommand((sub) =>
      sub
        .setName("remover")
        .setDescription("► Adicione pontos negativos para um usuário...")
        .addUserOption((usr) =>
          usr
            .setName("usuário")
            .setDescription("► Usuário...")
            .setRequired(true)
        )
        .addStringOption((string) =>
          string
            .setName("comentário")
            .setDescription("► Comentário..?")
            .setRequired(true)
        )
    )
    .addSubcommand((sub) =>
      sub
        .setName("adicionar")
        .setDescription("► Adicione pontos negativos para um usuário...")
        .addUserOption((usr) =>
          usr
            .setName("usuário")
            .setDescription("► Usuário...")
            .setRequired(true)
        )
        .addStringOption((string) =>
          string
            .setName("comentário")
            .setDescription("► Comentário..?")
            .setRequired(true)
        )
    )
    .addSubcommand((sub) =>
      sub
        .setName("comentários")
        .setDescription("► Veja uma lista de comentários sobre um usuário...")
        .addUserOption((usr) =>
          usr
            .setName("usuário")
            .setDescription("► Usuário...")
            .setRequired(true)
        )
    ),
  async execute(interaction: ChatInputCommandInteraction, client) {
    if (interaction.options.getSubcommand() == "adicionar") {
      const Comment = interaction.options.getString("comentário");
      const User = interaction.options.getUser("usuário");

      if (User?.id === interaction.user.id)
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
      const Reply = new BEmbed().setADC({
        author: {
          name: `${User?.username}🤝${interaction.user.username}`,
        },
        description: `**🤑 | REPUTAÇÃO ADICIONADA! **\n
          ${codeBlock(`${User?.username} recebeu ponto de reputação de ${interaction.user.username}.\n
        ${interaction.user.username} comentou: "${Comment}"`)}`,
        color: "Blurple",
      });

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
      const Reply = new BEmbed().setADC({
        author: {
          name: `${User?.username}🖕 ${interaction.user.username}`,
        },
        description: `**💸 | REPUTAÇÃO REMOVIDA! **\n
          ${codeBlock(`${User?.username} removeu um ponto de reputação de ${interaction.user.username}.\n
          ${interaction.user.username} comentou: "${Comment}"`)}`,
        color: "Red",
      });

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
      const embed = new BEmbed().setADC({
        author: { name: User?.username as string },
        description: `Este usuário tem ${Index.Reputation} ponto(s) de reputação e ${Index.Comments.length} comentário(s)`,
        color: "Blurple",
      });
      for (let i = 0; i < Index.Comments.length; i++) {
        const fetchUser = await client?.users.fetch(
          Object.keys(Index.Comments[i])[0]
        );
        embed.addFields({
          name: `${fetchUser?.username}`,
          value: `> \`${Object.values(Index.Comments[i])[0]}\``,
          inline: true,
        });
      }

      interaction.reply({
        embeds: [embed],
        ephemeral: true,
      });
    }
  },
} as Command;
