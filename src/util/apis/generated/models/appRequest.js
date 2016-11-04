/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the AppRequest class.
 * @constructor
 * @member {string} [description] A short text describing the app
 * 
 * @member {string} displayName The full name of the user. Might for example
 * be first and last name
 * 
 * @member {string} [name] The name of the app used in URLs
 * 
 * @member {string} os The OS the app will be running on. Possible values
 * include: 'iOS', 'Android'
 * 
 * @member {string} platform The platform of the app. Possible values include:
 * 'Objective-C-Swift', 'Java', 'React-Native', 'Xamarin'
 * 
 */
function AppRequest() {
}

/**
 * Defines the metadata of AppRequest
 *
 * @returns {object} metadata of AppRequest
 *
 */
AppRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AppRequest',
    type: {
      name: 'Composite',
      className: 'AppRequest',
      modelProperties: {
        description: {
          required: false,
          serializedName: 'description',
          type: {
            name: 'String'
          }
        },
        displayName: {
          required: true,
          serializedName: 'display_name',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        os: {
          required: true,
          serializedName: 'os',
          type: {
            name: 'String'
          }
        },
        platform: {
          required: true,
          serializedName: 'platform',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = AppRequest;
