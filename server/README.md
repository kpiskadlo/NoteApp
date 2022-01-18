# Note App

Node.js application based on fastify and MongoDB that allows you to manage your notes

## Prerequisites

To run the application, you need to have **Docker** preinstalled.

This app works with a **MongoDB**. Before you continue, ensure you have set the environment variables that are in `.env.template` file.

## Docker

To run the application with **MongoDB** and **mongo-express** (mongoDB admin interface) use the following command:

```sh
$ docker-compose up
```

Useful links:

- server: http://localhost:3000
- swagger: http://localhost:3000/api
- mongo-express: http://localhost:8081

## Development

Before running the app, you need to have a **Node.js** environment set up. Then run these commands:

```sh
# install the NPM packages
$ npm install

# run the app with nodemon
$ npm run start:dev
```

This project use [standardJS](https://standardjs.com/) linter. Before commit, make sure there is no linter errors:

```sh
# check code with the linter
$ npm run code:lint

# automatically format code
$ npm run code:format
```
