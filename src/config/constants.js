/**
 * Constants
 */

/**
 * Application name
 */
export const APP_NAME = 'HueRU';

/**
 * Valid API response for bridge search
 */
export const expectedResponse = [
  {
    "error": {
      "type": 101,
      "address": "/",
      "description": "link button not pressed"
    }
  }
];

/**
 * Toast duration
 */
export const TOAST_DURATION = 2000;

/**
 * Connect message
 */
export const CONNECT_MESSAGE = 'Bridge found press button on hue bridge!';

/**
 * 30 seconds
 */
export const THIRTY_SECONDS = 30 * 1000;

/**
 * Local-storage key for store
 */
export const KEY_STORE = 'store@hue';