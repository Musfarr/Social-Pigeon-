import React from 'react'
import bg1 from "../../Assets/images/bg1.png"
import bg2 from "../../Assets/images/greenbg.svg"
import bg3 from "../../Assets/images/wide1.png"
import bg4 from "../../Assets/images/green.svg"
import grp1 from "../../Assets/images/grp1.png"
import L1 from "../../Assets/images/pso.png"
import L2 from "../../Assets/images/L2.png"
import vifile from "../../Assets/images/rotating.webm"
import Footer from '../common/footer'
import Header from '../common/header'
import tabimg from "../../Assets/images/tabimg.png"
import cimg from "../../Assets/images/collaborate.svg"




const Home = () => {
  return (
<div  className='' >



<section  >

<div class="uk-height-large  uk-background-cover uk-light   " style={{height:"768px"}}  data-src={bg1}  uk-img="loading: eager">
    <Header/>
    
    <div className='uk-container uk-padding-large '>
    <div style={{width:"427px"}}>
    <h1 style={{color:"#02F195" , fontWeight:"700" , fontSize:"57px" ,fontFamily:"Lexend Deca" }} >  Welcome <br></br> to the world of Social Pigeons </h1>
    </div>
    <div style={{width:"444px"}} >
        <p className='wt' style={{fontSize:"24px" , fontWeight:"400"}} >Navigate your digital world with exceptional influencers and social media marketing.</p>
    </div>
    </div>


</div>
</section>





<section style={{height:"842px"}} >

    <div className='uk-flex uk-flex-center uk-flex-middle uk-text-center sec2heading  ' >
        <div className='' >
            <h1  className='bt' style={{fontWeight:"700" , }}> About social pigeons </h1>

            <div style={{width:"620px" }}>
            <h5 className='bt'  style={{fontWeight:"400" , fontSize:"22px"}} > A platform that helps influencers and brands stay digitally connected to smartly market the products and services. </h5>
            </div>

        </div>
        </div>
    <div className='video uk-container' >
      <video 
      src= {vifile}
      autoPlay
      loop
      muted>

      </video>

    </div> 


          
        



        
    
</section>


 
<div class="uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" style={{height:"766px"}}  data-src={bg2}  uk-img="loading: eager">


<div className='' style={{width:"444px"}} >
<p className='heading'  >Build digital presence, choose social pigeons</p> 
  <p className='bfont'>Our primary goal is to build a unique community of influencers that collaborates with brands and execute result-oriented campaigns.</p>
</div>



<div  >
  <img src={grp1}  />
</div>
</div>


<section style={{height:"893px"}} >

    <div className='uk-flex uk-flex-center uk-flex-middle uk-padding' >
      
    <h1 className='heading sec2heading'>Transforming the way to connect</h1>
    </div>


    <div><ul class="uk-subnav uk-subnav-pill uk-flex-center tabbuttons" uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
    <li><a className='tabbutton' > Item </a> </li>
    <li><a >Item</a></li>
    <li><a >Item</a></li>
    </ul>
    



<ul class="uk-switcher uk-margin">
<li><div className='uk-container uk-flex uk-padding ' >

        <div>
          <img src={cimg} />




          <p className='heading'>Collaborate</p>

          <div className='text1 bfont' >
          <p>With brands to influence creatively.</p>
          </div>
        </div>
        <div className='' >
          <img className='tabimg' src={tabimg}  />
        </div>
      </div></li>


    <li><div className='uk-container uk-flex uk-padding ' >
        <div>
        <img src={cimg} />

          <p className='heading'>Showup</p>

          <div className='text1 bfont' >
          <p>With brands to influence creatively.</p>
          </div>
        </div>
        <div className='' >
          <img className='tabimg' src={tabimg}  />
        </div>
      </div></li>


   <li><div className='uk-container uk-flex uk-padding ' >
        <div>
        <img src={cimg} />

          <p className='heading'>Earn</p>

          <div className='text1 bfont' >
          <p>With brands to influence creatively.</p>
          </div>
        </div>
        <div className='' >
          <img className='tabimg' src={tabimg}  />
        </div>
      </div></li>
</ul>
</div>




    
</section>


<section style={{height:"300px" , backgroundColor:"#F5F5F5" }} >

    <div className='uk-flex uk-flex-center uk-flex-middle uk-padding ' >
    <h1 className='heading' >Our clients</h1>
    </div>  

    <div className='uk-flex uk-flex-between uk-padding '>
      
      <img src={L1} />
      <img src={L2} />
      <img src={L1} />
      <img src={L2} />
      <img src={L1} />
      <img src={L2} />
      <img src={L1} />
      <img src={L2} />

      
      </div>  
</section>




<section>
<div class="uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" style={{height:"500px"}}  data-src={bg3}>
  
</div>
</section>


<section>
<div class=" uk-flex uk-text-center  uk-flex-center    " style={{height:"1022px" ,backgroundColor:"#FFFFFF" }}    >

  <div>

  <p className='heading'> Signup Here </p>
  <p className='bfont'>We help you get wings</p>

    
    <div className=''  style={{height:"567px" ,backgroundColor:""}} >

      <div className='uk-padding'  style={{height:"40px" ,backgroundColor:"black"}} >
      </div>



    <div className='uk-padding  uk-box-shadow-xlarge ' style={{height:"483px" , width:"904px" ,borderRadius:"20px" }} >

      <div className='uk-grid   '>

      <div class="">
        <label class="uk-form-label" for="form-stacked-text">Text</label>
        <div class="">
            <input class="uk-input formw  " id="form-stacked-text" type="text" placeholder="Some text..."/>
        </div>
    </div>

      <div class="">
        <label class="uk-form-label" for="form-stacked-text">Text</label>
        <div class="">
            <input class="uk-input  formw " id="form-stacked-text" type="text" placeholder="Some text..."/>
        </div>
    </div>
      <div class="">
        <label class="uk-form-label" for="form-stacked-text">Text</label>
        <div class="">
            <input class="uk-input  formw " id="form-stacked-text" type="text" placeholder="Some text..."/>
        </div>
    </div>
      <div class="">
        <label class="uk-form-label" for="form-stacked-text">Text</label>
        <div class="">
            <input class="uk-input  formw " id="form-stacked-text" type="text" placeholder="Some text..."/>
        </div>

    </div>
      <div class="">
        <label class="uk-form-label  " for="form-stacked-text">Text</label>
        <div class="">
            <input class="uk-input  formw " id="form-stacked-text" type="text" placeholder="Some text..."/>
        </div>
    </div>



      <div class="uk-padding">
        <label class="uk-form-label" for="form-stacked-text">Text</label>
        <div class="">
            <input class="uk-input  formw " id="form-stacked-text" type="text" placeholder="Some text..."/>
        </div>
    </div>


  

      </div>

    </div>
    </div>


  </div>
</div>
</section>



<section>
<div class="uk-flex uk-flex-center uk-padding uk-background-cover uk-light " style={{height:"300px"}}  data-src={bg4}  uk-img="loading: eager">
  <p className='heading' >Subscribe to Newsletter</p>
</div>
</section>

<Footer/>


    </div>
  )
}

export default Home
