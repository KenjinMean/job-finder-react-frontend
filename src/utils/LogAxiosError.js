/**
 * Utility function to log Axios errors with detailed information.
 *
 * @param {Error} error - The Axios error object.
 * @throws {Error} - Throws an error with a user-friendly message.
 */
const logAxiosError = (error) => {
  if (error.response) {
    // The request was made, but the server responded with an error
    console.error("Server Response: ", error.response.status);
    console.error("Server Response Data:", error.response.data);
  } else if (error.request) {
    // The request was made, but no response was received
    console.error("No Response Received. Check your network connection.");
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("Error Setting Up Request:", error.message);
  }
};

export { logAxiosError };
