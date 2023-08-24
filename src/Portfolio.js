import React, { useEffect, useCallback, useRef } from 'react';

const Portfolios = () => {
// Portfolio javascript
  const slideIndexRef = useRef(1);

  const showSlides = useCallback(() => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    let slideIndex = slideIndexRef.current;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    slideIndexRef.current = slideIndex;
  }, []);

  useEffect(() => {
    showSlides();
  }, [showSlides]);

  function plusSlides(n) {
    slideIndexRef.current += n;
    showSlides();
  }

  function currentSlides(n) {
    slideIndexRef.current = n;
    showSlides();
  }

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">Some of my Projects</span>

      <div className="portfolio_container container slideshow-container">
        <div className="swiper-wrapper">
          {/* portfolio 1 */}
          <div className="portfolio_content grid mySlides fade">
            <img src="image/online-store.png" alt="" className="portfolio_img" />

            <div className="portfolio_data">
              <h3 className="portfolio_title">Online Store</h3>
              <p className="portfolio_description">Website adaptable to all devices.</p>
              <button onClick={() => window.open("https://pink-shop.netlify.app/", "_blank", "noopener noreferrer")} className="button button--flex button--small portfolio_button">
                Demo
                <i className='bx bx-right-arrow-alt button-icon'></i>
              </button>
            </div>
          </div>

          {/* portfolio 2 */}
          <div className="portfolio_content grid mySlides fade">
            <img src="image/uiclock.png" alt="" className="portfolio_img" />

            <div className="portfolio_data">
              <h3 className="portfolio_title">Ui-Clock</h3>
              <p className="portfolio_description">Responsive Dark and Light Mode Clock</p>
              <button onClick={() => window.open("https://uiclock.netlify.app/", "_blank", "noopener noreferrer")} className="button button--flex button--small portfolio_button">
                Demo
                <i className='bx bx-right-arrow-alt button-icon'></i>
              </button>
            </div>
          </div>

          {/* portfolio 3 */}
          <div className="portfolio_content grid mySlides fade">
            <img src="image/marketlist.png" alt="" className="portfolio_img" />

            <div className="portfolio_data">
              <h3 className="portfolio_title">Market List Calculator</h3>
              <p className="portfolio_description">Website that calculates your market list price</p>
              <button onClick={() => window.open("https://market-calculator.netlify.app/", "_blank", "noopener noreferrer")} className="button button--flex button--small portfolio_button">
                Demo
                <i className='bx bx-right-arrow-alt button-icon'></i>
              </button>
            </div>
          </div>

          {/* portfolio 4 */}
          <div className="portfolio_content grid mySlides fade">
            <img src="image/api-weather.png" alt="" className="portfolio_img" />

            <div className="portfolio_data">
              <h3 className="portfolio_title">Weather App</h3>
              <p className="portfolio_description">Get your city's weather</p>
              <button onClick={() => window.open("https://api-weather-forecast-app.netlify.app/", "_blank", "noopener noreferrer")} className="button button--flex button--small portfolio_button">
                Demo
                <i className='bx bx-right-arrow-alt button-icon'></i>
              </button>
            </div>
          </div>

          {/* portfolio 5 */}
          <div className="portfolio_content grid mySlides fade">
            <img src="image/mymusic-app.png" alt="" className="portfolio_img" />

            <div className="portfolio_data">
              <h3 className="portfolio_title">Music App</h3>
              <p className="portfolio_description">Music App</p>
              <button onClick={() => window.open("https://mymusic-app.netlify.app/", "_blank", "noopener noreferrer")} className="button button--flex button--small portfolio_button">
                Demo
                <i className='bx bx-right-arrow-alt button-icon'></i>
              </button>
            </div>
          </div>
         {/* prev and next arrows */}
          <span className="prev" onClick={() => plusSlides(-1)}>&#10094;</span>
          <span  className="next" onClick={() => plusSlides(1)}>&#10095;</span>
        </div>

        {/* prev and next dots */}
        <div style={{ textAlign: "center" }}>
          <span className="dot" onClick={() => currentSlides(1)}></span>
          <span className="dot" onClick={() => currentSlides(2)}></span>
          <span className="dot" onClick={() => currentSlides(3)}></span>
          <span className="dot" onClick={() => currentSlides(4)}></span>
          <span className="dot" onClick={() => currentSlides(5)}></span>
        </div>
      </div>
    </section>
  );
}
export default Portfolios;
