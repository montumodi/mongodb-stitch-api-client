const {describe, it, beforeEach} = exports.lab = require("@hapi/lab").script();
const {expect} = require("@hapi/code");
const nock = require("nock");
const getClient = require("../src");

const baseUrl = "http://dummyBaseUrl";
const projectId = "dummyProjectId";
const appId = "dummyAppId";
const emailId = "dummySomeemail";

const client = getClient({
  "publicKey": "dummuyPublicKey",
  "privateKey": "dummyPrivateKey",
  "baseUrl": baseUrl,
  "projectId": projectId,
  "appId": appId
});


describe("Mongo Stitch Api Client - email", () => {

  beforeEach(() => nock(baseUrl).post("/auth/providers/mongodb-cloud/login").reply(200, {"access_token": "sometoken"}));

  describe("When email is exported from index", () => {
    it("should export email functions", async () => {
      expect(client.email.sendConfirmationEmail).to.be.function();
      expect(client.email.confirmPendingUser).to.be.function();
      expect(client.email.reRunPendingConfirmation).to.be.function();
    });
  });

  describe("When sendConfirmationEmail is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .post(`/groups/${projectId}/apps/${appId}/user_registrations/by_email/${emailId}/send_confirm`)
        .reply(200, [{"email": "name"}]);
      const result = await client.email.sendConfirmationEmail(emailId);
      expect(result).to.equal([{"email": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When confirmPendingUser is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .post(`/groups/${projectId}/apps/${appId}/user_registrations/by_email/${emailId}/confirm`)
        .reply(200, [{"email": "name"}]);
      const result = await client.email.confirmPendingUser(emailId);
      expect(result).to.equal([{"email": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });

  describe("When reRunPendingConfirmation is called", () => {
    it("should return response", async () => {
      const expectedRequest = nock(baseUrl)
        .post(`/groups/${projectId}/apps/${appId}/user_registrations/by_email/${emailId}/run_confirm`)
        .reply(200, [{"email": "name"}]);
      const result = await client.email.reRunPendingConfirmation(emailId);
      expect(result).to.equal([{"email": "name"}]);
      expect(expectedRequest.isDone()).to.be.true();
    });
  });
});
