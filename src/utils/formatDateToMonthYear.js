export function formatDateToMonthYear(dateString) {
  const options = { year: "numeric", month: "short" };
  const dateObject = new Date(dateString);
  return dateObject.toLocaleDateString("en-US", options);
}
