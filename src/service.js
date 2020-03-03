class Service {
  constructor(client, baseUrl, projectId, appId, tokenProvider) {
    this.client_ = client;
    this.baseUrl_ = baseUrl;
    this.projectId_ = projectId;
    this.tokenProvider_ = tokenProvider;
    this.appId_ = appId;
  }

  async create(body) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/services`,
      "method": "POST",
      "body": JSON.stringify(body),
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      },
      "throwHttpErrors": false
    }).json();
    return response;
  }

  async update(serviceId, body) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/services/${serviceId}`,
      "method": "PUT",
      "body": JSON.stringify(body),
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      },
      "throwHttpErrors": false
    }).json();
    return response;
  }

  async getAll() {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/services`,
      "method": "GET",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      },
      "throwHttpErrors": false
    }).json();
    return response;
  }

  async delete(serviceId) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/services/${serviceId}`,
      "method": "DELETE",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      },
      "throwHttpErrors": false
    }).json();
    return response;
  }
}

module.exports = Service;
