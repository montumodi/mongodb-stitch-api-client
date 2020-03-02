const Token = require("./token");
const Application = require("./application");
const Trigger = require("./trigger");
const httpClient = require("got");

function getMongodbStitchApiClient(options) {
  const tokenProvider = new Token(httpClient, options.baseUrl, options.publicKey, options.privateKey);
  const trigger = new Trigger(httpClient, options.baseUrl, options.projectId, options.appId, tokenProvider);
  const application = new Application(httpClient, options.baseUrl, options.projectId, tokenProvider);

  return {
    "token": {
      "getBearerToken": tokenProvider.getBearerToken.bind(tokenProvider)
    },
    "trigger": {
      "getAll": trigger.getAll.bind(trigger),
      "create": trigger.create.bind(trigger),
      "delete": trigger.delete.bind(trigger),
      "update": trigger.update.bind(trigger)
    },
    "application": {
      "getAll": application.getAll.bind(application),
      "create": application.create.bind(application),
      "delete": application.delete.bind(application)
    }
  };
}

module.exports = getMongodbStitchApiClient;
