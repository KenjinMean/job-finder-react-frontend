const currentYear = new Date().getFullYear();
const startYear = 1920;

export const yearsArray = Array.from(
  { length: currentYear - startYear + 1 },
  (_, index) => startYear + index
);
