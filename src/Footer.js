import React from "react"
const Footer = () =>{
    return(
        // <!-- footer -->
    <footer className="footer">
      <div className="footer_bg">
          <div className="footer_container container grid">
              <div>
                  <h1 className="footer_title">Praisejah</h1>
                  <span className="footer_subtitle">Frontend developer </span>                  
              </div>
            {/* footer links to service, portfolio, and contactme section */}
              <ul className="footer_links">
                  <li>
                      <a href="#services" className="footer_link">Services</a>
                  </li>
                <li>
                    <a href="#portfolio" className="footer_link">Portfolio</a>
                </li>
                <li>
                    <a href="#contact" className="footer_link">Contactme</a>
                </li>
              </ul>
              
            {/* socials */}
              <div className="footer_socials">
                  <a href="https://www.github.com/praisejahuzoma" target="-blank" className="footer_social">
                    <i className='bx bxl-github'></i>
                  </a>

                  <a href="https://www.instagram.com/iampraiseuzoma/?igshid=MzRlODBiNWFlZA%3D%3D" target="-blank" className="footer_social">
                    <i className='bx bxl-instagram'></i>
                  </a>

                  <a href="https://twitter.com/" target="-blank" className="footer_social">
                    <i className='bx bxl-twitter'></i>
                  </a>
              </div>
          </div>

          <p className="footer_copy">&#169; Praisejah. All right reserved</p>
      </div>
    </footer>
    )
}

export default Footer;