class Security {

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
   * Set the allowed HTTP origins from which Stitch should allow requests.
   * @param {Object} body - Object that contains allowed http origins
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async allowOrigins(body) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/security/allowed_request_origins`,
      "method": "POST",
      "body": JSON.stringify(body),
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }

  /**
   * List the allowed HTTP origins from which Stitch should allow requests.
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async getAll() {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/security/allowed_request_origins`,
      "method": "GET",
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }
}

module.exports = Security;
