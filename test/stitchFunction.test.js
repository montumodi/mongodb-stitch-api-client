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


describe("Mongo Stitch Api Client - stitchFunction", () => {

  beforeEach(() => nock(baseUrl).post("/auth/providers/mongodb-cloud/login").reply(200, {"access_token": "sometoken"}));

  describe("When stitchFunction is exported from index", () => {
    it("should export stitchFunction functions", async () => {
      expect(client.stitchFunction.get).to.be.function();
      expect(client.stitchFunction.getAll).to.be.function();
      expect(client.stitchFunction.create).to.be.function();
      expect(client.stitchFunction.update).to.be.function();
      expect(client.stitchFunction.delete).to.be.function();
    });
  });

  describe("When get is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .get(`/groups/${projectId}/apps/${appId}/functions/mystitchFunctionId`)
        .reply(200, {"stitchFunction": "name"});
      const result = await client.stitchFunction.get("mystitchFunctionId");
      expect(result).to.equal({"stitchFunction": "name"});
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When getAll is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .get(`/groups/${projectId}/apps/${appId}/functions`)
        .reply(200, [{"stitchFunction": "name"}]);
      const result = await client.stitchFunction.getAll();
      expect(result).to.equal([{"stitchFunction": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When create is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .post(`/groups/${projectId}/apps/${appId}/functions`)
        .reply(200, [{"stitchFunction": "name"}]);
      const result = await client.stitchFunction.create({"body": "key"});
      expect(result).to.equal([{"stitchFunction": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When update is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .put(`/groups/${projectId}/apps/${appId}/functions/stitchFunctionId`)
        .reply(200, [{"stitchFunction": "name"}]);
      const result = await client.stitchFunction.update("stitchFunctionId", {"body": "key"});
      expect(result).to.equal([{"stitchFunction": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When delete is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .delete(`/groups/${projectId}/apps/${appId}/functions/stitchFunctionId`)
        .reply(200, [{"stitchFunction": "name"}]);
      const result = await client.stitchFunction.delete("stitchFunctionId");
      expect(result).to.equal([{"stitchFunction": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });
});
