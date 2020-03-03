const {describe, it} = exports.lab = require("@hapi/lab").script();
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


describe("Mongo Stitch Api Client - token", () => {

  describe("When token is exported from index", () => {
    it("should export token functions", async () => {
      expect(client.token.getBearerToken).to.be.function();
    });
  });

  describe("When getBearerToken is called", () => {
    it("should return response", async () => {
      nock(baseUrl)
        .post("/auth/providers/mongodb-cloud/login")
        .reply(200, {"access_token": "sometoken"});
      const result = await client.token.getBearerToken();
      expect(result).to.equal("sometoken");
    });
  });
});
