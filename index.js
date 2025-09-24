// entry point - index.js
import os from "os";
import figlet from "figlet";
import readlineSync from "readline-sync";

import {
  add,
  subtract,
  multiply,
  divide,
  square,
  squareRoot,
  modulus,
} from "./task_modules/calculator.js";
import { saveToHistory, loadHistory } from "./task_modules/history.js";
import { logSuccess, logError, logInfo } from "./task_modules/logger.js";

// Registration number
console.log(" Registration ID: BD/2025/TC3/059 ");

// Display welcome message
console.log(figlet.textSync("Node Calculator App", { horizontalLayout: "full" }));

// Show system info (use of os module)
logInfo(`Running on ${os.type()} ${os.release()} | CPU: ${os.cpus()[0].model}`);

// Menu options
const operations = [
  "Add",
  "Subtract",
  "Multiply",
  "Divide",
  "Square",
  "Square Root",
  "Modulus",
  "View History",
  "Quit",
];

// Main loop
while (true) {
  const choiceIndex = readlineSync.keyInSelect(operations, "Choose an operation:");

  if (choiceIndex === -1 || operations[choiceIndex] === "Quit") {
    logInfo("Goodbye! Exiting calculator...");
    break;
  }

  const choice = operations[choiceIndex];

  try {
    let result; // ✅ use let since it will change depending on operation

    switch (choice) {
      case "Add": {
        const i = readlineSync.questionInt("Enter first number: ");
        const j = readlineSync.questionInt("Enter second number: ");
        result = add(i, j);
        logSuccess(`${i} + ${j} = ${result}`);
        saveToHistory(`${i} + ${j} = ${result}`);
        break;
      }

      case "Subtract": {
        const i = readlineSync.questionInt("Enter first number: ");
        const j = readlineSync.questionInt("Enter second number: ");
        result = subtract(i, j);
        logSuccess(`${i} - ${j} = ${result}`);
        saveToHistory(`${i} - ${j} = ${result}`);
        break;
      }

      case "Multiply": {
        const i = readlineSync.questionInt("Enter first number: ");
        const j = readlineSync.questionInt("Enter second number: ");
        result = multiply(i, j);
        logSuccess(`${i} * ${j} = ${result}`);
        saveToHistory(`${i} * ${j} = ${result}`);
        break;
      }

      case "Divide": {
        const i = readlineSync.questionInt("Enter numerator: ");
        const j = readlineSync.questionInt("Enter denominator: ");
        result = divide(i, j);
        logSuccess(`${i} / ${j} = ${result}`);
        saveToHistory(`${i} / ${j} = ${result}`);
        break;
      }

      case "Square": {
        const n = readlineSync.questionInt("Enter number: ");
        result = square(n);
        logSuccess(`Square of ${n} = ${result}`);
        saveToHistory(`Square of ${n} = ${result}`);
        break;
      }

      case "Square Root": {
        const n = readlineSync.questionInt("Enter number: ");
        result = squareRoot(n);
        logSuccess(`Square root of ${n} = ${result}`);
        saveToHistory(`Square root of ${n} = ${result}`);
        break;
      }

      case "Modulus": {
        const i = readlineSync.questionInt("Enter first number: ");
        const j = readlineSync.questionInt("Enter second number: ");
        result = modulus(i, j);
        logSuccess(`${i} % ${j} = ${result}`);
        saveToHistory(`${i} % ${j} = ${result}`);
        break;
      }

      case "View History": {
        logInfo("Calculation History:");
        const history = loadHistory();
        if (history.length === 0) {
          logInfo("No calculations yet.");
        } else {
          history.forEach((entry) => console.log(entry));
        }
        break;
      }
    }
  } catch (error) {
    logError(`Error: ${error.message}`);
  }
}