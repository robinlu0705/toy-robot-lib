# Toy Robot

Toy Robot is a JavaScript library implements the [Toy Robot Simulator](#Toy-Robot-Simulator-Rules).

You can use our pre-defined Robot API to generate robots with the default behaviors. Or you can assemble the basic-behaviors we provided to create your own robots.

Enjoy and get creative!

## Toy Robot Simulator Rules

* The application is a simulation of a toy robot moving on a square tabletop, of
dimensions 5 units x 5 units.
* There are no other obstructions on the table surface.
* The robot is free to roam around the surface of the table, but must be
prevented from falling to destruction. Any movement
that would result in the robot falling from the table must be prevented,
however further valid movement commands must s8ll
be allowed.

## Getting Started

This library is built to be run in Node.js environment. It has been tested with Node version `v6.11.4` and `v8.7.0`.

### Prerequisites

You'll need Node.js installed in your local machine. Visit https://nodejs.org for more instructions.

After successful installation, you should be able to check the version by typing `node -v` in your command prompt.

```sh
$ node -v
v6.11.4
```

### Installing

We have a pre-built library ready in `dist/` folder. You can simply copy the files to your project and require in your entry:

Copy the pre-built files to your project
```sh
$ cp -r dist your-project-path/lib
```

Require the modules in your index.js

```javascript
const Table = require('./lib').Table;
const Robot = require('./lib').Robot;
```

or you can build the library from scratch yourself:

1. `npm install` or `yarn install` to install the dependencies needed for building
2. `npm run build` will build the distribution code into `/dist` folder

### Usage

There are two predefined constructors - `Robot` and `Table`:

```javascript
const Table = require('./lib').Table;
const Robot = require('./lib').Robot;

const size = 5;
const table = new Table(size);
const robot = new Robot();
```

The robot instance has 5 behavior methods:

* `.place(x: number, y: number, f: string, table: Object)`
* `.report()`
* `.move()`
* `.left()`
* `.right()`

Considering the following commands:

1. PLACE 0,0,NORTH
2. MOVE
3. REPORT

A code snippet implements the commands will be:

```javascript
robot.place(0, 0, 'NORTH', table);
robot.move();
robot.report();
```

> The facing of a robot is case-sensitive. It can be one of `NORTH`, `EAST`
, `SOUTH` or `WEST`

### Advanced

If you are not happy with the default Robot constructor, we've provide some basic-behaviors to help you assemble your own robot constructor.

Creating a robot who do not turn left:

```javascript
const BaseRobot = require('./lib').BaseRobot;
const { placer, reporter, mover, righter } = require('./lib/basicBehaviors');

class UPSDriver extends BaseRobot {}

UPSDriver.prototype.assemble(
  placer,
  reporter,
  mover,
  righter
);
```

`BaseRobot` is a base constructor helps you initialize your robot's state. `placer`, `reporter`, `mover`, `lefter` and `righter` are basic behavior helpers we provided. You can use any combination of the helpers to assemble your robot.

### Examples

* [node cli](./examples/nodeCLI) - reads the commands from a test file and operates the default robot on a 5x5 table accordingly

## Running The Tests

This library comes with a set of unit tests using Mocha, Chai and Sinon. And a coding style test based on [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript).

### Unit Tests

Make sure you have all the dependencies installed by `npm install` or `yarn install`. Use the following command to start the unit tests:

```sh
$ npm test
```

> A coverage report will also be generated in `coverage/` folder. You can view it in your browser for more details.

### Coding Style Test

We use ESLint for JavaScript linting:

```sh
$ npm run lint
```

> The empty output indicates no coding style violation.
