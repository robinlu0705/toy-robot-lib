function unrecognizedTestFileCommandPrompt(file, lineNo) {
  console.error('Unrecognized command: ' + file + ':' + lineNo);
  process.exit();
}

const Table = require('./lib').Table;
const Robot = require('./lib').Robot;

const table = new Table(5);
const robot = new Robot();

const testFile = __dirname + '/test1.txt';

const lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(testFile),
});

let lineNo = 0;

lineReader.on('line', function(line) {
  ++lineNo;

  line = line.trim();

  if (!line.length || /^#/.test(line)) {
    return;
  }

  const parseResult = /^(PLACE|MOVE|LEFT|RIGHT|REPORT)(.*)$/.exec(line);

  if (!parseResult) {
    unrecognizedTestFileCommandPrompt(testFile, lineNo);
  } else {
    switch(parseResult[1]) {
      case 'PLACE': {
        const args = parseResult[2].replace(/\s+/gm, '');
        const argsParseResult = /^(\d+),(\d+),(EAST|SOUTH|WEST|NORTH)$/.exec(args);

        if (!argsParseResult) {
          unrecognizedTestFileCommandPrompt(testFile, lineNo);
        } else {
          const x = Number(argsParseResult[1]);
          const y = Number(argsParseResult[2]);
          const f = argsParseResult[3];

          if (typeof robot.place === 'function') {
            robot.place({ x, y, f, table });
          }
        }

        break;
      }

      case 'MOVE': {
        if (typeof robot.move === 'function') {
          robot.move();
        }

        break;
      }

      case 'LEFT': {
        if (typeof robot.left === 'function') {
          robot.left();
        }

        break;
      }

      case 'RIGHT': {
        if (typeof robot.right === 'function') {
          robot.right();
        }

        break;
      }

      case 'REPORT': {
        if (typeof robot.report === 'function') {
          robot.report();
        }

        break;
      }
    }
  }
});
