const currentYear = new Date().getFullYear();
const startYear = 1920;

export const yearsConstants = Array.from(
  { length: currentYear - startYear + 1 },
  (_, index) => ({
    value: startYear + index,
    name: startYear + index,
  })
);
