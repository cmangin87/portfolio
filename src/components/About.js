import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="four columns">
               <img className="profile-pic"  src="images/chrisrutgers.JPG" alt="" />
            </div>

            <div className="seven columns main-col">
               <h2>About Me</h2>
               <p>
               {resumeData.aboutme}
               </p>
               <p>
               {resumeData.moreaboutme}
               </p>

            </div>

            {/* <div className="four columns">
               <img className="project-pic"  src="images/projectteam.jpg" alt="" />
            </div> */}

         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#resume" align="center"><i className="icon-down-circle"></i></a>
         </p>

      </section>
    );
  }
}