import { CanalSchem } from "../Schem/Schematica";
import { Command } from "../Utils/interfaces";
import { Permissions } from "discord.js";

export = {
  data: {
    name: "canal",
    description: "► [ADMIN] Comando para configuração de canais",
    type: "ACTION_ROW",
    options: [
      {
        name: "selecionar",
        description: "► [ADMIN] Selecionar/Alterar canais dentro da guilda",
        type: "SUB_COMMAND_GROUP",
        options: [
          {
            name: "sugestão",
            description: "► [ADMIN] Selecione/Altere o canal de sugestões",
            type: "SUB_COMMAND",
            options: [
              {
                name: "canal",
                description: "► Selecione o canal de sugestões",
                type: "CHANNEL",
                required: true,
              },
            ],
          },
          {
            name: "denúncias",
            description: "► [ADMIN] Selecione/Altere o canal de denúncias",
            type: "SUB_COMMAND",
            options: [
              {
                name: "canal",
                description: "► Selecione o canal de denúncias",
                type: "CHANNEL",
                required: true,
              },
            ],
          },
          {
            name: "opiniões",
            description: "► [ADMIN] Selecione/Altere o canal de opiniões",
            type: "SUB_COMMAND",
            options: [
              {
                name: "canal",
                description: "► Selecione o canal de opiniões",
                type: "CHANNEL",
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
  async execute(client, interaction) {
    const Guild = client.guilds.cache.get(interaction.guildId ?? "");
    const User = Guild?.members.cache.get(interaction.user.id);
    if (!User?.permissions.has(Permissions.FLAGS.ADMINISTRATOR))
      return interaction.reply({
        content: "[❌] Sem permissão.",
        ephemeral: true,
      });
    if (interaction.options.getSubcommand() === "sugestão") {
      const Canal = interaction.options.getChannel("canal");

      if (Canal?.type !== "GUILD_TEXT")
        return interaction.reply({
          content: "[❌] Esse canal não é de texto.",
          ephemeral: true,
        });

      await CanalSchem.findOneAndUpdate(
        { guildId: interaction.guildId },
        {
          sChannelId: Canal?.id,
          sChannelName: Canal?.name,
          date: Date.now(),
        },
        { upsert: true, new: true }
      );
      interaction.reply({
        content: `[✔️] Ação executada com sucesso. (<#${Canal?.id}>)`,
        ephemeral: true,
      });
      console.log(
        `\x1b[35m[Hi-Ridium] > \x1b[36mCanal de sugestões alterado para "${Canal?.name}" em "${Guild?.name}"`
      );
    }
    if (interaction.options.getSubcommand() === "denúncias") {
      const Canal = interaction.options.getChannel("canal");

      if (Canal?.type !== "GUILD_TEXT")
        return interaction.reply({
          content: "[❌] Esse canal não é de texto.",
          ephemeral: true,
        });

      await CanalSchem.findOneAndUpdate(
        { guildId: interaction.guildId },
        {
          dChannelId: Canal?.id,
          dChannelName: Canal?.name,
        },
        { upsert: true, new: true }
      );
      interaction.reply({
        content: `[✔️] Ação executada com sucesso. (<#${Canal?.id}>)`,
        ephemeral: true,
      });
      console.log(
        `\x1b[35m[Hi-Ridium] > \x1b[36mCanal de denúncias alterado para "${Canal?.name}" em "${Guild?.name}"`
      );
    }
    if (interaction.options.getSubcommand() === "opiniões") {
      const Canal = interaction.options.getChannel("canal");

      if (Canal?.type !== "GUILD_TEXT")
        return interaction.reply({
          content: "[❌] Esse canal não é de texto.",
          ephemeral: true,
        });
      await CanalSchem.findOneAndUpdate(
        {
          guildId: interaction.guildId,
        },
        {
          oChannelId: Canal?.id,
          oChannelName: Canal?.name,
        }
      );
      interaction.reply({
        content: `[✔️] Ação executada com sucesso. (<#${Canal?.id}>)`,
        ephemeral: true,
      });
      console.log(
        `\x1b[35m[Hi-Ridium] > \x1b[36mCanal de opiniões alterado para "${Canal?.name}" em "${Guild?.name}"`
      );
    }
  },
} as Command;
