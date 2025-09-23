// entry point - index.js
import os from "os";
import figlet from "figlet";
import { add, subtract, multiply, divide, square, squareRoot, modulus } from "./task_modules/calculator.js";
import { saveToHistory, loadHistory } from "./task_modules/history.js";
import { logSuccess, logError, logInfo } from "./task_modules/logger.js";


// Registration number
console.log(" Registration ID: BD/2025/TC3/059 ");

// Display welcome message
console.log(figlet.textSync("Node Calculator App", { horizontalLayout: "full" }));

// Show system info (use of os module)
logInfo(`Running on ${os.type()} ${os.release()} | CPU: ${os.cpus()[0].model}`);

// Perform some calculations
try {
    let firstResult = add(20, 10);
    logSuccess(`20 + 10 = ${firstResult}`);
    saveToHistory(`20 + 10 = ${firstResult}`);

    let secondResult = subtract(50, 15);
    logSuccess(`50 - 15 = ${secondResult}`);
    saveToHistory(`50 - 15 = ${secondResult}`);

    let thirdResult = multiply(7, 6);
    logSuccess(`7 * 6 = ${thirdResult}`);
    saveToHistory(`7 * 6 = ${thirdResult}`);

    let fourthResult = divide(45, 9);
    logSuccess(`45 / 9 = ${fourthResult}`);
    saveToHistory(`45 / 9 = ${fourthResult}`);

    let fifthResult = square(8);
    logSuccess(`Square of 8 = ${fifthResult}`);
    saveToHistory(`Square of 8 = ${fifthResult}`);

    let sixthResult = squareRoot(64);
    logSuccess(`Square root of 64 = ${sixthResult}`);
    saveToHistory(`Square root of 64 = ${sixthResult}`);

    let seventhResult = modulus(29, 5);
    logSuccess(`29 % 5 = ${seventhResult}`);
    saveToHistory(`29 % 5 = ${seventhResult}`);

} catch (error){
    logError(`Error: ${error.message}`);
}

// Load and display history
logInfo("Calculation History:");
loadHistory().forEach(entry => console.log(entry));
