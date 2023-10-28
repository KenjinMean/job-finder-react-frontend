export function useFormatSalary(salary) {
  if (!salary) {
    return "";
  }

  const salaryNumber = parseFloat(salary);
  return salaryNumber.toLocaleString();
}
