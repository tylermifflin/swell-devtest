# swell-devtest

A full-stack application using [NestJS](https://nestjs.com) with [Prisma](https://www.prisma.io/) and [React](https://reactjs.org) with [Material UI](https://mui.com/).

This project was generated using [Nx](https://nx.dev).

## TL;DR

1. Fork this repository on GitHub
2. Run `npm install`
3. Run `npm run setup`
4. Run `npm start`
5. Browse to [http://localhost:4200](http://localhost:4200/)

## Introduction

This project is a simple web app for front full-stack developer candidates.

The project was generated using [Nx](https://nx.dev) to provide a modern integrated dev experience.

The app doesn't do much (yet)... that part is up to the applicant.

## Getting Started

To get you started you can simply fork the [swell-devtest](https://github.com/Swell-Platform/swell-devtest) repository, clone it locally, and install the dependencies.

### Install Node

This project requires [Node](https://nodejs.org) for building and running the application.

We recommend using Node Version Manager (nvm) to manage your Node installations.
If you don't already have nvm installed, you can install it by following the instructions for your platform:

- [macOS/Linux](https://github.com/nvm-sh/nvm)
- [Windows](https://github.com/coreybutler/nvm-windows)

Once you have nvm installed, you can install Node v18 by running the following command:

```bash
nvm install 18.0.0
nvm use 18.0.0
```

### Install Dependencies

Run the following command to install the project dependencies:

```bash
npm install
```

### Create the Database

This project uses a simple [SQLite](https://www.sqlite.org/index.html) database. A seeded database is include in the repository at `<projectRoot>/db/swell-sample.db`. Before running the application, you will need to copy this file to `<projectRoot>/db/swell.db` by running the following command:

```bash
npm run setup
```

## Running the Application

The project contains both backend (`reviews-api`) and front end (`reviews-client`) applications.
To start both applications, run the following command:

```bash
npm start
```

This will start the backend API server on port 3333 and the front end application on port 4200. The app will automatically reload if you change any of the source files.

The applications can also be run independently by running the following commands:

```bash
# Start the backend API server
npm run serve reviews-api

# Start the front end application
npm run serve reviews-client
```

## Running Unit Tests

Tests are run using [Jest](https://jestjs.io).
Tests for each application can be run independently by running the following commands:

```bash
# Run unit tests for the backend API server
npm run test reviews-api

# Run unit tests for the front end application
npm run test reviews-client
```

### Running Tests in Watch Mode

To run the tests in watch mode, run the following command:

```bash
# Run unit tests for the backend API server in watch mode
npm run test reviews-api -- --watch

# Run unit tests for the front end application in watch mode
npm run test reviews-client -- --watch
```

### Test Affected Code

You can also run tests for all projects that have been affected by a change by running the following command:

```bash
npm run affected test
```

## Code Scaffolding

This project uses [Nx](https://nx.dev) to provide a modern integrated dev experience.
Nx includes a number of code generators that can be used to generate libraries, modules, controllers, services, components, etc.

Visit the [Nx Documentation](https://nx.dev/plugin-features/use-code-generators) to learn more.
