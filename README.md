# Mongodb stitch api client for NODEJS

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
- [Service](#service)
- [Trigger](#trigger)
- [Token](#token)
- [StitchFunction](#stitchfunction)
- [Rule](#rule)
- [Log](#log)
- [Security](#security)

### Application

<a name="Application+create"></a>

### application.create(body, [productType]) ⇒ <code>Promise</code>
Creates the stitch application

**Kind**: instance method of [<code>Application</code>](#Application)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| body | <code>Object</code> |  | Object that contains stitch application details. |
| [productType] | <code>string</code> | <code>standard</code> | Optional product type. standard or atlas |

<a name="Application+getAll"></a>

### application.getAll([productType]) ⇒ <code>Promise</code>
Returns all applications

**Kind**: instance method of [<code>Application</code>](#Application)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [productType] | <code>string</code> | <code>standard</code> | Optional product type. standard or atlas |

<a name="Application+get"></a>

### application.get(appId) ⇒ <code>Promise</code>
Returns a single application as per app Id

**Kind**: instance method of [<code>Application</code>](#Application)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| appId | <code>string</code> | Application Id |

<a name="Application+delete"></a>

### application.delete(appId) ⇒ <code>Promise</code>
Deletes a single application as per app Id

**Kind**: instance method of [<code>Application</code>](#Application)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| appId | <code>string</code> | Application Id |

### Service

<a name="Service+create"></a>

### service.create(body) ⇒ <code>Promise</code>
Creates the service

**Kind**: instance method of [<code>Service</code>](#Service)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| body | <code>Object</code> | Object that contains stitch service details. |

<a name="Service+update"></a>

### service.update(serviceId, body) ⇒ <code>Promise</code>
Updates the service

**Kind**: instance method of [<code>Service</code>](#Service)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| serviceId | <code>string</code> | Service Id. |
| body | <code>Object</code> | Object that contains stitch service details. |

<a name="Service+getAll"></a>

### service.getAll() ⇒ <code>Promise</code>
Returns all services

**Kind**: instance method of [<code>Service</code>](#Service)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  
<a name="Service+get"></a>

### service.get(serviceId) ⇒ <code>Promise</code>
Returns single service as per service Id

**Kind**: instance method of [<code>Service</code>](#Service)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| serviceId | <code>string</code> | Service Id |

<a name="Service+delete"></a>

### service.delete(serviceId) ⇒ <code>Promise</code>
Deletes single service as per service Id

**Kind**: instance method of [<code>Service</code>](#Service)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| serviceId | <code>string</code> | Service Id |

### Trigger


<a name="Trigger+create"></a>

### trigger.create(body) ⇒ <code>Promise</code>
Creates the trigger

**Kind**: instance method of [<code>Trigger</code>](#Trigger)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| body | <code>Object</code> | Object that contains stitch trigger details. |

<a name="Trigger+update"></a>

### trigger.update(triggerId, body) ⇒ <code>Promise</code>
Updates the trigger

**Kind**: instance method of [<code>Trigger</code>](#Trigger)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| triggerId | <code>string</code> | Service Id. |
| body | <code>Object</code> | Object that contains stitch trigger details. |

<a name="Trigger+resume"></a>

### trigger.resume(triggerId) ⇒ <code>Promise</code>
Resumes the trigger

**Kind**: instance method of [<code>Trigger</code>](#Trigger)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| triggerId | <code>string</code> | Service Id. |

<a name="Trigger+getAll"></a>

### trigger.getAll() ⇒ <code>Promise</code>
Returns all triggers

**Kind**: instance method of [<code>Trigger</code>](#Trigger)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  
<a name="Trigger+get"></a>

### trigger.get(triggerId) ⇒ <code>Promise</code>
Returns single trigger as per trigger Id

**Kind**: instance method of [<code>Trigger</code>](#Trigger)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| triggerId | <code>string</code> | Trigger Id |

<a name="Trigger+delete"></a>

### trigger.delete(triggerId) ⇒ <code>Promise</code>
Deletes single trigger as per trigger Id

**Kind**: instance method of [<code>Trigger</code>](#Trigger)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| triggerId | <code>string</code> | Trigger Id |

### Token

<a name="Token+getBearerToken"></a>

### token.getBearerToken() ⇒ <code>Promise</code>
Returns the bearer token as per public key and private key

**Kind**: instance method of [<code>Token</code>](#Token)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error

### StitchFunction

<a name="StitchFunction+create"></a>

### stitchFunction.create(body) ⇒ <code>Promise</code>
Creates the function

**Kind**: instance method of [<code>StitchFunction</code>](#StitchFunction)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| body | <code>Object</code> | Object that contains stitch functions details. |

<a name="StitchFunction+update"></a>

### stitchFunction.update(functionId, body) ⇒ <code>Promise</code>
Updates the function

**Kind**: instance method of [<code>StitchFunction</code>](#StitchFunction)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| functionId | <code>string</code> | Service Id. |
| body | <code>Object</code> | Object that contains stitch function details. |

<a name="StitchFunction+getAll"></a>

### stitchFunction.getAll() ⇒ <code>Promise</code>
Returns all functions

**Kind**: instance method of [<code>StitchFunction</code>](#StitchFunction)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  
<a name="StitchFunction+get"></a>

### stitchFunction.get(functionId) ⇒ <code>Promise</code>
Returns single function as per function Id

**Kind**: instance method of [<code>StitchFunction</code>](#StitchFunction)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| functionId | <code>string</code> | function Id |

<a name="StitchFunction+delete"></a>

### stitchFunction.delete(functionId) ⇒ <code>Promise</code>
Deletes single function as per function Id

**Kind**: instance method of [<code>StitchFunction</code>](#StitchFunction)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| functionId | <code>string</code> | function Id |

### Rule

<a name="Rule+create"></a>

### rule.create(serviceId, body) ⇒ <code>Promise</code>
Creates the rule

**Kind**: instance method of [<code>Rule</code>](#Rule)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| serviceId | <code>string</code> | service id |
| body | <code>Object</code> | Object that contains stitch rules details. |

<a name="Rule+update"></a>

### rule.update(serviceId, ruleId, body) ⇒ <code>Promise</code>
Updates the rule

**Kind**: instance method of [<code>Rule</code>](#Rule)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| serviceId | <code>string</code> | service id |
| ruleId | <code>string</code> | Service Id. |
| body | <code>Object</code> | Object that contains stitch rule details. |

<a name="Rule+getAll"></a>

### rule.getAll(serviceId) ⇒ <code>Promise</code>
Returns all rules

**Kind**: instance method of [<code>Rule</code>](#Rule)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| serviceId | <code>string</code> | service id |

<a name="Rule+get"></a>

### rule.get(serviceId, ruleId) ⇒ <code>Promise</code>
Returns single rule as per rule Id

**Kind**: instance method of [<code>Rule</code>](#Rule)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| serviceId | <code>string</code> | service id |
| ruleId | <code>string</code> | rule Id |

<a name="Rule+delete"></a>

### rule.delete(serviceId, ruleId) ⇒ <code>Promise</code>
Deletes single rule as per rule Id

**Kind**: instance method of [<code>Rule</code>](#Rule)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| serviceId | <code>string</code> | service id |
| ruleId | <code>string</code> | rule Id |

### Log

<a name="Log+get"></a>

### log.get([options]) ⇒ <code>Promise</code>
Returns all the logs as per options passed

**Kind**: instance method of [<code>Log</code>](#Log)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>object</code> | <code>{}</code> | Options having parameter which will be passed as query string |

### Security

<a name="Security+create"></a>

### security.allowOrigins(body) ⇒ <code>Promise</code>
Set the allowed HTTP origins from which Stitch should allow requests.

**Kind**: instance method of [<code>Security</code>](#Security)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  

| Param | Type | Description |
| --- | --- | --- |
| body | <code>Object</code> | Object that contains allowed http origins |

<a name="Security+get"></a>

### security.getAll() ⇒ <code>Promise</code>
List the allowed HTTP origins from which Stitch should allow requests.

**Kind**: instance method of [<code>Security</code>](#Security)  
**Returns**: <code>Promise</code> - - promise which resolves on success and rejects on error  