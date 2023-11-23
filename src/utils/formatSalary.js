export function formatSalary(salary) {
  if (!salary) {
    return "";
  }

  const salaryNumber = parseFloat(salary);
  return salaryNumber.toLocaleString();
}
