import { devError } from "./devError";

export function handleError(error, message, location = null) {
  devError(
    `Handling fetch error${location ? ` at ${location}` : ""}:`,
    error.message
  );

  throw {
    code: error.response ? error.response.status : null,
    message: message,
    location: location,
    error: error,
  };
}
