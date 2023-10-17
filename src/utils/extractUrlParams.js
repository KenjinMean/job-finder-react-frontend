export function extractUrlParams(search) {
  const urlParams = new URLSearchParams(search);
  const params = {};

  for (const [key, value] of urlParams.entries()) {
    params[key] = value;
  }

  return params;
}
