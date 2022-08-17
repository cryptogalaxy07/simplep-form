import { useState } from "react";
export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <button 
     className="fixed right-4 bottom-4 bg-green-600 text-bold text-xl text-white rounded-md px-4 py-2"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      Back To Top
    </button>
  );
}
