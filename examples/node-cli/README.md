# Example - Node CLI

This example is an implementation of Toy Robot Simulator.

It demonstrates how to use the Toy Robot Lib to implement a command line interface of Toy Robot Simulator.

## Getting Started

This example is built to be run in Node.js environment. It has been tested with Node version `v6.11.4` and `v8.7.0`.

### Prerequisites

You'll need Node.js installed in your local machine. Visit https://nodejs.org for more instructions.

After successful installation, you should be able to check the version by typing `node -v` in your command prompt.

```sh
$ node -v
v6.11.4
```

### Installing

You'll need the Toy Robot Lib distribution.

Copy the pre-built files to `lib/`
```sh
$ cp -r ../../dist lib
```

### Usage

Run the script `index.js` with a test file:

```sh
$ node index.js test.txt
```

The process will start and read the commands from the test file. A robot on a 5x5 table will be operated and output the result when command `REPORT` is called.


### Available Commands

There are 5 available commands:

1. PLACE X,Y,F
2. MOVE
3. LEFT
4. RIGHT
5. REPORT

Robot will be operated according to the commands in the test file. By the rules of Toy Robot Simulator, any command that would result in the robot falling from the table must be ignored.

## Running The Tests

This example comes with a set of unit tests using Mocha, Chai and Sinon.

### Unit Tests

Make sure you have all the dependencies installed by `npm install` or `yarn install`. Use the following command to start the unit tests:

```sh
$ npm test
```

> A coverage report will also be generated in `coverage/` folder. You can view it in your browser for more details.
