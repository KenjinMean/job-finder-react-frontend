export const getFullImageUrl = (imageUrl) => {
  const url = imageUrl
    ? imageUrl.startsWith("http://") || imageUrl.startsWith("https://")
      ? imageUrl
      : `${import.meta.env.VITE_JOB_FINDER_API_URL}/${imageUrl}`
    : "";
  return url;
};
