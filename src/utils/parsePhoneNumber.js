export function parsePhoneNumber(countryCodeOrNumber, phoneNumber) {
  // Regular expression to match the country code and number
  const regex = /^\+(\d+)-(\d+)-(\d+)-(\d+)$/;
  // Extract country code and number using match
  const [, countryCode, ...numberParts] = phoneNumber.match(regex);
  // Join the number parts to get the complete number
  const number = numberParts.join("-");

  // Return the country code or number based on the provided parameter
  if (countryCodeOrNumber === "countryCode") {
    return `+${countryCode}`;
  } else if (countryCodeOrNumber === "phoneNumber") {
    return number;
  } else {
    // Handle invalid input
    throw new Error(
      'Invalid parameter. Please specify "countryCode" or "phoneNumber".'
    );
  }
}
