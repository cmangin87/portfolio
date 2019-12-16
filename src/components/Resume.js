import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">
         <div className="five columns main-col">
            <h1><span>Education</span></h1>
              {resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}<br></br></h3>
                          <em className="date">{item.Achievements}
                          {item.MonthOfPassing}{item.YearOfPassing}</em><br></br>
                          <p className="info">
                          {item.specialization}<br></br>{item.specialization2}<br></br><br></br>
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>

            <h1><span>Past Work Experience</span></h1>
            <div className="seven columns main-col">
              {resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve rows">
                          <h3>{item.CompanyName}<span>&bull;</span><em className="date">{item.MonthOfLeaving}{item.YearOfLeaving}</em></h3>
                          <p className="info"></p>
                          <h3>{item.CompanyName2}<span>&bull;</span><em className="date">{item.MonthOfLeaving}{item.YearOfLeaving}</em></h3>
                          <p className="info"></p>
                          <h3>{item.CompanyName3}<span>&bull;</span><em className="date">{item.MonthOfLeaving}{item.YearOfLeaving}</em></h3>
                          <p className="info"></p>
                          </div>
                            <ul>
                            <span>&bull;</span>{item.specialization1}<br></br>
                            <span>&bull;</span>{item.specialization2}<br></br>
                            <span>&bull;</span>{item.specialization3}<br></br>
                            <span>&bull;</span>{item.specialization4}<br></br>
                            <span>&bull;</span>{item.specialization5}<br></br>
                            <span>&bull;</span>{item.specialization6}<br></br>
                            {/* <span>&bull;</span>{item.specialization7}<br></br>
                            <span>&bull;</span>{item.specialization8} */}
                          </ul>
                          <p>
                  {item.Achievements}
                          </p>
                       </div>

                  )
                })
              }
              </div>
              </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#portfolio" align="center"><i className="icon-down-circle"></i></a>
         </p>

      </section>
    );
  }
}