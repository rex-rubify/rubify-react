#!/usr/bin/env node
let path = require('path');
let fs = require('fs');
let fse = require('fs-extra')
let inquirer = require('inquirer');
let rootDir = path.dirname(fs.realpathSync(__filename))
let rimraf = require('rimraf');

let settings = {
  dirName: 'application-finder-name',
  appName: 'application-name'
}

let removeApp = () => {
  rimraf(`./${settings.dirName}`);
}

let validators = {
  notEmpty: function(value){
    var value = value.replace(/[^a-zA-Z\d\s]/g, "");
    value = value.replace(/\s/g, "");
    if(value != "") return true;
    return "Please enter a valid information";
  }
};

let changeAppName = () => {
  let pathPJ = `./${settings.dirName}/package.json`
  fs.readFile(pathPJ, 'utf8', (err,data) => {
    if (err) {
      removeApp()
      return console.log(err);
    }
    let result = data.replace(/rubify-react-project-name/g, settings.appName);
    fs.writeFile(pathPJ, result, 'utf8', (err) => {
       if (err) return console.log(err);
    });
  });
}

let copyContent = () => {
  fse.copy(`${rootDir}/example/`, `./${settings.dirName}`)
  .then(() => {
    changeAppName()
    console.log('success!');
  })
  .catch(err => {
    removeApp()
    console.error(err)
  })
}

let buildContainer = () => {
  if (!fs.existsSync(settings.dirName)) {
    fs.mkdir(settings.dirName, () => {
      copyContent()
    })
  } else {
    console.log("Directory was exist, please try again!");
    return false
  }
}

let buildApplication = () => {
  buildContainer()
}

let cli = ((next) => {
  inquirer
  .prompt([
    {
      type: "input",
      name: "dirName",
      message: "Type folder name:",
      default: "application-folder-name",
      validate: validators.notEmpty,
      filter: (value) => { return value.trim(); }
    },
    {
      type: "input",
      name: "appName",
      message: "Type application name:",
      default: "application-name",
      validate: validators.notEmpty,
      filter: function(value) { return value.trim(); }
    }
  ])
  .then(function(answers) {
    settings.dirName = answers.dirName;
    settings.appName = answers.appName;
    buildApplication()
  });
})();
