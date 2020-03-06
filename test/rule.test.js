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


describe("Mongo Stitch Api Client - rule", () => {

  beforeEach(() => nock(baseUrl).post("/auth/providers/mongodb-cloud/login").reply(200, {"access_token": "sometoken"}));

  describe("When rule is exported from index", () => {
    it("should export rule rules", async () => {
      expect(client.rule.get).to.be.function();
      expect(client.rule.getAll).to.be.function();
      expect(client.rule.create).to.be.function();
      expect(client.rule.update).to.be.function();
      expect(client.rule.delete).to.be.function();
    });
  });

  describe("When get is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .get(`/groups/${projectId}/apps/${appId}/services/${serviceId}/rules/myruleId`)
        .reply(200, {"rule": "name"});
      const result = await client.rule.get("dummyServiceId", "myruleId");
      expect(result).to.equal({"rule": "name"});
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When getAll is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .get(`/groups/${projectId}/apps/${appId}/services/${serviceId}/rules`)
        .reply(200, [{"rule": "name"}]);
      const result = await client.rule.getAll("dummyServiceId");
      expect(result).to.equal([{"rule": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When create is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .post(`/groups/${projectId}/apps/${appId}/services/${serviceId}/rules`)
        .reply(200, [{"rule": "name"}]);
      const result = await client.rule.create("dummyServiceId", {"body": "key"});
      expect(result).to.equal([{"rule": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When update is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .put(`/groups/${projectId}/apps/${appId}/services/${serviceId}/rules/ruleId`)
        .reply(200, [{"rule": "name"}]);
      const result = await client.rule.update("dummyServiceId", "ruleId", {"body": "key"});
      expect(result).to.equal([{"rule": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When delete is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .delete(`/groups/${projectId}/apps/${appId}/services/${serviceId}/rules/ruleId`)
        .reply(200, [{"rule": "name"}]);
      const result = await client.rule.delete("dummyServiceId", "ruleId");
      expect(result).to.equal([{"rule": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });
});
