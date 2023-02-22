<h1 align="left">Hi-ridium Project
  <img src="https://cdn.discordapp.com/attachments/943547363031670785/1076471508861472788/Sem_Titulo-7.png" height="25" alt="stats graph"/></h1>

Hi-ridium is a Project focused on my self-learning journey on how to make global, easily adaptable, highly configurable and fast Discord Bots.

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
