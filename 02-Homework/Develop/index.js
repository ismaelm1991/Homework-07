//This is the beginning part of the code in which we provide the elements to the file so it can be run properly
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generate = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badges links that you want",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage",
    },
    {
        type: "input",
        name: "license",
        message: "Please provide the project license or badge link",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties",
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project tests",
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?",
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?",
    },
]