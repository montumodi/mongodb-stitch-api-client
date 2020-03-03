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

const {trigger, application} = getClient({
  "publicKey": "some public key",
  "privateKey": "some private key",
  "baseUrl": "https://stitch.mongodb.com/api/admin/v3.0",
  "projectId": "some project/group id",
  "appId": "some stitch appId" // Optional when you are creating app using Application
});

await trigger.getAll();
const createApplication = await application.create({"name": "myFirstStitchApp", "deployment_model": "LOCAL", "location": "IE"});

```

## Running the tests

`npm test`

### API

Following entities are currently supported

- [Application](#application)

### Application

### application.getAll([productType]) ⇒ <code>Promise</code>
Function - Returns all the applications.

**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error 

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [productType] | <code>string</code> | <code>standard</code> | Optional string containing name of product type |

More details - https://docs.mongodb.com/stitch/admin/api/admin-v3/#get-/groups/{groupid}/apps

### application.create(body, [productType]) ⇒ <code>Promise</code>
Function - Creates the stitch application as per the body passed.

**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| body | <code>String</code> |  | body which has application details |
| [productType] | <code>string</code> | <code>standard</code> | Optional string containing name of product type |

More details - https://docs.mongodb.com/stitch/admin/api/admin-v3/#post-/groups/{groupid}/apps

### application.delete(appId) ⇒ <code>Promise</code>
Function - Deletes the stitch application as per the appId passed.

**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| appId | <code>String</code> |  | appId which needs to be deleted. |

More details - https://docs.mongodb.com/stitch/admin/api/admin-v3/#delete-/groups/{groupid}/apps/{appid}

### application.get(appId) ⇒ <code>Promise</code>
Function - Returns the stitch application as per the appId passed.

**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| appId | <code>String</code> |  | appId which needs to be fetched. |

More details - https://docs.mongodb.com/stitch/admin/api/admin-v3/#get-/groups/{groupid}/apps/{appid}