/**
 * Logs an error message in development environment.
 * This function is intended for development debugging and should not expose sensitive information in production.
 *
 * @param {string} message - The error message or additional information.
 * @param {Error} error - The error object.
 */
export const devError = (message, error) => {
  if (process.env.NODE_ENV === "development") {
    console.error(message, error);
  }
};
