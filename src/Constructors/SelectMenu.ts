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
  constructor(
    data?: Partial<StringSelectMenuComponentData | APIStringSelectComponent>
  ) {
    super(
      data as Partial<StringSelectMenuComponentData | APIStringSelectComponent>
    );
  }
  createStringMenu(StringMenu: {
    customId: string;
    placeholder: string;
    disabled?: boolean;
  }) {
    return super
      .setCustomId(StringMenu.customId)
      .setPlaceholder(StringMenu.placeholder)
      .setDisabled(StringMenu.disabled ?? false);
  }
  setOptions(Options: APISelectMenuOption[]) {
    return super.addOptions(Options);
  }
  MaxValues(value: number) {
    return super.setMaxValues(value);
  }
  MinValues(value: number) {
    return super.setMinValues(value);
  }
}
export class UserMenuBuilding extends UserSelectMenuBuilder {
  constructor(
    data?: Partial<UserSelectMenuComponentData | APIUserSelectComponent>
  ) {
    super(
      data as Partial<UserSelectMenuComponentData | APIUserSelectComponent>
    );
  }
  UserMenu(User: {
    customId: string;
    placeholder: string;
    disabled?: boolean;
  }) {
    return super
      .setCustomId(User.customId)
      .setPlaceholder(User.placeholder)
      .setDisabled(User.disabled ?? false);
  }
  MaxValues(value: number) {
    return super.setMaxValues(value);
  }
  MinValues(value: number) {
    return super.setMinValues(value);
  }
}
export class RoleMenuBuilding extends RoleSelectMenuBuilder {
  constructor(
    data?: Partial<RoleSelectMenuComponentData | APIRoleSelectComponent>
  ) {
    super(
      data as Partial<RoleSelectMenuComponentData | APIRoleSelectComponent>
    );
  }
  createRoleMenu(Role: {
    customId: string;
    placeholder: string;
    disabled?: boolean;
  }) {
    return super
      .setCustomId(Role.customId)
      .setPlaceholder(Role.placeholder)
      .setDisabled(Role.disabled ?? false);
  }
  MaxValues(value: number) {
    return super.setMaxValues(value);
  }
  MinValues(value: number) {
    return super.setMinValues(value);
  }
}
export class ChannelMenuBuilding extends ChannelSelectMenuBuilder {
  constructor(
    data?: Partial<ChannelSelectMenuComponentData | APIChannelSelectComponent>
  ) {
    super(
      data as Partial<
        ChannelSelectMenuComponentData | APIChannelSelectComponent
      >
    );
  }
  createChannelMenu(ChannelMenu: {
    customId: string;
    placeholder: string;
    disabled?: boolean;
  }) {
    return super
      .setCustomId(ChannelMenu.customId)
      .setPlaceholder(ChannelMenu.placeholder)
      .setDisabled(ChannelMenu.disabled ?? false);
  }
  MaxValues(value?: number) {
    return super.setMaxValues(value ?? 5);
  }
  MinValues(value?: number) {
    return super.setMinValues(value ?? 1);
  }
  addChannelTypes(...types: ChannelType[]) {
    return super.addChannelTypes(types);
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
  createStringMenu(StringMenu: {
    custom_id: string;
    placeholder: string;
    disabled?: boolean;
  }) {
    return super.addComponents(
      new StringMenuBuilding()
        .setCustomId(StringMenu.custom_id)
        .setPlaceholder(StringMenu.placeholder ?? "...")
        .setDisabled(StringMenu.disabled ?? false)
    );
  }
  setOptions(Options: APISelectMenuOption[]) {
    return super.setComponents(this.components[0].setOptions(Options));
  }
  MaxValues(value?: number) {
    return super.setComponents(this.components[0].setMaxValues(value ?? 5));
  }
  MinValues(value?: number) {
    return super.setComponents(this.components[0].setMinValues(value ?? 1));
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
  createChannelMenu(ChannelMenu: {
    customId: string;
    placeholder: string;
    disabled?: boolean;
  }) {
    return super.addComponents(
      new ChannelMenuBuilding()
        .setCustomId(ChannelMenu.customId)
        .setPlaceholder(ChannelMenu.placeholder ?? "...")
        .setDisabled(ChannelMenu.disabled ?? false)
    );
  }
  MaxValues(value?: number) {
    return super.setComponents(this.components[0].setMaxValues(value ?? 5));
  }
  MinValues(value?: number) {
    return super.setComponents(this.components[0].setMinValues(value ?? 1));
  }
  addChannelTypes(types: ChannelType[]) {
    return super.setComponents(this.components[0].setChannelTypes(types));
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
  createChannelMenu(UserMenu: {
    customId: string;
    placeholder: string;
    disabled?: boolean;
  }) {
    return super.addComponents(
      new UserMenuBuilding()
        .setCustomId(UserMenu.customId)
        .setPlaceholder(UserMenu.placeholder ?? "...")
        .setDisabled(UserMenu.disabled ?? false)
    );
  }
  MaxValues(value?: number) {
    return super.setComponents(this.components[0].setMaxValues(value ?? 5));
  }
  MinValues(value?: number) {
    return super.setComponents(this.components[0].setMinValues(value ?? 1));
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
  createRoleMenu(ChannelMenu: {
    customId: string;
    placeholder: string;
    disabled?: boolean;
  }) {
    return super.addComponents(
      new RoleMenuBuilding()
        .setCustomId(ChannelMenu.customId)
        .setPlaceholder(ChannelMenu.placeholder ?? "...")
        .setDisabled(ChannelMenu.disabled ?? false)
    );
  }
  MaxValues(value?: number) {
    return super.setComponents(this.components[0].setMaxValues(value ?? 5));
  }
  MinValues(value?: number) {
    return super.setComponents(this.components[0].setMinValues(value ?? 1));
  }
}
