import React from "react"

export default function About(){
    return(
        //   About section
        <section class="about section" id="about">
        <h2 class="section_title">About Me</h2>
        <span class="section_subtitle">My introduction</span>

        <div class="about_container container grid">
           <img src="/image/About.png" alt= "About-img" class="about_img"/>

           <div class="about_data">
             <p class="about_description">
                My skill set is diverse, ranging from knowledge of Python and React programming through HTML, CSS, and Javascript. 
                My main goal is to help other people create websites utilizing the best technologies available.</p>
                {/* High level experience in web design and development knowledg, producing quality work.  */}

              <div class="about_info">
                 <div>
                     <span class="about_info-title">03+</span>
                     <span class="about_info-name">Years <br/> experience</span>
                 </div>
                 <div>
                    <span class="about_info-title">7+</span>
                    <span class="about_info-name">Completed <br/> project</span>
                 </div>
                 <div>
                    <span class="about_info-title">1</span>
                    <span class="about_info-name">Companies/NGO`s <br/> worked</span>
                 </div>
             </div>

             <div class="about_buttons">
                 <a download="" href="images/undraw.svg"class="button button--flex">
                    Download CV<i class='bx bx-cloud-download button_icon' ></i>
                </a>
             </div>
         </div>
    </div>
  </section>
    )
}