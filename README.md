# Mongodb stitch api client for NODEJS (In Progress)

A mongdb stitch api client for nodejs.

[![Greenkeeper badge](https://badges.greenkeeper.io/montumodi/mongodb-stitch-api-client.svg)](https://greenkeeper.io/)
[![Coverage Status](https://coveralls.io/repos/github/montumodi/mongodb-stitch-api-client/badge.svg?branch=master)](https://coveralls.io/github/montumodi/mongodb-stitch-api-client?branch=master)
[![Build Status](https://travis-ci.com/montumodi/mongodb-stitch-api-client.svg?branch=master)](https://travis-ci.com/montumodi/mongodb-stitch-api-client)
[![Deps](https://david-dm.org/montumodi/mongodb-stitch-api-client.svg)](https://david-dm.org/montumodi/mongodb-stitch-api-client#info=dependencies)
[![devDependency Status](https://david-dm.org/montumodi/mongodb-stitch-api-client/dev-status.svg)](https://david-dm.org/montumodi/mongodb-stitch-api-client#info=devDependencies)

[![NPM](https://nodei.co/npm/mongodb-stitch-api-client.png?downloads=true)](https://www.npmjs.com/package/mongodb-stitch-api-client/)

## How to install

```
npm install mongodb-stitch-api-client
```

## Getting Started

The basic syntax is:

```js
const getClient = require("mongodb-stitch-api-client");
const {trigger} = getClient({
  "publicKey": "some public key",
  "privateKey": "some private key",
  "baseUrl": "https://cloud.mongodb.com/api/atlas/v1.0",
  "projectId": "some project/group id"
});

const options = {
  "envelope": true,
  "itemsPerPage": 10,
  "pretty": true
}

```

## Running the tests

`npm test`
