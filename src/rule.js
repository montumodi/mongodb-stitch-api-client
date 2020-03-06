class Rule {

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
   * Creates the rule
   * @param {string} serviceId - service id
   * @param {Object} body - Object that contains stitch rules details.
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async create(serviceId, body) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/services/${serviceId}/rules`,
      "method": "POST",
      "body": JSON.stringify(body),
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }

  /**
   * Updates the rule
   * @param {string} serviceId - service id
   * @param {string} ruleId - Service Id.
   * @param {Object} body - Object that contains stitch rule details.
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async update(serviceId, ruleId, body) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/services/${serviceId}/rules/${ruleId}`,
      "method": "PUT",
      "body": JSON.stringify(body),
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }

  /**
   * Returns all rules
   * @param {string} serviceId - service id
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async getAll(serviceId) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/services/${serviceId}/rules`,
      "method": "GET",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }

  /**
   * Returns single rule as per rule Id
   * @param {string} serviceId - service id
   * @param {string} ruleId - rule Id
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async get(serviceId, ruleId) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/services/${serviceId}/rules/${ruleId}`,
      "method": "GET",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }

  /**
   * Deletes single rule as per rule Id
   * @param {string} serviceId - service id
   * @param {string} ruleId - rule Id
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async delete(serviceId, ruleId) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/services/${serviceId}/rules/${ruleId}`,
      "method": "DELETE",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }
}

module.exports = Rule;
