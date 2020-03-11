class Email {

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
   * Send a confirmation email.
   * @param {string} email - Email address.
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async sendConfirmationEmail(email) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/user_registrations/by_email/${email}/send_confirm`,
      "method": "POST",
      "body": JSON.stringify({}),
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }

  /**
   * Confirm a pending user.
   * @param {string} email - Email address.
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async confirmPendingUser(email) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/user_registrations/by_email/${email}/confirm`,
      "method": "POST",
      "body": JSON.stringify({}),
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }

  /**
   * Re-runs a pending user’s confirmation workflow.
   * @param {string} email - Email address.
   * @returns {Promise} - promise which resolves on success and rejects on error
   */
  async reRunPendingConfirmation(email) {
    const bearerToken = await this.tokenProvider_.getBearerToken();
    const response = await this.client_({
      "url": `${this.baseUrl_}/groups/${this.projectId_}/apps/${this.appId_}/user_registrations/by_email/${email}/run_confirm`,
      "method": "POST",
      "body": JSON.stringify({}),
      "headers": {
        "Authorization": `Bearer ${bearerToken}`
      }
    }).json();
    return response;
  }
}

module.exports = Email;
