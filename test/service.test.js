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


describe("Mongo Stitch Api Client - service", () => {

  beforeEach(() => nock(baseUrl).post("/auth/providers/mongodb-cloud/login").reply(200, {"access_token": "sometoken"}));

  describe("When service is exported from index", () => {
    it("should export service functions", async () => {
      expect(client.service.get).to.be.function();
      expect(client.service.getAll).to.be.function();
      expect(client.service.create).to.be.function();
      expect(client.service.update).to.be.function();
      expect(client.service.delete).to.be.function();
    });
  });

  describe("When get is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .get(`/groups/${projectId}/apps/${appId}/services/myserviceId`)
        .reply(200, {"service": "name"});
      const result = await client.service.get("myserviceId");
      expect(result).to.equal({"service": "name"});
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When getAll is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .get(`/groups/${projectId}/apps/${appId}/services`)
        .reply(200, [{"service": "name"}]);
      const result = await client.service.getAll();
      expect(result).to.equal([{"service": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When create is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .post(`/groups/${projectId}/apps/${appId}/services`)
        .reply(200, [{"service": "name"}]);
      const result = await client.service.create({"body": "key"});
      expect(result).to.equal([{"service": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When update is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .patch(`/groups/${projectId}/apps/${appId}/services/serviceId`)
        .reply(200, [{"service": "name"}]);
      const result = await client.service.update("serviceId", {"body": "key"});
      expect(result).to.equal([{"service": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When delete is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .delete(`/groups/${projectId}/apps/${appId}/services/serviceId`)
        .reply(200, [{"service": "name"}]);
      const result = await client.service.delete("serviceId");
      expect(result).to.equal([{"service": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });
});
