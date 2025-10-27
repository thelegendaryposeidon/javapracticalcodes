# React Practicals (Q9, Q10, Q11)

This React application contains the solutions for questions 9, 10, and 11.

## Project Structure

To make demoing easy, this project is set up to use a single "live" file (`src/App.js`) and three "backup" files containing the solutions:

* `src/Q9_Counter.js`: Solution for **Question 9 (Counter with useState)**
* `src/Q10_ProfileCards.js`: Solution for **Question 10 (Profile Cards with Props)**
* `src/Q11_ControlledForm.js`: Solution for **Question 11 (Controlled Form)**
* `src/App.js`: This is the **live file** that the browser renders.

## How to Run

1.  Open a terminal in this `reactpracticals` folder.
2.  **Install dependencies** (only needs to be done once):
    ```bash
    npm install
    ```
    *(This rebuilds the `node_modules` folder that was skipped by `.gitignore`.)*
3.  **Start the app:**
    ```bash
    npm start
    ```
    This will automatically open `http://localhost:3000` in your browser.

## How to Demo Each Practical

To demo a specific question, just copy the code from the backup file into `App.js`.

**Example for Question 9:**
1.  Open `src/Q9_Counter.js` and copy all its content.
2.  Open `src/App.js`, select all, and paste the code.
3.  Save `App.js` (e.g., `Ctrl+S`).
4.  The browser at `http://localhost:3000` will instantly auto-refresh to show the Counter practical.

Repeat this copy/paste process for Q10 or Q11 when asked.
