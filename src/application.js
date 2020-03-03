class Application {
  constructor(client, baseUrl, projectId, tokenProvider) {
    this.client_ = client;
    this.baseUrl_ = baseUrl;
    this.projectId_ = projectId;
    this.tokenProvider_ = tokenProvider;
  }

  async create(body, productType = "standard") {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps?product=${productType}`,
      "method": "POST",
      "body": JSON.stringify(body),
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      },
      "throwHttpErrors": false
    }).json();
    return response;
  }

  async getAll(productType = "standard") {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps?product=${productType}`,
      "method": "GET",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      },
      "throwHttpErrors": false
    }).json();
    return response;
  }

  async delete(appId) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${appId}`,
      "method": "DELETE",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      },
      "throwHttpErrors": false
    }).json();
    return response;
  }
}

module.exports = Application;
