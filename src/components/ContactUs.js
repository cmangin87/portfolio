import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row">
        <div className="twelve columns collapsed">
                  <br></br>
                  <h2>Address</h2>
                  <p className="address">
       						   <span>
                     {resumeData.address}<br></br>
                    </span>
                    {resumeData.address2}</p>
                    <br></br>
                  <h2>Telephone</h2>
                  <p className="phone">
                        <span>
                    {resumeData.phone}</span>
       					   </p>
                    <br></br>
                    <h2>E-Mail</h2>
                  <p className="email">
                        <span>{resumeData.email}</span>
       					   </p>
                  </div>
               </div>

  
        </section>

        
        );
  }
}