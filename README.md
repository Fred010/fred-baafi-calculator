# Node.js Calculator Application

**Author:** Frederick Baafi  
**Registration Number:** BD/2025/TC3/059  

---

## 📌 Project Overview
This is a **modular Node.js calculator application** built as part of TechCrush backend engineering practice project.  
It demonstrates the **practical use of local (built-in), third-party (npm), and custom modules** in Node.js.  

The calculator goes beyond basic arithmetic — it is designed to be: 
- **Modular** (separated concerns via multiple custom modules).  
- **Practical** (saving calculation history to file for reuse).  
- **User-friendly** (colored console output for better readability).  

---

## 🎯 Features
- **Built-in Module Usage:**
  - `path` → to resolve file paths.
  - `fs` → to store and retrieve calculation history.
- **Third-party Module Usage:**
  - `chalk` → to colorize terminal output.
  - `figlet` (optional) → to render ASCII-styled banners.
- **Custom Modules:**
  1. `calculator.js` → Core math operations (add, subtract, multiply, divide, power, modulus).
  2. `formatter.js` → Pretty prints calculation results with labels.
  3. `history.js` → Saves results to a file and retrieves past calculations.
- **Extra Enhancements:**
  - Console banner at startup.
  - Registration number displayed in console.
  - Each operation result displayed in a unique color.
  - History automatically logged to a text file for future reference.

---

## 🛠️ Project Structure
fred-baafi-calculator/
│
├── my_modules/
│ ├── calculator.js # math functions
│ ├── history.js # save/load history
│ ├── logger.js # colored/logging outputs
│
├── index.js # main entry point
├── package.json
├── .gitignore
└── README.md

---

## 🔧 Development Setup

1. **Install dependencies**
   ```bash
   npm install

npm install --save-dev nodemon
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}

This project is licensed under the **MIT License.**