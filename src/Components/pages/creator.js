import React from 'react'
import bg1 from "../../Assets/images/creators/bg1.png"
import fb1 from "../../Assets/images/creators/fb.svg"
import fb2 from "../../Assets/images/creators/fb1.svg"
import fb3 from "../../Assets/images/creators/fb2.svg"
import fb4 from "../../Assets/images/creators/fb3.svg"
import fb5 from "../../Assets/images/creators/fb4.svg"
import fb6 from "../../Assets/images/creators/fb5.svg"
import bg2 from "../../Assets/images/greenbg.svg"
import bg3 from "../../Assets/images/creators/bg3.png"
import bg4 from "../../Assets/images/green.svg"
import c1 from "../../Assets/images/companies/c1.png"
import c2 from "../../Assets/images/companies/c2.png"
import Footer from '../common/footer'
import Header from '../common/header'






const Creator = () => {
  return (
<div  >



<section   >

<div class="uk-height-large  uk-background-cover   " style={{height:"768px"}}  data-src={bg1}  uk-img="loading: eager">
    <Header/>
    
    <div style={{paddingTop:"119px"}} className='uk-container   '>
    <div style={{width:"427px"}}>
    <h1 style={{color:"#02F195" , fontWeight:"700" , fontSize:"57px" ,fontFamily:"Lexend Deca" }} >  Join Us Now </h1>
    </div>

    <h1  className='wheading2' > Transform the <br />Creative Era </h1>


    <div style={{width:"444px"}} >
        <p className='wt' style={{fontSize:"24px" , fontWeight:"400"}} >Join Social Pigeons and get digitally connected to showcase your influencing skills. As an influencer, this would be a great chance for you to shine and give collaboration opportunities a boost.</p>
    </div>
    </div>


</div>
</section>





<section style={{height:"842px"}} >

    <div className='uk-flex uk-flex-center uk-flex-middle uk-text-center  ' >
        <div className='uk-padding-large' >
            <h1  className='sec2heading heading' > Dont Wait for Inspiration, Be One</h1>

            <div style={{width:"804px"}} >
            <h5 className='bfont' > Calling out Pakistani creators from all social media platforms. If you've got a mind fizzed with creativity and have a good number of followers, then join Social Pigeons. Let your talent earn you both money and fame. </h5>
            
        </div>


        <div className='  uk-grid-large     '  style={{width : "804px" , marginLeft:"10px" }} >

        <img className='sociallogo' src={fb1}  />           
        <img className='sociallogo' src={fb2}  />           
        <img className='sociallogo' src={fb3}  />           
        <img className='sociallogo' src={fb4}  />           
        <img className='sociallogo' src={fb5}  />           
        <img className='sociallogo' src={fb6}  />           



        </div>
            
            
            
            
             </div>

        

    </div>    
</section>


 
<div class="     uk-flex-center  uk-background-cover  uk-padding  " style={{height:"1190px"}}  data-src={bg2}  uk-img="loading: eager">

    <div>
  <p className=' uk-container   heading' >Perks Offered to Creators</p>
  </div>

  <div className=' uk-container uk-padding    ' > 
    <div className='uk-grid' uk-grid="">
  <div className='card ' >
        <div class="crdimg  uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img className='crdimg'  src={c1} width="352" height="200" />
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
    </div>

  <div className='card'>
        <div class="crdimg uk-card uk-card-default">
            <div class=" uk-card-media-top">
                <img className='' src={c2} width="352" height="200" />
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
    </div>
  <div className='card'>
        <div class="crdimg  uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src={c1} width="352" height="200" />
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
    </div>

  <div className='card'>
        <div class= " crdimg uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src={c2} width="352" height="200" />
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
    </div>
  <div className='card'>
        <div class= " crdimg uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src={c2} width="352" height="200" />
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
    </div>
    </div>


  </div>
  
    
</div>


<section style={{height:"505px"}} >
<div class="    " style={{height:"505px"}}  data-src={bg3}  uk-img="loading: eager">


    <div className='uk-container uk-padding'>
  <div>
  <h1 className='wheading2   '> Say hello to <br />your wings </h1>
  </div>
    <div>
  <p className='wt text2  ' style={{fontSize:"24px" , fontWeight:"400"}} >Join Social Pigeons and get digitally connected to showcase your influencing skills. As an influencer, this would be a great chance for you to shine and give collaboration opportunities a boost.</p>
  </div>
  </div>

</div>    
</section>



<section>
<div class=" uk-flex uk-text-center  uk-flex-center    " style={{height:"1022px" ,backgroundColor:"#FFFFFF" }}    >

  <div>

  <p className='heading sec2heading '> Signup Here </p>
  <p className='bfont'>We help you get wings</p>

    
    <div className=''  style={{height:"567px" ,backgroundColor:""}} >

      <div className='uk-padding '  style={{height:"40px" }} >

    <ul class="uk-subnav   uk-flex-center formtabbutton" uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">

    <li className='underline-input2' ><a   style={{fontSize:"24px"  }} > 1.Personal Info </a> </li>
    <li className='underline-input2' ><a style={{fontSize:"24px"}} > 2.Social Info </a></li>
    </ul>

      </div>



<div className='uk-padding  uk-box-shadow-xlarge ' style={{height:"483px" , width:"904px" ,borderRadius:"20px" }} >


    <ul class="uk-switcher uk-margin">
<li></li>

<li></li>
</ul>



      <div className='uk-grid   '>

      <div class="">
        <label class="uk-align-left flabels " for="form-stacked-text">Name</label>
        <div class="">
            <input class="uk-input formw  " id="form-stacked-text" type="text" placeholder="First Name "/>
        </div>
    </div>

      <div class="">
        
        <label class="uk-align-left flabels " for="form-stacked-text"> Name  </label>
        <div class="">
            <input class="uk-input  formw " id="form-stacked-text" type="text" placeholder="Last Name"/>
        </div>
    </div>
      <div class="">
        <label class="uk-align-left flabels " for="form-stacked-text">Email</label>
        <div class="">
            <input class="uk-input  formw " id="form-stacked-text" type="text" placeholder="Some text..."/>
        </div>
    </div>
      <div class="">
        <label class="uk-align-left flabels " for="form-stacked-text">Phone number</label>
        <div class="">
            <input class="uk-input  formw " id="form-stacked-text" type="text" placeholder="Some text..."/>
        </div>

    </div>
      <div class="">
      <label class="uk-align-left flabels " for="form-stacked-text">Address</label>
        <div class="">
            <input class="uk-input  formw " id="form-stacked-text" type="text" placeholder="Some text..."/>
        </div>
    </div>



      <div class="">
        <label class="uk-align-left flabels " for="form-stacked-text">Gender</label>
        <div class="">
            <input class="uk-input  formw " id="form-stacked-text" type="text" placeholder="Some text..."/>
        </div>
    </div>

    <div className='uk-align-end' >
        
    <button style={{backgroundColor:"#02EF93" , borderRadius:"22px" }} className=" fbutton ">Next</button>

    </div>


  

      </div>

    </div>
    </div>


  </div>
</div>
</section>


<Footer/>


    </div>
  )
}

export default Creator
