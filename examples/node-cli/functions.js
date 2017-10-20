function unrecognizedTestFileCommandPrompt(file, lineNo) {
  console.error('Unrecognized command: ' + file + ':' + lineNo);
  process.exit();
}

function checkComment(line) {
  return /^#/.test(line);
}

function parseLine(commandSet, line) {
  const commandString = Object.keys(commandSet).map(key => commandSet[key]).join('|');
  const regex = new RegExp(`^(${commandString})(.*)$`)
  const result = regex.exec(line);

  if (result) {
    return result.slice(1);
  }

  return [];
}

function cleanCommandArgString(string) {
  return string.replace(/\s+/gm, '');
}

function parsePlaceCommandArgs(argString) {
  const cleanedArgString = cleanCommandArgString(argString);
  const parseResult = /^(\d+),(\d+),(EAST|SOUTH|WEST|NORTH)$/.exec(cleanedArgString);

  if (parseResult) {
    return {
      x: Number(parseResult[1]),
      y: Number(parseResult[2]),
      f: parseResult[3],
    };
  }

  return null;
}

function operate(robot, command, args) {
  const method = command.toLowerCase();
  if (typeof robot[method] === 'function') {
    robot[method](args);
  }
}

module.exports.unrecognizedTestFileCommandPrompt = unrecognizedTestFileCommandPrompt;
module.exports.checkComment = checkComment;
module.exports.parseLine = parseLine;
module.exports.cleanCommandArgString = cleanCommandArgString;
module.exports.parsePlaceCommandArgs = parsePlaceCommandArgs;
module.exports.operate = operate;
