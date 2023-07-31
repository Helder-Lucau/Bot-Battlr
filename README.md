# Code Challenge: Bot Battlr

## Learning Goals

- Implement a mini web app to practice on components, props, state, events and data fetching in react

## Introduction

For this project, you’ll be building out a React application that displays a list of bots, among other features. 
Welcome to **Bot Battlr**, the one and only spot in the known universe where you can custom build your own Bot Army!

## Project Setup & Pre-requisite Data

In your project directory, create a db.json file and use this [data](https://drive.google.com/file/d/157IfYxr4Bp63-ByF1g1wCP1uOpQ5i2R4/view). for your server DB.
Run this command to get the backend started: `**json-server --watch db.json**`
Test your server by visiting this route in the browser: http://localhost:8001/bots

### Technologies

* JSX
* CSS
* JSON
* HTML

## Project Guidelines

Your project should conform to the following set of guidelines:

### Core Deliverables

As a user, I should be able to:

- See profiles of all bots rendered in `BotCollection`.
- Add an individual bot to my army by clicking on it. The selected bot should
  render in the `YourBotArmy` component. The bot can be enlisted only **once**.
  The bot **does not** disappear from the `BotCollection`.
- Release a bot from my army by clicking on it. The bot disappears from the
  `YourBotArmy` component.
- Discharge a bot from their service forever, by clicking the red button marked
  "x", which would delete the bot both from the backend and from the
  `YourBotArmy` on the frontend.

### Bonus Deliverables

As a user, I should be able to:

- Choose if I want to enlist a bot into my army or just see their data. Clicking
  on the card should instead display a show view (`BotSpecs`) for that bot,
  which should replace `BotsCollection`. BotSpecs should have two buttons: one
  to go back to the list view and another to enlist that bot.
- Sort bots by their health, damage or armor. For this, create a new component,
  `SortBar`.
- When I enlist a bot it will be **removed** from the `BotCollection` and added
  to `YourBotArmy`.
- Filter bots by their class. We can select a few filters at the same time.
- Sort bots by their health, damage or armor. For this, create a new component,
  `SortBar`.
- Only enlist **one** bot from each `bot_class`. The classes are
  `["Support", "Medic", "Assault", "Defender", "Captain", "Witch"]`

## Author
* This project code files is authored by [Helder Lucau](https://github.com/Helder-Lucau).

## License

Copyright (c) 2023 [Helder Lucau](https://github.com/Helder-Lucau).

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files , to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.