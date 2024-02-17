export const monthsConstants = Array.from({ length: 12 }, (_, i) => ({
  value: i + 1,
  name: new Date(2000, i, 1).toLocaleString("default", { month: "long" }),
}));
