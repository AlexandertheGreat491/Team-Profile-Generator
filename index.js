const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const {writeFile, copyFile} = require ('./utils/generate-page');
const fs = require('fs');