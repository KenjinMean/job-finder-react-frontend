export const resetUrlPath = () => {
  const newURL = `${window.location.origin}${window.location.pathname}`;
  window.history.replaceState({}, document.title, newURL);
};
