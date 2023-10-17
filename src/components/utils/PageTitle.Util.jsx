import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function PageTitleUtil({ title }) {
  const location = useLocation();

  useEffect(() => {
    document.title = `${title} - JobFinder` || "JobFinder";
  }, [location, title]);

  return null;
}
