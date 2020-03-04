class Application {

  /**
   * To initialize object properties
   * @param {Object} client - The http client
   * @param {string} baseUrl - Base url of mongodb stitch api
   * @param {string} projectId - Project id or group id
   * @param {object} tokenProvider - token provider instance which returns token
   */
  constructor(client, baseUrl, projectId, tokenProvider) {
    this.client_ = client;
    this.baseUrl_ = baseUrl;
    this.projectId_ = projectId;
    this.tokenProvider_ = tokenProvider;
  }

  /**
   * Creates the stitch application
   * @param {Object} body - Object that contains stitch application details.
   * @param {string} [productType = standard] - Optional product type. standard or atlas
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async create(body, productType = "standard") {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps?product=${productType}`,
      "method": "POST",
      "body": JSON.stringify(body),
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }

  /**
   * Returns all applications
   * @param {string} [productType = standard] - Optional product type. standard or atlas
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async getAll(productType = "standard") {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps?product=${productType}`,
      "method": "GET",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }

  /**
   * Returns a single application as per app Id
   * @param {string} appId - Application Id
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async get(appId) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${appId}`,
      "method": "GET",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }

  /**
   * Deletes a single application as per app Id
   * @param {string} appId - Application Id
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async delete(appId) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${appId}`,
      "method": "DELETE",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }
}

module.exports = Application;
