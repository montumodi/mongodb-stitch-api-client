class Webhook {

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
   * Creates the webhook
   * @param {string} serviceId - service id
   * @param {Object} body - Object that contains stitch webhooks details.
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async create(serviceId, body) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/services/${serviceId}/incoming_webhooks`,
      "method": "POST",
      "body": JSON.stringify(body),
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }

  /**
   * Updates the webhook
   * @param {string} serviceId - service id
   * @param {string} webhookId - Service Id.
   * @param {Object} body - Object that contains stitch webhook details.
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async update(serviceId, webhookId, body) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/services/${serviceId}/incoming_webhooks/${webhookId}`,
      "method": "PUT",
      "body": JSON.stringify(body),
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }

  /**
   * Returns all webhooks
   * @param {string} serviceId - service id
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async getAll(serviceId) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/services/${serviceId}/incoming_webhooks`,
      "method": "GET",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }

  /**
   * Returns single webhook as per webhook Id
   * @param {string} serviceId - service id
   * @param {string} webhookId - webhook Id
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async get(serviceId, webhookId) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/services/${serviceId}/incoming_webhooks/${webhookId}`,
      "method": "GET",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }

  /**
   * Deletes single webhook as per webhook Id
   * @param {string} serviceId - service id
   * @param {string} webhookId - webhook Id
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async delete(serviceId, webhookId) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/services/${serviceId}/incoming_webhooks/${webhookId}`,
      "method": "DELETE",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }
}

module.exports = Webhook;
