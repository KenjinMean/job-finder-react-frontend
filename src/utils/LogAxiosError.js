/**
 * Utility function to log Axios errors with detailed information in development.
 * In production, it logs a generic error message and doesn't expose detailed information.
 *
 * @param {Error} error - The Axios error object.
 * @throws {Error} - Throws an error with a user-friendly message.
 */
const logAxiosError = (error) => {
  if (process.env.NODE_ENV === "development") {
    if (error.response) {
      console.error("Server Response: ", error.response);
    } else if (error.request) {
      console.error("No Response Received. Check your network connection.");
    } else {
      console.error("Error Setting Up Request:", error.message);
    }
  } else {
    console.error("An unexpected error occurred. Please try again later.");
  }
};

export { logAxiosError };
