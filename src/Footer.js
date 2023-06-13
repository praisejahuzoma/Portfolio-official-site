import React from "react"
const Footer = () =>{
    return(
        // <!-- footer -->
    <footer class="footer">
      <div class="footer_bg">
          <div class="footer_container container grid">
              <div>
                  <h1 class="footer_title">Praisejah</h1>
                  <span class="footer_subtitle">Frontend developer </span>                  
              </div>
            {/* footer links to service, portfolio, and contactme section */}
              <ul class="footer_links">
                  <li>
                      <a href="#services" class="footer_link">Services</a>
                  </li>
                <li>
                    <a href="#portfolio" class="footer_link">Portfolio</a>
                </li>
                <li>
                    <a href="#contact" class="footer_link">Contactme</a>
                </li>
              </ul>
              
            {/* socials */}
              <div class="footer_socials">
                  <a href="https://www.github.com/praisejahuzoma" target="-blank" class="footer_social">
                    <i class='bx bxl-github'></i>
                  </a>

                  <a href="https://www.instagram.com/" target="-blank" class="footer_social">
                    <i class='bx bxl-instagram'></i>
                  </a>

                  <a href="https://twitter.com/" target="-blank" class="footer_social">
                    <i class='bx bxl-twitter'></i>
                  </a>
              </div>
          </div>

          <p class="footer_copy">&#169; Praisejah. All right reserved</p>
      </div>
    </footer>
    )
}

export default Footer;