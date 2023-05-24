export default function ScrollUp(){
 function scrollUp() {
     const scrollUp = document.getElementById('scroll-up');
     // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
     if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
 }
    window.addEventListener('scroll', scrollUp)
    return(
      <div>
        {/* <!-- scroll up --> */}
          <a href="#" class="scrollup" id="scroll-up">
           <i class='bx bx-up-arrow-alt scrollup-icon'></i>
          </a>
      </div>
    )
}