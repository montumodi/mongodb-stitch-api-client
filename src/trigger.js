class Trigger {
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
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/triggers`,
      "method": "POST",
      "body": JSON.stringify(body),
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      },
      "throwHttpErrors": false
    }).json();
    return response;
  }

  async update(triggerId, body) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/triggers/${triggerId}`,
      "method": "PUT",
      "body": JSON.stringify(body),
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      },
      "throwHttpErrors": false
    }).json();
    return response;
  }

  async resume(triggerId) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/triggers/${triggerId}/resume`,
      "method": "PUT",
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
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/triggers`,
      "method": "GET",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      },
      "throwHttpErrors": false
    }).json();
    return response;
  }

  async get(triggerId) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/triggers/${triggerId}`,
      "method": "GET",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      },
      "throwHttpErrors": false
    }).json();
    return response;
  }

  async delete(triggerId) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/triggers/${triggerId}`,
      "method": "DELETE",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      },
      "throwHttpErrors": false
    }).json();
    return response;
  }
}

module.exports = Trigger;
