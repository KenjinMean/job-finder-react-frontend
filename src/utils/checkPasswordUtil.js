export const checkPasswordUtil = (value, check) => {
  // Note Registration form input also has regex pattern match,
  // should also check it if you plan to add another password check here
  // regex pattern is used to trigger the error and show the passwordChecklistUIComponent using the input-error class
  switch (check) {
    case "letter":
      return /[a-zA-Z]/.test(value);
    case "number":
      return /\d/.test(value);
    case "character":
      return /[$@#&!%*?]/.test(value);
    case "length":
      return value.length >= 8;
    case "validate":
      return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        value
      );
    default:
      throw new Error("Invalid check type");
  }
};
