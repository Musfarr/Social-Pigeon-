import React from 'react'
import bg1 from "../../Assets/images/creators/bg1.png"
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

<div class="uk-height-large  uk-background-cover uk-light uk-padding " style={{height:"768px"}}  data-src={bg1}  uk-img="loading: eager">
    <Header/>
    
    <div className='uk-padding-large '>
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

    <div className='uk-flex uk-flex-center uk-flex-middle uk-text-center  ' >
        <div className='uk-padding-large' >
            <h1  className='bt' style={{fontWeight:"700" , }}> Leave The Influence On Creators</h1>

            <div style={{width:"620px" }}>
            <h5 className='bt'  style={{fontWeight:"400"}} > A platform that helps influencers and brands stay digitally connected to smartly market the products and services. </h5>
            
        </div>
            
            
            
            
             </div>

        

    </div>    
</section>


 
<div class="  uk-flex uk-flex-center  uk-background-cover " style={{height:"766px"}}  data-src={bg2}  uk-img="loading: eager">
  <h1>Background Image</h1>

  <div>

  <div className='card' >
        <div class="uk-card uk-card-default">
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
        <div class="uk-card uk-card-default">
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
        <div class="uk-card uk-card-default">
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
        <div class="uk-card uk-card-default">
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


{/* <section style={{height:"893px"}} >

<div class="uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" style={{height:"766px"}}  data-src={bg3}  uk-img="loading: eager">
  <h1>Background Image</h1>
</div>
    
</section> */}


<section style={{height:"300px" , backgroundColor:"#F5F5F5" }} >

    <div className='uk-flex uk-flex-center uk-flex-middle ' >
    <h1>Background Image</h1>
    </div>    
</section>




<section>
<div class="uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" style={{height:"500px"}}  data-src={bg3}>
  <h1></h1>
</div>
</section>


<section>
<div class="uk-flex uk-flex-center uk-flex-middle  " style={{height:"1022px" ,backgroundColor:"#FFFFFF" }}    >
  <h1> Image</h1>
</div>
</section>


<section>
<div class="uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" style={{height:"300px"}}  data-src={bg4}  uk-img="loading: eager">
  <h1>Background Image</h1>
</div>
</section>

<Footer/>


    </div>
  )
}

export default Creator
