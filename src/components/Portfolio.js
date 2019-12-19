import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Examples of My Work</h1>
          <h3>Games and Applications</h3>
          <br></br>
          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={item.url}>
                      {/* <img src={`${item.imgurl}`} className="item-img"/> */}
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <p>{item.description}</p>
                </div>
              )
            })
          }
         

    
             </div>
          </div>
      </div>
      <p className="scrolldown">
            <a className="smoothscroll" href="#contact" align="center"><i className="icon-down-circle"></i></a>
         </p>
  </section>
        );
  }
}