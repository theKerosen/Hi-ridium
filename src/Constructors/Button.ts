import {
  ButtonBuilder,
  ActionRowBuilder,
  APIButtonComponent,
  ButtonComponentData,
  ButtonStyle,
} from "discord.js";
export class ButtonBuilding extends ButtonBuilder {
  constructor(
    data?: Partial<ButtonComponentData> | Partial<APIButtonComponent>
  ) {
    super(data);
  }
  setButton(
    customId: string,
    Label: string,
    Style?: ButtonStyle,
    Disabled?: boolean | false
  ) {
    super
      .setCustomId(customId)
      .setDisabled(Disabled)
      .setLabel(Label)
      .setStyle(Style ?? ButtonStyle.Primary);
  }
}
export class BButton extends ActionRowBuilder<ButtonBuilder> {
  constructor(
    data?: Partial<ButtonComponentData> | Partial<APIButtonComponent>
  ) {
    super(data);
  }
  addButton(
    customId: string,
    Label: string,
    Style?: ButtonStyle,
    Disabled?: boolean
  ) {
    return super.addComponents(
      new ButtonBuilding()
        .setCustomId(customId)
        .setDisabled(Disabled ?? false)
        .setLabel(Label)
        .setStyle(Style ?? ButtonStyle.Primary)
    );
  }
}
