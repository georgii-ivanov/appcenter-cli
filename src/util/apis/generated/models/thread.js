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
 * Initializes a new instance of the Thread class.
 * @constructor
 * a thread representation
 *
 * @member {string} title name of the thread
 * 
 * @member {array} frames frames of that thread
 * 
 * @member {object} [exception] potential additional exception happened in
 * that thread (Last Exception Backtrace)
 * 
 * @member {string} [exception.reason] Reason of the exception
 * 
 * @member {string} [exception.type] Type of the exception
 * (NSSomethingException, NullPointerException)
 * 
 * @member {array} [exception.frames] frames of the excetpion
 * 
 * @member {boolean} [exception.relevant] relevant exception (crashed)
 * 
 * @member {array} [exception.innerExceptions]
 * 
 * @member {string} [exception.platform] SDK/Platform this thread is beeing
 * generated from. Possible values include: 'ios', 'android', 'xamarin',
 * 'react-native', 'other'
 * 
 * @member {boolean} [relevant] Shows if a thread is relevant or not. Is false
 * if all frames are non relevant, otherwise true
 * 
 * @member {string} [platform] SDK/Platform this thread is beeing generated
 * from. Possible values include: 'ios', 'android', 'xamarin',
 * 'react-native', 'other'
 * 
 * @member {boolean} [crashed] True if this thread crashed
 * 
 */
function Thread() {
}

/**
 * Defines the metadata of Thread
 *
 * @returns {object} metadata of Thread
 *
 */
Thread.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Thread',
    type: {
      name: 'Composite',
      className: 'Thread',
      modelProperties: {
        title: {
          required: true,
          serializedName: 'title',
          type: {
            name: 'String'
          }
        },
        frames: {
          required: true,
          serializedName: 'frames',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StackFrameElementType',
                type: {
                  name: 'Composite',
                  className: 'StackFrame'
                }
            }
          }
        },
        exception: {
          required: false,
          serializedName: 'exception',
          type: {
            name: 'Composite',
            className: 'Exception'
          }
        },
        relevant: {
          required: false,
          serializedName: 'relevant',
          type: {
            name: 'Boolean'
          }
        },
        platform: {
          required: false,
          serializedName: 'platform',
          type: {
            name: 'String'
          }
        },
        crashed: {
          required: false,
          serializedName: 'crashed',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = Thread;
