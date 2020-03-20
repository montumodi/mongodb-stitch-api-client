const {describe, it, beforeEach} = exports.lab = require("@hapi/lab").script();
const {expect} = require("@hapi/code");
const nock = require("nock");
const getClient = require("../src");

const baseUrl = "http://dummyBaseUrl";
const projectId = "dummyProjectId";
const appId = "dummyAppId";
const serviceId = "dummyServiceId";

const client = getClient({
  "publicKey": "dummuyPublicKey",
  "privateKey": "dummyPrivateKey",
  "baseUrl": baseUrl,
  "projectId": projectId,
  "appId": appId
});


describe("Mongo Stitch Api Client - webhook", () => {

  beforeEach(() => nock(baseUrl).post("/auth/providers/mongodb-cloud/login").reply(200, {"access_token": "sometoken"}));

  describe("When webhook is exported from index", () => {
    it("should export webhook webhooks", async () => {
      expect(client.webhook.get).to.be.function();
      expect(client.webhook.getAll).to.be.function();
      expect(client.webhook.create).to.be.function();
      expect(client.webhook.update).to.be.function();
      expect(client.webhook.delete).to.be.function();
    });
  });

  describe("When get is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .get(`/groups/${projectId}/apps/${appId}/services/${serviceId}/incoming_webhooks/mywebhookId`)
        .reply(200, {"webhook": "name"});
      const result = await client.webhook.get("dummyServiceId", "mywebhookId");
      expect(result).to.equal({"webhook": "name"});
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When getAll is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .get(`/groups/${projectId}/apps/${appId}/services/${serviceId}/incoming_webhooks`)
        .reply(200, [{"webhook": "name"}]);
      const result = await client.webhook.getAll("dummyServiceId");
      expect(result).to.equal([{"webhook": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When create is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .post(`/groups/${projectId}/apps/${appId}/services/${serviceId}/incoming_webhooks`)
        .reply(200, [{"webhook": "name"}]);
      const result = await client.webhook.create("dummyServiceId", {"body": "key"});
      expect(result).to.equal([{"webhook": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When update is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .put(`/groups/${projectId}/apps/${appId}/services/${serviceId}/incoming_webhooks/webhookId`)
        .reply(200, [{"webhook": "name"}]);
      const result = await client.webhook.update("dummyServiceId", "webhookId", {"body": "key"});
      expect(result).to.equal([{"webhook": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When delete is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .delete(`/groups/${projectId}/apps/${appId}/services/${serviceId}/incoming_webhooks/webhookId`)
        .reply(200, [{"webhook": "name"}]);
      const result = await client.webhook.delete("dummyServiceId", "webhookId");
      expect(result).to.equal([{"webhook": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });
});
