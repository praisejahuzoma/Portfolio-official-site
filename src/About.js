import React from "react"

const About = () => {
    return(
        //   About section
        <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My introduction</span>

        <div className="about_container container grid">
           <img src="/image/About.png" alt= "About-img" className="about_img"/>

           <div className="about_data">
             <p className="about_description">
                My skill set is diverse, ranging from knowledge of React programming through HTML, CSS, and Javascript. 
                My main goal is to help other people create websites utilizing the best technologies available.</p>

              <div className="about_info">
                 <div>
                     <span className="about_info-title">03+</span>
                     <span className="about_info-name">Years <br/> experience</span>
                 </div>
                 <div>
                    <span className="about_info-title">7+</span>
                    <span className="about_info-name">Completed <br/> project</span>
                 </div>
                 <div>
                    <span className="about_info-title">1</span>
                    <span className="about_info-name">Companies/NGO`s <br/> worked</span>
                 </div>
             </div>

             <div className="about_buttons">
                 <a download="" href="/Resume.pdf"className="button button--flex">
                    Download CV<i class='bx bx-cloud-download button_icon' ></i>
                </a>
             </div>
         </div>
    </div>
  </section>
    )
}
export default About;