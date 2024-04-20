/**
 * Encodes parameters into a URL-encoded string.
 * @param {Object} parameters - The object parameters to be encoded. It accepts an object format and maps through it. If an object's child key and value is an array, it maps through it and uses the key as the parameter name. If it's just a string or number key-value pair, it returns it as an encoded URI component. Then joins them using "&" if multiple key-value pairs are provided.
 * @returns {string} The URL-encoded string representing the parameters.
 * @example
 *
 * const filters = {
 *    job_type: ["Contract", "Freelance"],
 *    // output: job_type[]=Contract&job_type[]=Freelance
 *
 *    min_salary: 20000,
 *    // output: mins_salary=20000
 * }
 *
 * console.log(encodeParameters(filters));
 * output: job_type[]=Contract&job_type[]=Freelance&mins_salary=20000
 *
 * // can also provide with string or number, just convert to object when passing to the encode parameter
 * const perPage = 5;
 * console.log(encodeParameters({per_page: perPage}));
 * output: per_page=5
 *
 */
export function encodeParameters(parameters) {
  // Check if parameters object is empty
  if (!Object.keys(parameters).length) {
    return; // Return empty string if parameters are empty
  }

  return Object.entries(parameters)
    .map(([key, value]) => {
      // Skip encoding if value is undefined, empty string, or empty array
      if (
        value === undefined ||
        value === "" ||
        (Array.isArray(value) && value.length === 0)
      ) {
        return "";
      }

      if (Array.isArray(value)) {
        return value
          .map(
            (val) => `${encodeURIComponent(key)}[]=${encodeURIComponent(val)}`
          )
          .join("&");
      } else {
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      }
    })
    .join("&");
}
