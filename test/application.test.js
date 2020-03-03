const {describe, it, beforeEach} = exports.lab = require("@hapi/lab").script();
const {expect} = require("@hapi/code");
const nock = require("nock");
const getClient = require("../src");

const baseUrl = "http://dummyBaseUrl";
const projectId = "dummyProjectId";

const client = getClient({
  "publicKey": "dummuyPublicKey",
  "privateKey": "dummyPrivateKey",
  "baseUrl": baseUrl,
  "projectId": projectId
});


describe("Mongo Stitch Api Client - Application", () => {

  beforeEach(() => nock(baseUrl).post("/auth/providers/mongodb-cloud/login").reply(200, {"access_token": "sometoken"}));

  describe("When application is exported from index", () => {
    it("should export application functions", async () => {
      expect(client.application.get).to.be.function();
      expect(client.application.getAll).to.be.function();
      expect(client.application.create).to.be.function();
      expect(client.application.delete).to.be.function();
    });
  });

  describe("When get is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .get(`/groups/${projectId}/apps/myapplicationId`)
        .reply(200, {"application": "name"});
      const result = await client.application.get("myapplicationId");
      expect(result).to.equal({"application": "name"});
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When getAll is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .get(`/groups/${projectId}/apps?product=atlas`)
        .reply(200, [{"application": "name"}]);
      const result = await client.application.getAll("atlas");
      expect(result).to.equal([{"application": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When create is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .post(`/groups/${projectId}/apps?product=standard`)
        .reply(200, [{"application": "name"}]);
      const result = await client.application.create({"body": "key"});
      expect(result).to.equal([{"application": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When delete is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .delete(`/groups/${projectId}/apps/appId`)
        .reply(200, [{"application": "name"}]);
      const result = await client.application.delete("appId");
      expect(result).to.equal([{"application": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });
});
