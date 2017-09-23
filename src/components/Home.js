import React from 'react';
import {NavLink} from 'react-router-dom';

const Home = (props) => {
  return (
  <div>
    <section className="hero" id="intro">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-right navicon">
            <a id="nav-toggle" className="nav_slide_button" href="#"><span></span></a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center inner">
            <div className="animatedParent">
              <h1 className="animated fadeInDown go">TENDER</h1>
              <p className="animated fadeInUp go">Get hooked up with great food!</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center">
            <a href="#about" className="learn-more-btn btn-scroll">Learn more</a>
          </div>
        </div>
      </div>
    </section>


    <section id="about" className="home-section color-dark bg-white">
  		<div className="container marginbot-50">
  			<div className="row">
  				<div className="col-lg-8 col-lg-offset-2">
  					<div>
    					<div className="section-heading text-center">
    					  <h2 className="h-bold">How It Works</h2>
    					  <div className="divider-header"></div>
    					</div>
  					</div>
  				</div>
  			</div>
  		</div>
      <div className="container">
        <div className="row">
		      <div className="col-lg-8 col-lg-offset-2 animatedParent">
				    <div className="text-center">
	            <p>Enter your location and we will show you food from your area</p>
					    <p>Select yes on it and you will see the match information</p>
              <div className="row">
                <div className="col-md-6 col-md-offset-3 text-center">
                  <a href={props.demo ? "/demo" : "/signin"} className="learn-more-btn btn-scroll">Try It Out</a>
                </div>
              </div>
				    </div>
          </div>
		    </div>
      </div>
	  </section>


    <section id="contact" className="home-section nopadd-bot color-dark bg-gray text-center">
		<div className="container marginbot-50">
			<div className="row">
				<div className="col-lg-8 col-lg-offset-2">
					<div>
  					<div className="section-heading text-center">
    					<h2 className="h-bold">Contact Us</h2>
    					<div className="divider-header"></div>
  					</div>
					</div>
				</div>
			</div>
		</div>

		<div>
      <p>Email: tender@tender.com</p>
      <p>Phone: (123)456-7890</p>
		</div>
	</section>
</div>
  )
}


export default Home
