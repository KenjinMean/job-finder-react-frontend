export const toKebabCase = (name) => {
  return name
    .replace(/([a-z])([A-Z])/g, "$1-$2") // insert hyphen between camelCase
    .toLowerCase(); // convert to lowercase
};
