const fs = require('fs');
const readline = require('readline');

const Table = require('./lib').Table;
const Robot = require('./lib').Robot;

const unrecognizedTestFileCommandPrompt = require('./functions').unrecognizedTestFileCommandPrompt;
const checkComment = require('./functions').checkComment;
const parseLine = require('./functions').parseLine;
const cleanCommandArgString = require('./functions').cleanCommandArgString;
const parsePlaceCommandArgs = require('./functions').parsePlaceCommandArgs;
const operate = require('./functions').operate;

const commandSet = {
  PLACE: 'PLACE',
  REPORT: 'REPORT',
  MOVE: 'MOVE',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};

const testFile = process.argv[2];
if (!testFile) {
  console.error('Not enough arguments, please provide a test file');
  process.exit();
}

if (!fs.existsSync(testFile) || !fs.lstatSync(testFile).isFile()) {
  console.error('File not exist');
  process.exit();
}

const table = new Table(5);
const robot = new Robot();

const lineReader = readline.createInterface({
  input: require('fs').createReadStream(testFile),
});

let lineNo = 0;

lineReader.on('line', function(line) {
  ++lineNo;

  line = line.trim();

  if (!line.length || checkComment(line)) {
    return;
  }

  const parseResult = parseLine(commandSet, line);

  if (!parseResult.length) {
    unrecognizedTestFileCommandPrompt(testFile, lineNo);
  } else {
    const command = parseResult[0];
    const argString = parseResult[1];

    if (command === commandSet.PLACE) {
      const args = parsePlaceCommandArgs(argString);

      if (!args) {
        unrecognizedTestFileCommandPrompt(testFile, lineNo);
      } else {
        operate(robot, command, { x: args.x, y: args.y, f: args.f, table });
      }
    } else {
      operate(robot, command);
    }
  }
});
