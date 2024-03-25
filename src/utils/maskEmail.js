export function maskEmail(email) {
  // Regular expression for a valid email address
  const emailRegex = /^([^\s@]+@[^\s@]+\.[^\s@]+)$/;

  // Check if the provided string is a valid email address
  if (!emailRegex.test(email)) {
    return email; // Don't mask invalid emails
  }

  // Split the email into username and domain parts
  const [username, domain] = email.split("@");

  // Determine the number of characters to reveal from the username
  const revealLength = Math.min(username.length, 3); // Reveal at least 3 characters

  // Mask the remaining username characters with asterisks
  const maskedUsername =
    username.slice(0, revealLength) +
    "*".repeat(username.length - revealLength);

  // Return the masked email address
  return `${maskedUsername}@${domain}`;
}
