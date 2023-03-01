<h1 align="left">Hi-ridium Project
  <img src="https://cdn.discordapp.com/attachments/943547363031670785/1076471508861472788/Sem_Titulo-7.png" height="25" alt="stats graph"/></h1>

Hi-ridium is a Project focused on my self-learning journey on how to make global, easily adaptable, highly configurable and fast Discord Bots.

## How to create Commands?

Creating Commands is pretty basic, just go to the "Commands" folder (or the folder that you're curently using for the commands) and create a new file with a very nice name (must be nice),
after that, you'll need to import the Command interface from "command.ts" like so:

```typescript
import { Command } from "path/to/command.ts";
```

after that, you'll need to export some values in order to create a command:

```typescript
export = {
  data: {
    name: "ping",
    description: "this command shows the client's current ping",
    type: "ACTION_ROW",
    options: []
  }
} as Command
```
You might be asking yourself "huh, what the f* is the "options" for? and where do I start adding things to my commands?" well, allow me to show to you:
```typescript
export = {
  data: {
    name: "ping",
    description: "this command shows the ping of...",
    type: "ACTION_ROW",
    options: [
      {
        name: "client",
        description: "...the bot",
        type: "SUBCOMMAND"
      },
      {
        name: "user",
        description: "...your client",
        type: "SUBCOMMAND"
      }
    ] 
    //inside of this array you can add stuff like Subcommands, User selection, Channel selection, etc.
    //Everything needs to have these three components: "name", "description" and "type".
  }
  execute(interaction, client) {
    //your beautiful (totally not CTRL C'd) code goes here!!
  }
} as Command
```
Everything (except the name and description, of course) should be fully auto-completable, so you won't have too much trouble with remembering stuff.

## How to respond to Message Components?

So, you've just created a very cool button, maybe a nice modal or a good-looking select menu and is wondering "how to maek interection spit fax?" don't worry sonny, let me help you with that!
First, in this project there are 3 *(three, not two nor one)* folders with distinct names:
- IModals;
- ISelectMenus;
- IButtons.

Pick your flavour of folder *(if you're creating a Modal, use the IModal and blah blah blah)* and create a new file inside there.

Notice that the name of this file needs to be the same as the Custom ID you've defined for your Modal/Button/SelectMenu.
Let's pretend that I just created a very nice and shiny red button *(everybody likes to press those, right?)*
```typescript
import { Button } from "path/to/button"

const Cool_Button = new Button().builder(["Dangerous_Button"], ["Press it"], ["DANGER"]);
```
This button's Id is "Dangerous_Button", so I need to create a file with this exact name in order for it to work as intended.

**~file comically plops into existence~**

They... grow so fast. Anyways, inside this new file we need some coding mess for it to work.
The first thing you need to know is: WHAT TYPE OF INTERACTION ARE YOU USING?
Don't worry, there are only three of those here.
- ButtonInteraction;
- ModalSubmitInteraction;
- SelectMenuInteraction.
Yeah, pretty easy, right? Right...?

Anyway, just remember those, they are very important.
In my case, I am using a Button, so I need to use the ButtonInteraction.

```typescript
import { ModalSubmitInteraction } from "discord.js";
import { Hiridium } from "../Utils/Client";
export async function execute(
  interaction: ModalSubmitInteraction,
  client: Hiridium
) {
  //your code goes here!
}
```
And done, you can reply back to a button or whatever interaction now!


## Constructors/Imports

I made some useful constructors to allow for improved readability. If you wanna use them, just download the "Constructors" folder (inside src), drag it to your project folder and import the constructors like this:

```typescript
import { Embed } from "path/to/Constructors/Embed";
import { Modal } from "path/to/Constructors/Modal";
import { SelectMenu } from "path/to/Constructors/SelectMenu";
import { Button } from "path/to/Constructors/Button";
```

## Constructors/Usage

These constructors are just a _wrapper_, so if you understand quite a bit about how Embeds, Modals, Select Menus and Buttons work, you could easily modify them to your liking.
_the Developer Wiki can and WILL help you here._

Embed

```typescript
//
// NOTE: After you use ".Text()" the embed will automatically turn into
// an Embed Object, essentially having the same functionality as vanilla Discord.js.
//
const Nice_Embed = new Embed().Text(
  "Author",
  "Description",
  "Color",
  "Footer",
  "Thumbnail URL",
  "Image URL"
);

interaction.reply({ embeds: [Nice_Embed] });
```

Modal

```typescript
//
// Modals are a bit quirky,
// You can add new text fields by using Arrays.
//
const Good_Modal = new Modal("Modal Id", "Modal Title").insertInputs(
  ["custom IDs"],
  ["Labels"],
  ["Styles"],
  ["Minimum Length"],
  ["Maximum Length"],
  [true /*Required?*/]
);

//Too hard to understand? here is an Example:
const Good_Modal = new Modal("hello1", "Hello!").insertInputs(
  ["hellotext1", "hellotext2"],
  ["What is your name?", "Tell us a bit about yourself."],
  ["SHORT", "PARAGRAPH"],
  [0, 0],
  [32, 125],
  [true, false]
);
interaction.showModal(Good_Modal);
```

Buttons

```typescript
//
// Same stuff as the Modals.
//

const Cool_Button = new Button().builder(["Id"], ["Label"], ["Style"]);

interaction.reply({ components: [Cool_Button] });
```

Select Menu

```typescript
//
// This one is very helpful since select menus are boring.
//
const Select_Menu = new SelectMenu().builder("Id", 3 /*Type*/, "Placeholder", [
  {
    label: ["Cool label 1", "Cool label 2"],
    description: [
      "Cool description for Cool Label 1",
      "Cooler description for Cool label 2",
    ],
    value: ["value_for_label1", "value_for_label2"],
  },
]);

interaction.reply({ components: [Select_Menu] });
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

*also.. don't eat folders.*
````
