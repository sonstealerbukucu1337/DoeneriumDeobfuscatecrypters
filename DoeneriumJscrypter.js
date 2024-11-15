// virustotale 0/77 atamayan maymunlar için

const JsConfuser = require("js-confuser");
const fs = require('fs');
const colors = require('colors');
const path = require('path');
const { exec } = require('child_process');
const inputFile = "./node_modules/input.js";
const file = fs.readFileSync(inputFile, "utf-8");

JsConfuser.obfuscate(file, {
  "compact": false,
  "controlFlowFlattening": 1,
  "deadCode": 1,
  "dispatcher": 1,
  "duplicateLiteralsRemoval": 1,
  "globalConcealing": true,
  "hexadecimalNumbers": true,
  "identifierGenerator": "randomized",
  "minify": false,
  "movedDeclarations": true,
  "objectExtraction": true,
  "opaquePredicates": 1,
  "preset": "medium",
  "renameGlobals": true,
  "renameVariables": true,
  "shuffle": true,
  "stack": 1,
  "stringConcealing": true,
  "stringSplitting": 1,
  "target": "node"
}).then((obfuscated) => {
  const targetFolderName = '../build';
  const fileName = 'index.js';

  const targetFolder = path.join(__dirname, targetFolderName);

  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  const targetFile = path.join(targetFolder, fileName);

  fs.writeFileSync(targetFile, obfuscated, { encoding: 'utf-8' });
});
