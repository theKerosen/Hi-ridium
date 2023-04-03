<h1 align="left">Hi-ridium Project
  <img src="https://cdn.discordapp.com/attachments/943547363031670785/1076471508861472788/Sem_Titulo-7.png" height="25" alt="stats graph"/></h1>

Hi-ridium is a Project focused on my self-learning journey on how to make global, easily adaptable, highly configurable and fast Discord Bots.

## Da environment variables!

First of all, you need a good .env to start with.

```env
#The client's ID
ID=

#The Token
TOKEN=

#Mongoose's URI
MONGO_URI=
```

Just create the .env file and fill it up, then you'll be good to go.

## How to create Commands?

Creating Commands is very simple, just go to the "Commands" folder (or the folder that you're curently using for the commands) and create a new file with a very nice name (must be nice),
after that, you'll need to import the Command interface from "command.ts" like so:

```typescript
import { Command } from "path/to/command.ts";
```

after that, you'll need to use the SlashCommandBuilder in order to create commands:

```typescript
export = {
  data: new SlashCommandBuilder().setName().setDescription(),
   async execute(interaction, client) {}
} as Command;
```

## How to respond to Message Components?

So, you've just created a very cool button, maybe a nice modal or a good-looking select menu and is wondering "how to maek interection spit fax?" don't worry sonny, let me help you with that!
First, in this project there are 3 _(three, not two nor one)_ folders with distinct names:

- IModals;
- ISelectMenus;
- IButtons.

Pick your flavour of folder _(if you're creating a Modal, use the IModal and blah blah blah)_ and create a new file inside there.

Notice that the name of this file needs to be the same as the Custom ID you've defined for your Modal/Button/SelectMenu.
Let's pretend that I just created a very nice and shiny red button _(everybody likes to press those, right?)_

```typescript
import { BButton } from "path/to/button";

const Cool_Button = new BButton()
  .addButton(
    "dangerous_button",
    "Dangerous Button!!",
    ButtonStyle.Danger
); //no need to use my constructors, just use Discord's instead.
```

This button's custom id is "dangerous_button", so I need to create a file with this exact name in order for it to work as intended.

Inside this new file we need some more code in order for it to work.
The first thing you need to know is: WHAT TYPE OF INTERACTION ARE YOU USING?

 - ModalSubmitInteraction, __(for modals)__

 - ButtonInteraction, __(for buttons)__

 - StringSelectMenuInteraction, __(for Multi Select Menus)__

 - AnySelectMenuInteraction, __(for any Select Menu)__

 - RoleSelectMenuInteraction, __(for Role Select Menus)__

 - UserSelectMenuInteraction, __(for User Select Menus)__

 - ChannelSelectMenuInteraction, __(for Channel Select Menus)__

Remember those, they are very important.
In my case, I am using a Button, so I need to use the ButtonInteraction.

```typescript
import { ButtonInteraction } from "discord.js";
import { Hiridium } from "../Utils/Client";
export async function execute(
  interaction: ButtonInteraction,
  client: Hiridium
) {
  interaction.reply({ content: "you pressed a button." })
}
```

And done, you can reply back to a button or whatever interaction now!

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
