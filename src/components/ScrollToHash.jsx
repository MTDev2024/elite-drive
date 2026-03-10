import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const element = document.querySelector(hash);
    if (!element) return;

    const navbarHeight = 80;

    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - navbarHeight,
      behavior: "smooth",
    });
  }, [hash]);

  return null;
}

export default ScrollToHash;
