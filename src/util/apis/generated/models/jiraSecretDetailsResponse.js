/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the JiraSecretDetailsResponse class.
 * @constructor
 * Jira secret details
 *
 * @member {string} baseUrl baseUrl to connect to jira instance
 * 
 * @member {string} username username to connect to jira instance
 * 
 */
function JiraSecretDetailsResponse() {
}

/**
 * Defines the metadata of JiraSecretDetailsResponse
 *
 * @returns {object} metadata of JiraSecretDetailsResponse
 *
 */
JiraSecretDetailsResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'JiraSecretDetailsResponse',
    type: {
      name: 'Composite',
      className: 'JiraSecretDetailsResponse',
      modelProperties: {
        baseUrl: {
          required: true,
          serializedName: 'baseUrl',
          type: {
            name: 'String'
          }
        },
        username: {
          required: true,
          serializedName: 'username',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = JiraSecretDetailsResponse;
