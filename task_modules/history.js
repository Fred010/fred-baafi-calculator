// task_modules/history.js
import fs from "fs";

const historyFile = "history.txt";

export function saveToHistory(entry) {
    fs.appendFileSync(historyFile, entry + "\n", "utf-8");
}

export function loadHistory() {
    if (!fs.existsSync(historyFile)) return [];
    return fs.readFileSync(historyFile, "utf-8").split("\n").filter(Boolean);
}