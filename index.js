const config = require("./db");
const {prompt} = require("inquirer");
require("console.table");

// Ask main questions
async function mainQuestions() {
    const { choice } = await prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "ALL_EMPLOYEES"
                },
                {
                    name: "View All Employees By Department",
                    value: "ALL_EMPLOYEES_BY_DEPARTMENT"
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Remove Employee",
                    value: "REMOVE_EMPLOYEE"
                },
                {
                    name: "View All Roles",
                    value: "ALL_ROLES"
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Remove Role",
                    value: "REMOVE_ROLE"
                },
                {
                    name: "View All Departments",
                    value: "ALL_DEPARTMENTS"
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Remove Department",
                    value: "REMOVE_DEPARTMENT"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]);

    // Get answer
    switch (choice) {
        case "ALL_EMPLOYEES":
            return allEmployees();
        case "ALL_ROLES":
            return allRoles();
        case "ALL_DEPARTMENTS":
            return allDepartments();
        case "ALL_EMPLOYEES_BY_DEPARTMENT":
            return allEmployeesByDepartment();
        case "ADD_EMPLOYEE":
            return addEmployee();
        case "REMOVE_EMPLOYEE":
            return removeEmployee();
        case "ADD_DEPARTMENT":
            return addDepartment();
        case "REMOVE_DEPARTMENT":
            return removeDepartment();
        case "ADD_ROLE":
            return addRole();
        case "REMOVE_ROLE":
            return removeRole();
        default:
            return quit();
    }
}

// Create quit function
function quit() {
    console.log("See you later!");
    process.exit();
}

// Show all employees function
async function allEmployees() {
    const employees = await config.allEmployees();

    // Get employees database
    console.table(employees);

    mainQuestions();
}

// Show all roles function
async function allRoles() {
    const roles = await config.allRoles();

    console.table(roles);

    mainQuestions();
}

// Show all departments function
async function allDepartments() {
    const departments = await config.allDepartments();

    console.table(departments);

    mainQuestions();
}

mainQuestions();
