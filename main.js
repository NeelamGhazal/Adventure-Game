#!/usr/bin/env ts-node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.rgb(255, 115, 7).bold(`\n\t\t\t---------------------------------------------------`));
console.log(chalk.rgb(255, 68, 0).bold(`\t\t\t  <<<<<<<< Welcome to the Adventure Game >>>>>>>>`));
console.log(chalk.rgb(255, 115, 7).bold(`\t\t\t---------------------------------------------------\n`));
// Class Player
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        this.fuel = Math.max(this.fuel - 25, 0);
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
// Class Opponent
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        this.fuel = Math.max(this.fuel - 25, 0);
    }
}
// Player Name
const player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name: ",
});
// Opponent Select
const opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Opponent",
    choices: ["Skeleton", "Assassin", "Zombie"],
});
// Gather Data
const p1 = new Player(player.name);
const o1 = new Opponent(opponent.select);
// Function to handle the game loop
const gameLoop = async () => {
    do {
        const ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Action",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."],
        });
        if (ask.opt === "Attack") {
            const num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            }
            else {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion. Your Fuel Is ${p1.fuel}`));
        }
        if (ask.opt === "Run For Your Life..") {
            console.log(chalk.red.italic("You Lose, Better Luck Next Time."));
            process.exit();
        }
        if (p1.fuel <= 0) {
            console.log(chalk.red.italic("You Lose, Better Luck Next Time."));
            process.exit();
        }
        if (o1.fuel <= 0) {
            console.log(chalk.green.italic("You Win!"));
            process.exit();
        }
    } while (true);
};
// Opponent-specific behaviors
switch (o1.name) {
    case "Skeleton":
        await gameLoop();
        break;
    case "Assassin":
        console.log(chalk.blue(`You are facing ${o1.name}. Be careful!`));
        await gameLoop();
        break;
    case "Zombie":
        console.log(chalk.blue(`You are facing ${o1.name}. Stay alert!`));
        await gameLoop();
        break;
    default:
        console.log(chalk.red("Invalid Opponent"));
        process.exit();
}
