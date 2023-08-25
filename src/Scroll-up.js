import React, { useEffect } from "react";

const ScrollUp = () => {
  useEffect(() => {
    function handleScroll() {
      const scrollUp = document.getElementById("scroll-up");
      // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
      if (window.scrollY >= 560) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* scroll up */}
      <button className="scrollup" id="scroll-up" onClick={scrollToTop}>
        <i className="bx bx-up-arrow-alt scrollup-icon"></i>
      </button>
    </div>
  );
};

export default ScrollUp;
