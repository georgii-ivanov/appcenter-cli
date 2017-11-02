/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the AppTeamAddRequest class.
 * @constructor
 * @member {string} name The name of the app to be added to the team
 * 
 */
function AppTeamAddRequest() {
}

/**
 * Defines the metadata of AppTeamAddRequest
 *
 * @returns {object} metadata of AppTeamAddRequest
 *
 */
AppTeamAddRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AppTeamAddRequest',
    type: {
      name: 'Composite',
      className: 'AppTeamAddRequest',
      modelProperties: {
        name: {
          required: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = AppTeamAddRequest;
