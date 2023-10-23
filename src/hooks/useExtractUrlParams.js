export function useExtractUrlParams(url, param) {
  const searchParams = new URLSearchParams(url.search);
  const params = {};

  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  return params;
}
