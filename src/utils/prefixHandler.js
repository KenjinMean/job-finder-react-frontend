export const prefixHandler = (method, value, affix) => {
  if (!value) {
    return ""; // or return value; depending on your use case
  }
  switch (method) {
    case "remove":
      if (value.startsWith(affix)) {
        return value.slice(affix.length);
      }
      break;
    case "add":
      if (!value.startsWith(affix)) {
        return affix + value;
      }
      break;
    default:
      // Handle other cases or provide a default behavior
      return value;
  }

  // Return the original value if no changes were made
  return value;
};
