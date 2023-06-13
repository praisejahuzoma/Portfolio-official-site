import React, { useEffect } from 'react';

const Qaulifications = () => {
// Qaulification javascript
  useEffect(() => {
    const tabs = document.querySelectorAll('[data-target]');
    const tabsContents = document.querySelectorAll('[data-content]');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabsContents.forEach((tabsContent) => {
          tabsContent.classList.remove('qualification_active');
        });
        target.classList.add('qualification_active');

        tabs.forEach((tab) => {
          tab.classList.remove('qualification_active');
        });
        tab.classList.add('qualification_active');
      });
    });
  }, []);

  return (
    // qualification
    <section className="qualification section" id="qualification">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className="qualification_button button--flex qualification_active" data-target="#education">
            <i className="bx bxs-graduation qualification_icon"></i>
            Education
          </div>

          <div className="qualification_button button--flex" data-target="#work">
            <i className="bx bx-briefcase qualification_icon"></i>
            Work
          </div>
        </div>

        <div className="qualification_section">
          {/* qualification contents 1 */}
          <div className="qualification_content qualification_active" data-content id="education">
            {/* qualification 1 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Html / Css</h3>
                <span className="qualification_subtitle">W3-School / Freecode Camp</span>
                <div className="qualification_calender">
                  <i className="bx bx-calendar"></i>
                  2018 - 2019
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* qualification 2 */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Javasript</h3>
                <span className="qualification_subtitle">Javascript-info / Udacity</span>
                <div className="qualification_calender">
                  <i className="bx bx-calendar"></i>
                  2020-2022
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Figma</h3>
                <span className="qualification_subtitle">Ingressive For Good</span>
                <div className="qualification_calender">
                  <i className="bx bx-calendar"></i>
                  2021
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* qualification 3 */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title"> React</h3>
                <span className="qualification_subtitle">Scrimba / Udacity</span>
                <div className="qualification_calender">
                  <i className="bx bx-calendar"></i>
                  2021-2022
                </div>
              </div>
            </div>
          </div>

          {/* qualification content 2 */}
          <div className="qualification_content" data-content id="work">
            {/* qualification 1 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Frontend Developer</h3>
                <span className="qualification_subtitle">Html, Css, Javascript, React</span>
                <div className="qualification_calender">
                  <i className="bx bx-calendar"></i>
                  2018 - 2021
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* qualification 2 */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Ui Designer</h3>
                <span className="qualification_subtitle">Figma</span>
                <div className="qualification_calender">
                  <i className="bx bx-calendar"></i>
                  2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Qaulifications;