import React, { useEffect } from 'react';

export default function Skill() {
// Skills javascript
  useEffect(() => {
    const skillsContent = document.getElementsByClassName('skills_content');
    const skillsHeader = document.querySelectorAll('.skills_header');

    function toggleSkills() {
      let itemClass = this.parentNode.className;

      for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close';
      }
      if (itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open';
      }
    }

    skillsHeader.forEach((el) => {
      el.addEventListener('click', toggleSkills);
    });

    // Cleanup by removing the event listeners when the component unmounts
    return () => {
      skillsHeader.forEach((el) => {
        el.removeEventListener('click', toggleSkills);
      });
    };
  }, []);

  return (
    // Skills Section JSX
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical level</span>

      <div className="skills_container container grid">
        <div>
          {/* skills1 */}
          <div className="skills_content skills_open">
            <div className="skills_header">
              <i className="bx bx-code-curly skills_icon"></i>

              <div>
                <h1 className="skills_title">Frontend developer</h1>
                <span className="skills_subtitle"> 3 years</span>
              </div>

              <i className="bx bx-chevron-down  skills_arrow"></i>
            </div>

            <div className="skills_list grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">HTML</h3>
                  <span className="skills_number">99%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_html"></span>
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">CSS</h3>
                  <span className="skills_number">85%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_css"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">JavaScript</h3>
                  <span className="skills_number">70%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_js"></span>
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">React</h3>
                  <span className="skills_number">65%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_react"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* skills 2  */}
          <div className="skills_content skills_close">
            <div className="skills_header">
              <i className="bx bx-book-content skills_icon"></i>

              <div>
                <h1 className="skills_title">Designer</h1>
                <span className="skills_subtitle">2 years</span>
              </div>

              <i className="bx bx-chevron-down  skills_arrow"></i>
            </div>

            <div className="skills_list grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Figma</h3>
                  <span className="skills_number">50%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_figma"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Photoshop</h3>
                  <span className="skills_number">35%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_photoshop"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
