/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ActiveCrashingAppDetails class.
 * @constructor
 * @member {string} [nextLink]
 * 
 * @member {array} [appsWithCrashes] details of the apps with crashes
 * 
 */
function ActiveCrashingAppDetails() {
}

/**
 * Defines the metadata of ActiveCrashingAppDetails
 *
 * @returns {object} metadata of ActiveCrashingAppDetails
 *
 */
ActiveCrashingAppDetails.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ActiveCrashingAppDetails',
    type: {
      name: 'Composite',
      className: 'ActiveCrashingAppDetails',
      modelProperties: {
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        },
        appsWithCrashes: {
          required: false,
          serializedName: 'appsWithCrashes',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'CrashingAppDetailElementType',
                type: {
                  name: 'Composite',
                  className: 'CrashingAppDetail'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = ActiveCrashingAppDetails;
