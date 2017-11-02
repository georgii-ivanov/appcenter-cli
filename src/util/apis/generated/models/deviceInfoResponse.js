/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the DeviceInfoResponse class.
 * @constructor
 * The information for a single iOS device
 *
 * @member {string} udid The Unique Device IDentifier of the device
 * 
 * @member {string} model The model identifier of the device, in the format
 * iDeviceM,N
 * 
 * @member {string} deviceName The device description, in the format "iPhone 7
 * Plus (A1784)"
 * 
 * @member {string} [fullDeviceName] A combination of the device model name
 * and the owner name.
 * 
 * @member {string} osBuild The last known OS version running on the device
 * 
 * @member {string} osVersion The last known OS version running on the device
 * 
 * @member {string} [serial] The device's serial number. Always empty or
 * undefined at present.
 * 
 * @member {string} [imei] The device's International Mobile Equipment
 * Identity number. Always empty or undefined at present.
 * 
 * @member {string} [ownerId] The user ID of the device owner.
 * 
 * @member {string} status The provisioning status of the device.
 * 
 */
function DeviceInfoResponse() {
}

/**
 * Defines the metadata of DeviceInfoResponse
 *
 * @returns {object} metadata of DeviceInfoResponse
 *
 */
DeviceInfoResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DeviceInfoResponse',
    type: {
      name: 'Composite',
      className: 'DeviceInfoResponse',
      modelProperties: {
        udid: {
          required: true,
          serializedName: 'udid',
          type: {
            name: 'String'
          }
        },
        model: {
          required: true,
          serializedName: 'model',
          type: {
            name: 'String'
          }
        },
        deviceName: {
          required: true,
          serializedName: 'device_name',
          type: {
            name: 'String'
          }
        },
        fullDeviceName: {
          required: false,
          serializedName: 'full_device_name',
          type: {
            name: 'String'
          }
        },
        osBuild: {
          required: true,
          serializedName: 'os_build',
          type: {
            name: 'String'
          }
        },
        osVersion: {
          required: true,
          serializedName: 'os_version',
          type: {
            name: 'String'
          }
        },
        serial: {
          required: false,
          serializedName: 'serial',
          type: {
            name: 'String'
          }
        },
        imei: {
          required: false,
          serializedName: 'imei',
          type: {
            name: 'String'
          }
        },
        ownerId: {
          required: false,
          serializedName: 'owner_id',
          type: {
            name: 'String'
          }
        },
        status: {
          required: true,
          serializedName: 'status',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = DeviceInfoResponse;
