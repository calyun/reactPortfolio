import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="col-md-8">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns">
                  <div className="center">
                      <img src={`${item.imgurl}`} className="item-img" alt={item.name}/>
                      <div className="center">
                        <div className="center">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          <p>Deployed
                          <a href={item.heroku}> here.</a></p>
                          <p>Repo
                          <a href={item.github}> here.</a></p>
                        </div>
                      </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}