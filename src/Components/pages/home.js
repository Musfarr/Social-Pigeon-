import React from 'react'
import bg1 from "../../Assets/images/bg1.png"
import bg2 from "../../Assets/images/greenbg.svg"
import bg3 from "../../Assets/images/wide.png"
import bg4 from "../../Assets/images/green.svg"
import Footer from '../common/footer'
import Header from '../common/header'

const Home = () => {
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
            <h1  className='bt' style={{fontWeight:"700" , }}> About social pigeons </h1>

            <div style={{width:"620px" }}>
            <h5 className='bt'  style={{fontWeight:"400"}} > A platform that helps influencers and brands stay digitally connected to smartly market the products and services. </h5>
            
        </div>
            
            
            
            
             </div>

        

    </div>
    
</section>


 
<div class="uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" style={{height:"766px"}}  data-src={bg2}  uk-img="loading: eager">
  <h1>Background Image</h1>
</div>


<section style={{height:"893px"}} >

    <div className='uk-flex uk-flex-center uk-flex-middle ' >
    <h1>Background Image</h1>
    </div>
    
</section>


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

export default Home
