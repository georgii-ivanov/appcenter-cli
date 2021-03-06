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
 * Initializes a new instance of the StepReport class.
 * @constructor
 * @member {array} finishedSnapshots
 * 
 * @member {array} deviceScreenshots
 * 
 */
function StepReport() {
}

/**
 * Defines the metadata of StepReport
 *
 * @returns {object} metadata of StepReport
 *
 */
StepReport.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'StepReport',
    type: {
      name: 'Composite',
      className: 'StepReport',
      modelProperties: {
        finishedSnapshots: {
          required: true,
          serializedName: 'finishedSnapshots',
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
        },
        deviceScreenshots: {
          required: true,
          serializedName: 'deviceScreenshots',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StepReportDeviceScreenshotsItemElementType',
                type: {
                  name: 'Composite',
                  className: 'StepReportDeviceScreenshotsItem'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = StepReport;
