class Trigger {

  /**
   * To initialize object properties
   * @param {Object} client - The http client
   * @param {string} baseUrl - Base url of mongodb stitch api
   * @param {string} projectId - Project id or group id
   * @param {string} appId - app id
   * @param {object} tokenProvider - token provider instance which returns token
   */
  constructor(client, baseUrl, projectId, appId, tokenProvider) {
    this.client_ = client;
    this.baseUrl_ = baseUrl;
    this.projectId_ = projectId;
    this.tokenProvider_ = tokenProvider;
    this.appId_ = appId;
  }

  /**
   * Creates the trigger
   * @param {Object} body - Object that contains stitch trigger details.
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
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

  /**
   * Updates the trigger
   * @param {string} triggerId - Service Id.
   * @param {Object} body - Object that contains stitch trigger details.
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
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

  /**
   * Resumes the trigger
   * @param {string} triggerId - Service Id.
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
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

  /**
   * Returns all triggers
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
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

  /**
   * Returns single trigger as per trigger Id
   * @param {string} triggerId - Trigger Id
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
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

  /**
   * Deletes single trigger as per trigger Id
   * @param {string} triggerId - Trigger Id
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
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
