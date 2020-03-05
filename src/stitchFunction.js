class StitchFunction {

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
   * Creates the function
   * @param {Object} body - Object that contains stitch functions details.
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async create(body) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/functions`,
      "method": "POST",
      "body": JSON.stringify(body),
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }

  /**
   * Updates the function
   * @param {string} functionId - Service Id.
   * @param {Object} body - Object that contains stitch function details.
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async update(functionId, body) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/functions/${functionId}`,
      "method": "PUT",
      "body": JSON.stringify(body),
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }

  /**
   * Returns all functions
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async getAll() {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/functions`,
      "method": "GET",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }

  /**
   * Returns single function as per function Id
   * @param {string} functionId - function Id
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async get(functionId) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/functions/${functionId}`,
      "method": "GET",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }

  /**
   * Deletes single function as per function Id
   * @param {string} functionId - function Id
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async delete(functionId) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/functions/${functionId}`,
      "method": "DELETE",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }
}

module.exports = StitchFunction;
