import React from "react"

const HomePage = () => {
    return(
// Homepage section

  <section className="home section" id="home">
      <div className="home_container container grid"> 
         <div className="home_content grid">
             <div className="home_social">
                 <a href="http://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="home_social-icon">
                     <i class='bx bxl-instagram' ></i>
                 </a>

                 <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="home_social-icon">
                     <i class='bx bxl-twitter' ></i>
                 </a>

                 <a href="https://github.com/praisejahuzoma" target="_blank" rel="noopener noreferrer" className="home_social-icon">
                     <i class='bx bxl-github'></i>
                 </a>
             </div>

             <div className="home_img">
              <img src="/image/Home_img.png" alt="Home Profile photo"/>
             </div>
             <div class="home_data">
                  <h1 className="home_title fade-in">Hi, <br/>I'm Praisejah</h1>
                  <h3 className="home_subtitle">Web Developer</h3>
                  <p className="home_description">Who focuses on writing clean, elegant and efficient code.</p>
                  <a href="#contact" className="button button--flex">
                     Contact Me <i class='bx bx-message-rounded-dots button_icon'></i>
                  </a>
             </div>
         </div>

         <div class="home_scroll">
             <a href="#about" className="home_scroll-button button--flex">
                 <i class='bx bx-mouse home_scroll-mouse' ></i>
                 <span className="home_scroll-name">Scroll down</span>
                 <i class='bx bx-down-arrow-alt home_scroll-arrow' ></i>
             </a>
         </div>
         
     </div>
  </section>
    )
}
export default HomePage;