class Token {
  constructor(client, baseUrl, publicKey, privateKey) {
    this.client_ = client;
    this.baseUrl_ = baseUrl;
    this.publicKey_ = publicKey;
    this.privateKey_ = privateKey;
  }

  async getBearerToken() {
    const response = await this.client_({
      "url": `${this.baseUrl_}/auth/providers/mongodb-cloud/login`,
      "method": "POST",
      "body": JSON.stringify({
        "username": this.publicKey_,
        "apiKey": this.privateKey_
      }),
      "throwHttpErrors": false
    }).json();
    return response.access_token;
  }
}

module.exports = Token;
