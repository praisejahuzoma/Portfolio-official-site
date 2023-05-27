export default function Contact(){
    return(
        // <!-- contact me section-->
        <section className="contact section" id="contact">
            <h2 className="section_title">Contact Me</h2>
            <span className="section_subtitle">Let's Talk</span>
  
            <div className="contact_container container grid">
                <div>
                    <div className="contact_information">
                      <i class='bx bx-phone contact_icon'></i>
  
                      <div>
                         <h3 className="contact_title">Call Me</h3> 
                         <span className="contact_subtitle">+234 9022725714</span>
                      </div>
                    </div>
  
                  <div className="contact_information">
                  <i class='bx bx-envelope contact_icon'></i>
                  
                      <div>
                          <h3 className="contact_title">Email</h3>
                          <span className="contact_subtitle">Praisejah.c.uzoma@gmail.com</span>
                      </div>
                  </div>
  
                  <div className="contact_information">
                      <i class='bx bxs-edit-location contact_icon'></i>
                  
                      <div>
                          <h3 className="contact_title">Lcation</h3>
                          <span className="contact_subtitle">Abuja - Amac Estate Lugbe</span>
                      </div>
                  </div>
                </div>
  
                <form action="" className="contact_form grid">
                    <div className="contact_inputs grid">
                        <div className="contact_content">
                            <label for="" className="contact_label">Name</label>
                            <input type="text" className="contact_input"/>
                        </div>
  
                      <div className="contact_content">
                          <label for="" className="contact_label">Email</label>
                          <input type="email" className="contact_input"/>
                      </div>
                    </div>
                  <div className="contact_content">
                      <label for="" className="contact_label">Project</label>
                      <input type="text" className="contact_input"/>
                  </div>
                  <div className="contact_content">
                      <label for="" className="contact_label">Message</label>
                      <textarea name="" id="" cols="0" rows="7" className="contact_input"></textarea>
                  </div>
            {/* send message button */}
                  <div>
                      <a href="" className="button button--flex">
                          Send Message
                          <i class='bx bxs-paper-plane button_icon'></i>
                      </a>
                  </div>
                </form>
            </div>
        </section>
    )
}