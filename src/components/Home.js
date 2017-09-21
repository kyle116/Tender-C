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
              <iframe width="420" height="315" src="https://www.youtube.com/embed/E58qLXBfLrs?autoplay=1"></iframe>
					    <a href="#service" className="btn btn-skin btn-scroll">What we do</a>
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
    					<h2 className="h-bold">Get in touch with us</h2>
    					<div className="divider-header"></div>
  					</div>
					</div>
				</div>
			</div>
		</div>

		<div className="container">
			<div className="row marginbot-80">
				<div className="col-md-8 col-md-offset-2">
					<form id="contact-form">
  					<div className="row marginbot-20">
  						<div className="col-md-6 xs-marginbot-20">
  							<input type="text" className="form-control input-lg" id="name" placeholder="Enter name" required="required" />
  						</div>
  						<div className="col-md-6">
  							<input type="email" className="form-control input-lg" id="email" placeholder="Enter email" required="required" />
  						</div>
  					</div>
  					<div className="row">
  						<div className="col-md-12">
  							<div className="form-group">
  								<input type="text" className="form-control input-lg" id="subject" placeholder="Subject" required="required" />
  							</div>
  							<div className="form-group">
  								<textarea name="message" id="message" className="form-control" rows="4" cols="25" required="required"
  									placeholder="Message"></textarea>
  							</div>
  							<button type="submit" className="btn btn-skin btn-lg btn-block" id="btnContactUs">
  								Send Message</button>
  						</div>
  					</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</div>
  )
}


export default Home
