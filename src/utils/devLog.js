/**
 * Logs a message in development environment.
 * This function is intended for development debugging and should not expose sensitive information in production.
 *
 * @param {string} message - The message or additional information.
 * @param {Error} error - The message object.
 */
export const devLog = (message, ...args) => {
  if (process.env.NODE_ENV === "development") {
    console.log(message, ...args);
  }
};
