const {describe, it} = exports.lab = require("@hapi/lab").script();
const {expect} = require("@hapi/code");
const getClient = require("../src");

const baseUrl = "http://dummyBaseUrl";
const projectId = "dummyProjectId";

describe("Mongo Stitch Api Client - INdex", () => {

  describe("When it is required", () => {
    it("should export alert functions", () => {

      const client = getClient({
        "publicKey": "dummuyPublicKey",
        "privateKey": "dummyPrivateKey",
        "baseUrl": baseUrl,
        "projectId": projectId
      });

      expect(client).to.be.not.null();
    });
  });
});
