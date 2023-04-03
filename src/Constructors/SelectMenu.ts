import {
  ActionRowBuilder,
  ActionRowComponentData,
  ActionRowData,
  APIActionRowComponent,
  APIActionRowComponentTypes,
  APIMessageActionRowComponent,
  APIModalActionRowComponent,
  JSONEncodable,
  StringSelectMenuBuilder,
  APIStringSelectComponent,
  APISelectMenuOption,
  ChannelType,
  APIChannelSelectComponent,
  ChannelSelectMenuComponentData,
  ChannelSelectMenuBuilder,
  StringSelectMenuComponentData,
  UserSelectMenuBuilder,
  APIUserSelectComponent,
  UserSelectMenuComponentData,
  RoleSelectMenuBuilder,
  APIRoleSelectComponent,
  RoleSelectMenuComponentData,
} from "discord.js";
export class StringMenuBuilding extends StringSelectMenuBuilder {
  constructor(data?: Partial<StringSelectMenuComponentData | APIStringSelectComponent>) {
    super(data as Partial<StringSelectMenuComponentData | APIStringSelectComponent>);
  }
  createStringMenu(customId: string, placeholder: string, disabled?: boolean) {
   return super.setCustomId(customId).setPlaceholder(placeholder).setDisabled(disabled ?? false)
  }
  setOptions(Options: APISelectMenuOption[]) {
   return super.addOptions(Options)
  }
  MaxValues(value: number) {
    return super.setMaxValues(value)
  }
  MinValues(value: number) {
    return super.setMinValues(value)
  }
}
export class UserMenuBuilding extends UserSelectMenuBuilder {
  constructor(data?: Partial<UserSelectMenuComponentData | APIUserSelectComponent>) {
    super(data as Partial<UserSelectMenuComponentData | APIUserSelectComponent>);
  }
  createStringMenu(customId: string, placeholder: string, disabled?: boolean) {
   return super.setCustomId(customId).setPlaceholder(placeholder).setDisabled(disabled ?? false)
  }
  MaxValues(value: number) {
    return super.setMaxValues(value)
  }
  MinValues(value: number) {
    return super.setMinValues(value)
  }
}
export class RoleMenuBuilding extends RoleSelectMenuBuilder {
  constructor(data?: Partial<RoleSelectMenuComponentData | APIRoleSelectComponent>) {
    super(data as Partial<RoleSelectMenuComponentData | APIRoleSelectComponent>);
  }
  createStringMenu(customId: string, placeholder: string, disabled?: boolean) {
   return super.setCustomId(customId).setPlaceholder(placeholder).setDisabled(disabled ?? false)
  }
  MaxValues(value: number) {
    return super.setMaxValues(value)
  }
  MinValues(value: number) {
    return super.setMinValues(value)
  }
}
export class ChannelMenuBuilding extends ChannelSelectMenuBuilder {
  constructor(data?: Partial<ChannelSelectMenuComponentData | APIChannelSelectComponent>) {
    super(data as Partial<ChannelSelectMenuComponentData | APIChannelSelectComponent>);
  }
  createChannelMenu(customId: string, placeholder: string, disabled?: boolean) {
   return super.setCustomId(customId).setPlaceholder(placeholder).setDisabled(disabled ?? false)
  }
  MaxValues(value?: number) {
    return super.setMaxValues(value ?? 5)
  }
  MinValues(value?: number) {
    return super.setMinValues(value ?? 1)
  }
  addChannelTypes(...types: ChannelType[]) {
    return super.addChannelTypes(types)
  }
}
export class BStringMenu extends ActionRowBuilder<StringMenuBuilding> {
  constructor(
    data?: Partial<
      | ActionRowData<
          ActionRowComponentData | JSONEncodable<APIActionRowComponentTypes>
        >
      | APIActionRowComponent<
          APIMessageActionRowComponent | APIModalActionRowComponent
        >
    >
  ) {
    super(data);
  }
  createStringMenu(custom_id: string, placeholder: string, disabled?: boolean) {
  return super.addComponents(new StringMenuBuilding().setCustomId(custom_id).setPlaceholder(placeholder ?? "...").setDisabled(disabled ?? false))
  
  }
  setOptions(Options: APISelectMenuOption[]) {
    return super.setComponents(this.components[0].setOptions(Options))
   }
   MaxValues(value?: number) {
     return super.setComponents(this.components[0].setMaxValues(value ?? 5))
   }
   MinValues(value?: number) {
    return super.setComponents(this.components[0].setMinValues(value ?? 1))
   }
}

export class BChannelMenu extends ActionRowBuilder<ChannelMenuBuilding> {
  constructor(
    data?: Partial<
      | ActionRowData<
          ActionRowComponentData | JSONEncodable<APIActionRowComponentTypes>
        >
      | APIActionRowComponent<
          APIMessageActionRowComponent | APIModalActionRowComponent
        >
    >
  ) {
    super(data);
  }
  createChannelMenu(customId: string, placeholder: string, disabled?: boolean) {
    return super.addComponents(new ChannelMenuBuilding().setCustomId(customId).setPlaceholder(placeholder ?? "...").setDisabled(disabled ?? false))
   }
   MaxValues(value?: number) {
    return super.setComponents(this.components[0].setMaxValues(value ?? 5))
   }
   MinValues(value?: number) {
    return super.setComponents(this.components[0].setMinValues(value ?? 1))
   }
   addChannelTypes(types: ChannelType[]) {
     return super.setComponents(this.components[0].setChannelTypes(types))
   }
}

export class BUserMenu extends ActionRowBuilder<UserMenuBuilding> {
  constructor(
    data?: Partial<
      | ActionRowData<
          ActionRowComponentData | JSONEncodable<APIActionRowComponentTypes>
        >
      | APIActionRowComponent<
          APIMessageActionRowComponent | APIModalActionRowComponent
        >
    >
  ) {
    super(data);
  }
  createChannelMenu(customId: string, placeholder: string, disabled?: boolean) {
    return super.addComponents(new UserMenuBuilding().setCustomId(customId).setPlaceholder(placeholder ?? "...").setDisabled(disabled ?? false))
   }
   MaxValues(value?: number) {
    return super.setComponents(this.components[0].setMaxValues(value ?? 5))
   }
   MinValues(value?: number) {
    return super.setComponents(this.components[0].setMinValues(value ?? 1))
   }
}
export class BRoleMenu extends ActionRowBuilder<RoleMenuBuilding> {
  constructor(
    data?: Partial<
      | ActionRowData<
          ActionRowComponentData | JSONEncodable<APIActionRowComponentTypes>
        >
      | APIActionRowComponent<
          APIMessageActionRowComponent | APIModalActionRowComponent
        >
    >
  ) {
    super(data);
  }
  createChannelMenu(customId: string, placeholder: string, disabled?: boolean) {
    return super.addComponents(new RoleMenuBuilding().setCustomId(customId).setPlaceholder(placeholder ?? "...").setDisabled(disabled ?? false))
   }
   MaxValues(value?: number) {
    return super.setComponents(this.components[0].setMaxValues(value ?? 5))
   }
   MinValues(value?: number) {
    return super.setComponents(this.components[0].setMinValues(value ?? 1))
   }
}
