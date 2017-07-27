/**
 * Adapter for JSON from hue API
 */

const adaptDevice = (response) => {
  return Object.entries(response)
    .map(pair => {
      const [ id, device ] = pair;
      return { ...device, id };
    });
};

export default adaptDevice;