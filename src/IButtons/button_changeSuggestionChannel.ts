import { ButtonInteraction, ChannelType } from "discord.js";
import { BChannelMenu } from "../Constructors/SelectMenu";

export async function execute(interaction: ButtonInteraction) {
  const ChannelMenu = new BChannelMenu()
    .createChannelMenu({
      customId: "sl_suggestion",
      placeholder: "Selecione um canal...",
    })
    .MaxValues(1)
    .MinValues(1)
    .addChannelTypes([ChannelType.GuildText]);
  interaction.reply({
    content: "Selecione um canal para as sugestões",
    ephemeral: true,
    components: [ChannelMenu],
  });
}
