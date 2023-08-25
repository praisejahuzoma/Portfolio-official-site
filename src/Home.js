import React, { useState, useEffect } from "react";

const HomePage = () => {
    const [fadeIn, setFadeIn] = useState(false);
  
    useEffect(() => {
      // Set the fade-in className after a short delay to trigger the animation
      const timeout = setTimeout(() => {
        setFadeIn(true);
      }, 100);
  
      return () => clearTimeout(timeout);
    }, []);
    return(
// Homepage section

<section className={`home section ${fadeIn ? 'fade-in active' : ''}`} id="home">
  <div className="home_container container grid home">
         <div className="home_content grid">
             <div className="home_social">
                 <a href="https://www.instagram.com/iampraiseuzoma/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer" className="home_social-icon">
                     <i className='bx bxl-instagram' ></i>
                 </a>

                 <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="home_social-icon">
                     <i className='bx bxl-twitter' ></i>
                 </a>

                 <a href="https://github.com/praisejahuzoma" target="_blank" rel="noopener noreferrer" className="home_social-icon">
                     <i className='bx bxl-github'></i>
                 </a>
             </div>

             <div className="home_img">
              <img src="/image/Home.svg" alt="Home Profile"/>
             </div>
             <div className="home_data">
                  <h1 className="home_title fade-in">Hi, <br/>I am Praisejah</h1>
                  <h3 className="home_subtitle">Web Developer</h3>
                  <p className="home_description">Who focuses on writing clean, elegant and efficient code.</p>
                  <a href="#contact" className="button button--flex">
                     Contact Me <i className='bx bx-message-rounded-dots button_icon'></i>
                  </a>
             </div>
         </div>

         <div className="home_scroll">
             <a href="#about" className="home_scroll-button button--flex">
                 <i className='bx bx-mouse home_scroll-mouse' ></i>
                 <span className="home_scroll-name">Scroll down</span>
                 <i className='bx bx-down-arrow-alt home_scroll-arrow' ></i>
             </a>
         </div>
         
     </div>
  </section>
    )
}
export default HomePage;