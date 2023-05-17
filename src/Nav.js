export default function Navbar(){
    return(
<div>
  <header className="header" id="header">
        <nav class="nav container">
            <a href="#" className="nav_logo">PJ</a>

            <div class="nav_menu" id="nav-menu">
               <ul class="nav_list grid">
                   <li class="nav_item">
                     <a href="#home" className="nav_link active-link">
                      <i class='bx bx-home-alt nav_icon'  ></i> Home
                     </a>
                   </li>
                   <li class="nav_item">
                     <a href="#about" className="nav_link">
                      <i class='bx bx-user nav_icon' ></i> About
                     </a>
                   </li>
                   <li class="nav_item">
                     <a href="#skills" className="nav_link">
                      <i class='bx bx-file nav_icon' ></i> Skills
                     </a>
                   </li>
                   <li class="nav_item">
                     <a href="#services" className="nav_link">
                      <i class='bx bx-briefcase-alt-2 nav_icon'  ></i> Services
                     </a>
                   </li>
                   <li class="nav_item">
                     <a href="#portfolio"portfolio className="nav_link">
                      <i class='bx bx-image nav_icon'></i> Portfolio
                     </a>  
                   </li>
                   <li class="nav_item">
                     <a href="#contact" className="nav_link">
                      <i class='bx bx-message-rounded-dots nav_icon'></i> Contactme
                     </a>
                   </li>
             </ul>
              <i class='bx bx-x nav_close' id="nav-close"></i>
            </div>
             <div class="nav_btns">
             {/* These change button from light mood to dark mood*/}
                <i class='bx bx-moon change-theme' id="theme-button"></i>
                <div class="nav_toggle" id="nav-toggle">
                  <i class='bx bx-menu-alt-left '></i>
                </div>
             </div>
       </nav>
   </header>
</div>
   )
 }