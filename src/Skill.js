import "./Skill-script.js"
export default function Skill() {
    return (
        // Skills Section
        <section class="skills section" id="skills">
            <h2 class="section_title">Skills</h2>
            <span class="section_subtitle">My technical level</span>
  
            <div class="skills_container container grid">
                <div>
                    {/* skills1 */}
                    <div class="skills_content skills_open">
                       <div class="skills_header">
                          <i class='bx bx-code-curly skills_icon'></i>
  
                          <div>
                              <h1 class="skills_title">Frontend developer</h1>
                              <span class="skills_subtitle">More than 1 years</span>
                          </div>
  
                          <i class='bx bx-chevron-down  skills_arrow' ></i>
                       </div>
  
                       <div class="skills_list grid">
                           <div class="skills_data">
                               <div class="skills_titles">
                                   <h3 class="skills_name">HTML</h3>
                                   <span class="skills_number">99%</span>
                               </div>
                               <div class="skills_bar">
                                   <span class="skills_percentage skills_html"></span>
                               </div>
                           </div>
                           <div class="skills_data">
                              <div class="skills_titles">
                                  <h3 class="skills_name">CSS</h3>
                                  <span class="skills_number">85%</span>
                              </div>
                              <div class="skills_bar">
                                  <span class="skills_percentage skills_css"></span>
                              </div>
                          </div>
  
                          <div class="skills_data">
                              <div class="skills_titles">
                                  <h3 class="skills_name">JavaScript</h3>
                                  <span class="skills_number">70%</span>
                              </div>
                              <div class="skills_bar">
                                  <span class="skills_percentage skills_js"></span>
                              </div>
                          </div>
                          <div class="skills_data">
                              <div class="skills_titles">
                                  <h3 class="skills_name">React</h3>
                                  <span class="skills_number">65%</span>
                              </div>
                              <div class="skills_bar">
                                  <span class="skills_percentage skills_react"></span>
                              </div>
                          </div>
                       </div>
                    </div>
                </div>
  
                <div>
                    {/* skills 2  */}
                    <div class="skills_content skills_close">
                      <div class="skills_header">
                          <i class='bx bx-book-content skills_icon'></i>
  
                         <div>
                             <h1 class="skills_titles">Designer</h1>
                             <span class="skills_subtitle">1 years</span>
                         </div>
  
                         <i class='bx bx-chevron-down  skills_arrow' ></i>
                      </div>
  
                      <div class="skills_list grid">
                          <div class="skills_data">
                              <div class="skills_titles">
                                  <h3 class="skills_name">Figma</h3>
                                  <span class="skills_number">10%</span>
                              </div>
                              <div class="skills_bar">
                                  <span class="skills_percentage skills_figma"></span>
                              </div>
                          </div>
  
                         <div class="skills_data">
                             <div class="skills_titles">
                                 <h3 class="skills_name">Photoshop</h3>
                                 <span class="skills_number">5%</span>
                             </div>
                             <div class="skills_bar">
                                 <span class="skills_percentage skills_photoshop"></span>
                             </div>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
        </section>
    );
}
