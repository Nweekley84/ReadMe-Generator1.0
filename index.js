const { generateMarkdown } = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    "Enter title of project",
    "Enter a short description",
    "Enter installation instructions",
    "Enter usage information",
    "Enter contribution guidelines",
    "Enter test instructions",
    "Enter your email address",
    "Enter your GitHub username",
    "Select a license",
]
const promptNames = [
    "title",
    "description",
    "install",
    "usage",
    "contributing",
    "tests",
    "email",
    "githubUser",
    "license"
]

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "UTF-8", (err) => {
        err ? console.log(err) : console.log("Success!")
    })
}

// function to initialize program
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: promptNames[0],
            default: "My-Project"
        },
        {
            type: "input",
            message: questions[1],
            name: promptNames[1]
        },
        {
            type: "input",
            message: questions[2],
            name: promptNames[2]
        },
        {
            type: "input",
            message: questions[3],
            name: promptNames[3]
        },
        {
            type: "input",
            message: questions[4],
            name: promptNames[4]
        },
        {
            type: "input",
            message: questions[5],
            name: promptNames[5]
        },
        {
            type: "input",
            message: questions[6],
            name: promptNames[6],
            default: "my email address"

        },
        {
            type: "input",
            message: questions[7],
            name: promptNames[7]
        },
        {
            type: "list",
            message: questions[8],
            choices: ["MIT", "GPLv3", "Apache"],
            default: "MIT",
            name: promptNames[8]
        }
    ])
        .then((data) => {
            const markdown = generateMarkdown(data);
            writeToFile("GOODREADME.md", markdown)
        })
}

// function call to initialize program
init();
