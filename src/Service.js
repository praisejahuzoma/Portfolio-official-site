import React, { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    const modalViews = document.querySelectorAll('.services_modal');
    const modalBtns = document.querySelectorAll('.services_button');
    const modalCloses = document.querySelectorAll('.services_modal-close');

    const openModal = (modalClick) => {
      modalViews[modalClick].classList.add('active-modal');
    };

    const closeModal = () => {
      modalViews.forEach((modalView) => {
        modalView.classList.remove('active-modal');
      });
    };

    modalBtns.forEach((modalBtn, i) => {
      modalBtn.addEventListener('click', () => {
        openModal(i);
      });
    });

    modalCloses.forEach((modalClose) => {
      modalClose.addEventListener('click', closeModal);
    });

    // Clean up the event listeners when the component is unmounted
    return () => {
      modalBtns.forEach((modalBtn, i) => {
        modalBtn.removeEventListener('click', () => {
          openModal(i);
        });
      });

      modalCloses.forEach((modalClose) => {
        modalClose.removeEventListener('click', closeModal);
      });
    };
  }, []);




  return (
    // <!-- services -->
    <section className="services section" id="services">
    <h2 className="section_title">Services</h2>
    <span className="section_subtitle">What i offer</span>

    <div className="services_contanier container grid">
        {/* <!-- services 1 --> */}
        <div className="services_content">
            <div>
                <i className='bx bx-columns services_icon' ></i>
                <h3 className="services_title">Ui/Ux <br/> Designer</h3>
            </div>

            <span className="button button--flex button--small button--link services_button">
                View More 
                <i className='bx bx-right-arrow-alt button-icon' ></i>
            </span>
            
            <div className="services_modal">
                <div className="services_modal-content">
                    <h4 className="services_modal-title">Ui/Ux <br/> Designer</h4>
                    <i className='bx bx-plus bx-spin bx-flip-vertical services_modal-close' ></i>

                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                          <i className='bx bxs-badge-check service_modal-icon'></i>
                            <p>Wireframing and prototyping</p>
                        </li>
                        <li className="services_modal-service">
                          <i className='bx bxs-badge-check service_modal-icon'></i>
                          <p>UI/UX Collaboration: Collaborating with UI/UX designers to implement their designs effectively and provide input on usability and user experience.</p>
                       </li>
                       <li className="services_modal-service">
                          <i className='bx bxs-badge-check service_modal-icon'></i>
                          <p>User interface (UI) design for websites and applications</p>
                       </li>
                       <li className="services_modal-service">
                          <i className='bx bxs-badge-check service_modal-icon'></i>
                          <p>Responsive and mobile-friendly design</p>
                      </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* <!-- services 2 --> */}
        <div className="services_content">
          <div>
              <i className='bx bx-code services_icon'></i>
              <h3 className="services_title">Frontend <br/> Developer</h3>
          </div>

          <span className="button button--flex button--small button--link services_button">
              View More 
              <i className='bx bx-right-arrow-alt button-icon' ></i>
          </span>
          
          <div className="services_modal">
              <div className="services_modal-content">
                  <h4 className="services_modal-title">Frontend <br/> Developer</h4>
                  <i className='bx bx-plus bx-spin bx-flip-vertical services_modal-close' ></i>


                  <ul className="services_modal-services grid">
                      <li className="services_modal-service">
                          <i className='bx bxs-badge-check service_modal-icon'></i>
                          <p>JavaScript Development: Building interactive and dynamic elements on web pages using JavaScript frameworks and libraries.</p>
                      </li>
                      <li className="services_modal-service">
                          <i className='bx bxs-badge-check service_modal-icon'></i>
                        <p>Version Control: Using version control systems like Git to track changes, collaborate with other developers, and maintain codebase integrity.</p>
                      </li>
                      <li className="services_modal-service">
                          <i className='bx bxs-badge-check service_modal-icon'></i>
                        <p>HTML/CSS Development: Writing clean and semantic HTML markup and CSS stylesheets to structure and style web pages</p>
                      </li>
                      <li className="services_modal-service">
                          <i className='bx bxs-badge-check service_modal-icon'></i>
                        <p>Bug Fixing and Troubleshooting: Identifying and resolving issues, bugs, and errors in front-end code to ensure smooth functionality.</p>
                      </li>
                      <li className="services_modal-service">
                          <i className='bx bxs-badge-check service_modal-icon'></i>
                        <p>Responsive Web Design: Creating websites that are optimized for various devices and screen sizes to provide a seamless user experience.</p>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    
    </div>
</section>
  );
}
export default Services;
