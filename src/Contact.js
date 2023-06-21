import React, { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add your email template ID and service ID
    const templateId = 'template_69bc9g5';
    const serviceId = 'service_h3wuafz';

    // Add your user ID from emailjs.com dashboard
    const userId = 'fDhCZtzaM49ikdHL5';

    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
        console.log('Email successfully sent!');
        setIsSent(true); // Set the submission status to true
      }, (error) => {
        console.error('Error sending email:', error);
      });

    // Reset the form after submission
    e.target.reset();
  };

  return (
    // <!-- contact me section-->
    <section className="contact section" id="contact">
      <h2 className="section_title">Contact Me</h2>
      <span className="section_subtitle">Let's Talk</span>

      <div className="contact_container container grid">
        <div>
          <div className="contact_information">
            <i className='bx bx-phone contact_icon'></i>

            <div>
              <h3 className="contact_title">Call Me</h3>
              <span className="contact_subtitle">+234 9022725714</span>
            </div>
          </div>

          <div className="contact_information">
            <i className='bx bx-envelope contact_icon'></i>

            <div>
              <h3 className="contact_title">Email</h3>
              <span className="contact_subtitle">Praisejah.c.uzoma@gmail.com</span>
            </div>
          </div>

          <div className="contact_information">
            <i className='bx bxs-edit-location contact_icon'></i>

            <div>
              <h3 className="contact_title">Location</h3>
              <span className="contact_subtitle">Abuja - Amac Estate Lugbe</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact_form grid">
          <div className="contact_inputs grid">
            <div className="contact_content">
              <label htmlFor="" className="contact_label">Name</label>
              <input type="text" className="contact_input" name="name" required />
            </div>

            <div className="contact_content">
              <label htmlFor="" className="contact_label">Email</label>
              <input type="email" className="contact_input" name="email" required />
            </div>
          </div>
          <div className="contact_content">
            <label htmlFor="" className="contact_label">Message</label>
            <textarea name="message" cols="0" rows="7" className="contact_input" required></textarea>
          </div>
          {/* send message button */}
          <div>
            {isSent ? (
              <p>Message Sent!</p>
            ) : (
              <button type="submit" className="button button--flex contact_button">
                Send Message
                <i className='bx bxs-paper-plane button_icon'></i>
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
