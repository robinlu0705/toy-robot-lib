# Example - Web UI

This example is an implementation of Toy Robot Simulator.

It demonstrates how to use the Toy Robot Lib and React to build a web page interface of Toy Robot Simulator.

## Getting Started

We created this example using [create-react-app](https://github.com/facebookincubator/create-react-app).

You can view an online demo [here](). If you are interested in building something based on this example, the following instructions may give some help.

### Prerequisites

You'll need to have Node >= 6 on your machine. Visit https://nodejs.org for more instructions.

After successful installation, you should be able to check the version by typing `node -v` in your command prompt.

```sh
$ node -v
v6.11.4
```

### Installing App Dependencies

First, you'll need the Toy Robot Lib distribution.

Copy the pre-built files to `src/lib/`:
```sh
$ cp -r ../../dist src/lib
```

Then install all packages needed:

```sh
$ npm install
```

or

```sh
$ yarn install
```

### Run The App In Development Mode

```sh
$ npm start
```

or

```sh
$ yarn start
```

Open http://localhost:3000 to view it in the browser.

The page will automatically reload if you make changes to the modules in `src/` folder.
You will see the build errors and lint warnings in the console.

### Building For Production

```sh
$ npm run build
```

or

```sh
$ yarn build
```

Builds the app for production to the `build/` folder.

The modules in `src/` folder with their dependencies will be correctly bundled and ready to be deployed.

## Running The Tests

This example comes with some simple smoke tests on the React components using Jest.

Use the following command to start the tests:

```sh
$ npm test
```

or

```sh
$ yarn test
```

> The test files can be found in `src/components/**/` with `.test.js` suffix.
