# My Viva Practical Cheat Sheet

This repository contains all 11 practicals for my Java viva.

## How to Run Each Project

### Q1, Q2, Q3 (Simple Java)
* **Projects:** `EmployeeManagementSystem`, `ShapeHierarchy`, `CustomBankAccountException`
1.  Open VS Code.
2.  Open a terminal and `cd` into the project folder (e.g., `cd EmployeeManagementSystem`).
3.  Compile and run (e.g., `javac *.java && java EmployeeDemo`).

### Q4, Q5, Q6 (Simple HTML/JS)
* **Projects:** `PersonalPortfolioWebpage`, `InteractiveRegistrationForm`, `To-DoListApplication`
1.  Open VS Code.
2.  `cd` into the project folder (e.g., `cd PersonalPortfolioWebpage`).
3.  Right-click `index.html` and select "Open with Live Server".

### Q7 (Servlet/JSP)
* **Project:** `UserLogin(Servlet&JSP)`
1.  **Open Eclipse IDE.**
2.  `File > New > Dynamic Web Project`.
3.  Name it `UserLoginProject`.
4.  **Uncheck "Use default location"** and browse to this `UserLogin(Servlet&JSP)` folder.
5.  Set the Target Runtime to your Apache Tomcat server.
6.  Right-click the new project $\rightarrow$ `Run As` $\rightarrow$ `Run on Server`.
7.  Open `http://localhost:8080/UserLoginProject/` in the browser.

### Q8 (Spring Boot)
* **Project:** `SpringBootRestApi`
1.  **Open Eclipse or VS Code.**
2.  Import the `mybookapi` project inside this folder as a Maven project.
3.  Find the `MybookapiApplication.java` file and click "Run".
4.  Test the API at `http://localhost:8080/api/books` in the browser.
5.  **Note:** Stop the Tomcat server from Q7 first, as both use port 8080.

### Q9, Q10, Q11 (React)
* **Project:** `ReactPracticals`
1.  Open a new terminal in VS Code.
2.  `cd ReactPracticals`
3.  Run `npm install` (only needs to be done once).
4.  Run `npm start`.
5.  This will open `http://localhost:3000` in the browser.
6.  To demo, copy the code from `src/Q9...`, `src/Q10...`, or `src/Q11...` into `src/App.js` and save.