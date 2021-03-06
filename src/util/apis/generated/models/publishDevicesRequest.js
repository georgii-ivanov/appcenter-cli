/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the PublishDevicesRequest class.
 * @constructor
 * The publising information.
 *
 * @member {string} username The username for the Apple Developer account to
 * publish the devices to.
 * 
 * @member {string} password The password for the Apple Developer account to
 * publish the devices to.
 * 
 * @member {boolean} [publishAllDevices] When set to true, all unprovisioned
 * devices will be published to the Apple Developer account.  When false,
 * only the provided devices will be published to the Apple Developer account.
 * 
 * @member {array} [devices] Array of device UDID's to be published to the
 * Apple Developer account.
 * 
 */
function PublishDevicesRequest() {
}

/**
 * Defines the metadata of PublishDevicesRequest
 *
 * @returns {object} metadata of PublishDevicesRequest
 *
 */
PublishDevicesRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PublishDevicesRequest',
    type: {
      name: 'Composite',
      className: 'PublishDevicesRequest',
      modelProperties: {
        username: {
          required: true,
          serializedName: 'username',
          type: {
            name: 'String'
          }
        },
        password: {
          required: true,
          serializedName: 'password',
          type: {
            name: 'String'
          }
        },
        publishAllDevices: {
          required: false,
          serializedName: 'publish_all_devices',
          type: {
            name: 'Boolean'
          }
        },
        devices: {
          required: false,
          serializedName: 'devices',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = PublishDevicesRequest;
