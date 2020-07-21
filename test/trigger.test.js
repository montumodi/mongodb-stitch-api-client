const {describe, it, beforeEach} = exports.lab = require("@hapi/lab").script();
const {expect} = require("@hapi/code");
const nock = require("nock");
const getClient = require("../src");

const baseUrl = "http://dummyBaseUrl";
const projectId = "dummyProjectId";
const appId = "dummyAppId";

const client = getClient({
  "publicKey": "dummuyPublicKey",
  "privateKey": "dummyPrivateKey",
  "baseUrl": baseUrl,
  "projectId": projectId,
  "appId": appId
});


describe("Mongo Stitch Api Client - trigger", () => {

  beforeEach(() => nock(baseUrl).post("/auth/providers/mongodb-cloud/login").reply(200, {"access_token": "sometoken"}));

  describe("When trigger is exported from index", () => {
    it("should export trigger functions", async () => {
      expect(client.trigger.get).to.be.function();
      expect(client.trigger.getAll).to.be.function();
      expect(client.trigger.create).to.be.function();
      expect(client.trigger.update).to.be.function();
      expect(client.trigger.delete).to.be.function();
      expect(client.trigger.resume).to.be.function();
    });
  });

  describe("When get is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .get(`/groups/${projectId}/apps/${appId}/triggers/mytriggerId`)
        .reply(200, {"trigger": "name"});
      const result = await client.trigger.get("mytriggerId");
      expect(result).to.equal({"trigger": "name"});
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When getAll is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .get(`/groups/${projectId}/apps/${appId}/triggers`)
        .reply(200, [{"trigger": "name"}]);
      const result = await client.trigger.getAll();
      expect(result).to.equal([{"trigger": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When create is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .post(`/groups/${projectId}/apps/${appId}/triggers`)
        .reply(200, [{"trigger": "name"}]);
      const result = await client.trigger.create({"body": "key"});
      expect(result).to.equal([{"trigger": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When update is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .put(`/groups/${projectId}/apps/${appId}/triggers/triggerId`)
        .reply(200, [{"trigger": "name"}]);
      const result = await client.trigger.update("triggerId", {"body": "key"});
      expect(result).to.equal([{"trigger": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When resume is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .put(`/groups/${projectId}/apps/${appId}/triggers/triggerId/resume`)
        .reply(200, [{"trigger": "name"}]);
      const result = await client.trigger.resume("triggerId", false);
      expect(result).to.equal([{"trigger": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When delete is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .delete(`/groups/${projectId}/apps/${appId}/triggers/triggerId`)
        .reply(200, [{"trigger": "name"}]);
      const result = await client.trigger.delete("triggerId");
      expect(result).to.equal([{"trigger": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });
});
