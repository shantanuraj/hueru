/**
 * Extract token from hue response
 */

const extractToken = (response) => {
  try {
    return response[0].success.username;
  } catch (err) {
    return null;
  }
};

export default extractToken;
