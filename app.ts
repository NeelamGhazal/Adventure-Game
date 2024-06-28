#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// Class Player
class Player {
    name: string;
    fuel: number = 100;

    constructor(name: string) {
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
    name: string;
    fuel: number = 100;

    constructor(name: string) {
        this.name = name;
    }

    fuelDecrease() {
        this.fuel = Math.max(this.fuel - 25, 0);
    }
}

// Player Name
const player = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Please Enter Your Name: '
});

// Opponent Select
const opponent = await inquirer.prompt({
    type: 'list',
    name: 'select',
    message: 'Select Your Opponent',
    choices: ['Skeleton', 'Assassin', 'Zombie']
});

// Gather Data
const p1 = new Player(player.name);
const o1 = new Opponent(opponent.select);

// Game Loop
do {
    const ask = await inquirer.prompt({
        type: 'list',
        name: 'opt',
        message: 'Select Your Action',
        choices: ['Attack', 'Drink Portion', 'Run For Your Life..']
    });

    if (ask.opt === 'Attack') {
        const num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.fuelDecrease();
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        } else {
            o1.fuelDecrease();
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        }
    }

    if (ask.opt === 'Drink Portion') {
        p1.fuelIncrease();
        console.log(chalk.bold.italic.green(`You Drink Health Portion. Your Fuel Is ${p1.fuel}`));
    }

    if (ask.opt === 'Run For Your Life..') {
        console.log(chalk.red.italic('You Lose, Better Luck Next Time.'));
        process.exit();
    }

    if (p1.fuel <= 0) {
        console.log(chalk.red.italic('You Lose, Better Luck Next Time.'));
        process.exit();
    }

    if (o1.fuel <= 0) {
        console.log(chalk.green.italic('You Win!'));
        process.exit();
    }
} while (true);















// // console.log(chalk.rgb(255, 115, 7).bold(`\t\t\t===========================================`));
// /*console.log(chalk.rgb(255, 115, 7).bold(`\n\t\t\t--------------------------------------------------------------`));
// console.log(chalk.rgb(255, 68, 0).bold(`\t\t\t  <<<<<<<< Welcome to the Game: Rock Paper Scissors >>>>>>>>`));
// console.log(chalk.rgb(255, 115, 7).bold(`\t\t\t--------------------------------------------------------------\n`));*/

// // Class Player
// class Player {
//     name: string
//     fuel: number = 100
//     constructor(name: string) {
//         this.name = name
//     }
//     fuelDecrease () {
//         this.fuel = Math.max(this.fuel - 25, 0); 
//     }
//     fuelIncrease () {
//         this.fuel = 100
//     }
// }
// // Class Opponent
// class Opponent {
//     name: string
//     fuel: number = 100
//     constructor(name: string) {
//         this.name = name
//     }
//     fuelDecrease () {
//         this.fuel = Math.max(this.fuel - 25, 0);
//     }
// }
// // Player Name
// let player = await inquirer.prompt ({
//     type: 'input',
//     name: 'name',
//     message: 'Please Enter Your Name: '
// })
// // Opponent Select
// let opponent = await inquirer.prompt ({
//     type: 'list',
//     name: 'select',
//     message: 'Select Your Opponent',
//     choices: ['Skeleton', 'Assassin', 'Zombie']
// });
// // Gather Data
// let p1 = new Player (player.name);
// let o1 = new Opponent (opponent.select);

// // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
// // Game Loop
// do{

//     if (opponent.select == 'Skeleton') {
//         let ask = await inquirer.prompt({
//             type: 'list',
//             name: 'opt',
//             message: 'Select Your Action',
//             choices: ['Attack', 'Drink Portion', 'Run For Your Life..']
//         });
//         if (ask.opt == 'Attack') {
//             let num = Math.floor(Math.random() * 2)
//                if (num > 0) {
//                    p1.fuelDecrease()
//                    console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
//                    console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
//                    if ( p1.fuel <= 0) {
//                     console.log(chalk.red.italic('You Loose, Better Luck Next Time '));
//                     process.exit()
//                  }
//                 }
//                if (num <= 0) {
//                    o1.fuelDecrease()
//                    console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
//                    console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
//                    if ( o1.fuel <= 0) {
//                     console.log(chalk.green.italic('You Win'));
//                     process.exit()
//                  }
//                 }
//             }
//         if (ask.opt == 'Drink Portion') {
//             p1.fuelIncrease()
//             console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel Is ${p1.fuel}`));
            
//             }
//         if (ask.opt == 'Run For Your Life..') {
//             console.log(chalk.red.italic('You Loose, Better Luck Next Time '));
//              }
//             process.exit()
//     }
      
    
// }
// while(true);



/*console.log(chalk.rgb(255, 68, 0).bold('\n\t\t\t<<<<<<<< Thank you for playing! Goodbye! >>>>>>>>'));*/
