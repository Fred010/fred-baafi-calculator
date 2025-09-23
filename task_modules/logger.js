// task_modules/logger.js
import chalk from "chalk";

export function logSuccess(message){
    console.log(chalk.greenBright(message));
}

export function logError(message){
    console.log(chalk.redBright(message));
}

export function logInfo(message){
    console.log(chalk.blueBright(message));
}
