import React, { useState,useEffect, useRef } from 'react';
// import bg1 from "../../Assets/images/bg1.png"
import bg1 from "../../Assets/images/vv.mp4"

import bg2 from "../../Assets/images/circle.jpg"
import Footer from '../common/footer'
import Header from '../common/header'



const Counter = ({ title, value, suffix }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let interval;
      if (count < value) {
        interval = setInterval(() => {
          setCount(prevCount => prevCount + 1);
        }, 70); // You can adjust the duration as needed
      }
      return () => {
        clearInterval(interval);
      };
    }, [count, value]);
  
    return (
        <div className="counter ">
        <span className="neon uk-heading-xlarge uk-text-primary">{count}</span>
        {suffix && <span className="counter-suffix">{suffix}</span>}
        <div className="counter-title">{title}</div>
      </div>
    );
  };





const Home = () => {

    

  return (
<div className='bgnn uk-background-cover uk-background-fixed uk-background-center-center ' data-src = "https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80" uk-img = "loading : eager"  >


 <Header/>
 <div class="uk-position-relative  " style={{height:"704px" , marginBottom:"30vh"}} >
    
    <video class="uk-background-cover uk-position-absolute  " src={bg1} loop muted playsinline autoplay uk-video="autoplay: inview"></video>

    
    <div className="uk-position-cover  ">
     <div >   
    
    </div>
        <div className="uk-container uk-padding-large">
            <div className='h1bg' style={{ width: "427px" }}>
            <h1 className='hanim1' data-heading="i">Eifers</h1>
            </div>

            <div>
            <p className='shine' >Navigating Your Cyber World with Unparalleled Security Expertise</p>
            </div>

            {/* <div style={{ width: "444px" }}>
                <p className="greytext animated-text2" style={{ fontSize: "24px", fontWeight: "400" }}>Navigating Your Cyber World with Unparalleled Security Expertise.</p>
            </div> */}
        </div>
    </div>
</div>


 




<div className='sec2' style={{marginTop:"2vh" , backgroundColor:"transparent"  }}  >
    <div className='uk-flex uk-flex-center uk-flex-middle uk-text-center sec2heading ' >
        <div className='' >
            

</div>
</div>

<ul class="uk-subnav uk-subnav-pill uk-flex-center tabbuttons " uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
    <li className='tbbtn'><a>Threat Assesment </a> </li>
    <li className='tbbtn'><a>Pen Testing</a></li>
    <li className='tbbtn'  ><a > Risk Mitigation </a></li>
    </ul>    
<ul class="uk-switcher uk-margin">
<li><div className='uk-container uk-flex uk-padding ' >
        <div>
          <p className='heading'>Threat Assessment</p>

          <div className='text1 ' >
          <p>Our experienced team of security analysts will identify potential security threats to your company and provide you with a comprehensive report outlining areas of concern.</p>
          </div>
        </div>
        <div className='' >
          <img className='tabimg' src={bg2}  />
        </div>
      </div></li>


    <li><div className='uk-container uk-flex uk-padding ' >
        <div>
          <p className='heading'>Penetration Testing</p>

          <div className='text1 ' >
          <p>Identify vulnerabilities in your organization’s cybersecurity defenses from a hacker’s perspective. Our team of experts will simulate a cyber attack to identify potential risks and provide you with recommendations to address them.</p>
          </div>
        </div>
        <div className='' >
          <img className='tabimg' src={bg2}  />
        </div>
      </div></li>


   <li><div className='uk-container uk-flex uk-padding ' >
        <div>
          <p className='heading'>Risk Mitigation</p>

          <div className='text1 ' >
          <p>Our team of experts will work with your organization to address any vulnerabilities identified through our threat assessment and penetration testing services. We will provide you with a comprehensive plan to mitigate risks and protect your sensitive information.</p>
          </div>
        </div>
        <div className='' >
          <img className='tabimg' src={bg2}  />
        </div>
      </div></li>
</ul>
</div>

<section>
<div class="uk-section uk-section-large uk-background-secondary uk-light ">
	<div class="uk-container">
		<div class="uk-grid-large" data-uk-grid>
			<div class="uk-width-1-3@m">
				<h2 class="uk-heading-small uk-margin-large-bottom"></h2>
        <Counter  value={150} suffix="+" />
				<hr class="uk-margin-bottom uk-margin-medium-top tm-small-hr"/>
				<h3 class="uk-margin-remove-bottom uk-text-uppercase uk-h5 uk-margin-small-top">Happy Clients</h3>
			</div> 
			<div class="uk-width-expand@m uk-flex uk-flex-column">
				<h2 class="uk-margin-auto-top uk-margin-medium-bottom ">Get the very best of us by doing the best of you</h2>
				<div class="uk-child-width-1-3" data-uk-grid>
					<div>
          <Counter  value={6} suffix="+" />
						<hr class="uk-margin-bottom uk-margin-medium-top tm-small-hr"/>
						<h3 class="uk-text-uppercase uk-h5 uk-margin-small-top">Years Experience</h3>
					</div> 
					<div>
          <Counter  value={150} suffix="+" />
						<hr class="uk-margin-bottom uk-margin-medium-top tm-small-hr"/>
						<h3 class="uk-text-uppercase uk-h5 uk-margin-small-top">Project Done</h3>
					</div>
					<div>
          <Counter  value={25} suffix="+" />
						<hr class="uk-margin-bottom uk-margin-medium-top tm-small-hr"/>
						<h3 class="uk-text-uppercase uk-h5 uk-margin-small-top">Award Winners</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

</section>

<div class="hbg3  uk-padding uk-flex uk-flex-center uk-flex-column uk-flex-middle uk-text-center uk-light uk-height-large ">
            
            <div>
        <h1  uk-parallax="opacity: 0,1; y: -0,0; scale: 2,1; end: 50vh + 50%;">We’re ready to take on any Security question.</h1>          
        </div>
        <div>
            <button className='fbutton' >Get in Touch</button>
            </div>

    </div>









    <Footer/>





</div>
  )
}

export default Home
