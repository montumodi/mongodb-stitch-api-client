class Token {

  /**
   * To initialize object properties
   * @param {Object} client - The http client
   * @param {string} baseUrl - Base url of mongodb stitch api
   * @param {string} publicKey - Public key
   * @param {string} privateKey - Private key
   */
  constructor(client, baseUrl, publicKey, privateKey) {
    this.client_ = client;
    this.baseUrl_ = baseUrl;
    this.publicKey_ = publicKey;
    this.privateKey_ = privateKey;
  }

  /**
   * Returns the bearer token as per public key and private key
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async getBearerToken() {
    const response = await this.client_({
      "url": `${this.baseUrl_}/auth/providers/mongodb-cloud/login`,
      "method": "POST",
      "body": JSON.stringify({
        "username": this.publicKey_,
        "apiKey": this.privateKey_
      })
    }).json();
    return response.access_token;
  }
}

module.exports = Token;
