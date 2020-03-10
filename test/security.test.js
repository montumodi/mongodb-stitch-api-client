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


describe("Mongo Stitch Api Client - security", () => {

  beforeEach(() => nock(baseUrl).post("/auth/providers/mongodb-cloud/login").reply(200, {"access_token": "sometoken"}));

  describe("When security is exported from index", () => {
    it("should export security functions", async () => {
      expect(client.security.getAll).to.be.function();
      expect(client.security.allowOrigins).to.be.function();
    });
  });

  describe("When getAll is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .get(`/groups/${projectId}/apps/${appId}/security/allowed_request_origins`)
        .reply(200, {"security": "name"});
      const result = await client.security.getAll();
      expect(result).to.equal({"security": "name"});
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When allowOrigins is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .post(`/groups/${projectId}/apps/${appId}/security/allowed_request_origins`)
        .reply(200, [{"security": "name"}]);
      const result = await client.security.allowOrigins({"body": "key"});
      expect(result).to.equal([{"security": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });
});
