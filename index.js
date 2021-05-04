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
            return viewEmployees();
        case "ALL_EMPLOYEES_BY_DEPARTMENT":
            return viewEmployeesByDepartment();
        case "ADD_EMPLOYEE":
            return addEmployee();
        case "REMOVE_EMPLOYEE":
            return removeEmployee();
        case "ALL_DEPARTMENTS":
            return viewDepartments();
        case "ADD_DEPARTMENT":
            return addDepartment();
        case "REMOVE_DEPARTMENT":
            return removeDepartment();
        case "ALL_ROLES":
            return viewRoles();
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

mainQuestions();
