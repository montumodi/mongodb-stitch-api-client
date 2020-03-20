const Token = require("./token");
const Application = require("./application");
const Trigger = require("./trigger");
const Service = require("./service");
const StitchFunction = require("./stitchFunction");
const Rule = require("./rule");
const Log = require("./log");
const Security = require("./security");
const Webhook = require("./webhook");
const Email = require("./email");

const httpClient = require("got");

function getFunctions(instance) {
  const functions = {};
  Object.getOwnPropertyNames(Object.getPrototypeOf(instance))
    .filter(name => name !== "constructor")
    .forEach(functionName => {
      functions[functionName] = instance[functionName].bind(instance);
    });
  return functions;
}

function getMongodbStitchApiClient(options) {
  const tokenProvider = new Token(httpClient, options.baseUrl, options.publicKey, options.privateKey);
  const trigger = new Trigger(httpClient, options.baseUrl, options.projectId, options.appId, tokenProvider);
  const application = new Application(httpClient, options.baseUrl, options.projectId, tokenProvider);
  const service = new Service(httpClient, options.baseUrl, options.projectId, options.appId, tokenProvider);
  const stitchFunction = new StitchFunction(httpClient, options.baseUrl, options.projectId, options.appId, tokenProvider);
  const rule = new Rule(httpClient, options.baseUrl, options.projectId, options.appId, tokenProvider);
  const log = new Log(httpClient, options.baseUrl, options.projectId, options.appId, tokenProvider);
  const security = new Security(httpClient, options.baseUrl, options.projectId, options.appId, tokenProvider);
  const email = new Email(httpClient, options.baseUrl, options.projectId, options.appId, tokenProvider);
  const webhook = new Webhook(httpClient, options.baseUrl, options.projectId, options.appId, tokenProvider);

  const functions = {};
  functions.token = getFunctions(tokenProvider);
  functions.trigger = getFunctions(trigger);
  functions.application = getFunctions(application);
  functions.service = getFunctions(service);
  functions.stitchFunction = getFunctions(stitchFunction);
  functions.rule = getFunctions(rule);
  functions.log = getFunctions(log);
  functions.security = getFunctions(security);
  functions.email = getFunctions(email);
  functions.webhook = getFunctions(webhook);

  return functions;
}

module.exports = getMongodbStitchApiClient;
