import React from 'react'
import bg1 from "../../Assets/images/companies/bg1.png"
import bg2 from "../../Assets/images/greenbg.svg"
import bg3 from "../../Assets/images/wide.png"
import bg4 from "../../Assets/images/green.svg"
import Footer from '../common/footer'
import Header from '../common/header'

const Home2 = () => {
  return (
<div  >



<section   >

<div class="uk-height-large  uk-background-cover uk-light uk-padding " style={{height:"768px"}}  data-src={bg1}  uk-img="loading: eager">
    <Header/>
    
    <div className='uk-padding-large '>
    <div style={{width:"900px"}}>
    <h1 style={{color:"#02F195" , fontWeight:"700" , fontSize:"57px" ,fontFamily:"Lexend Deca" }} >  Influencer Marketing   </h1>
    </div>
    <div style={{width:"600px" }} >
        <p className='wt' style={{fontSize:"57px" , fontWeight:"700" }} >Making your brand go to the next level</p>
        <p className='wt' style={{fontSize:"24px" , fontWeight:"700"}} >Social Pigeons helps build a lasting relationship between content creators and clients to bring benefits on both sides.</p>
    </div>
    </div>


</div>
</section>





<section style={{height:"842px"}} >

    <div className='uk-flex uk-flex-center uk-flex-middle uk-text-center  ' >
        <div className='uk-padding-large' >
            <h1  className='bt' style={{fontWeight:"700" , fontSize:"46px" }}> Leave The Influence On Creators </h1>

            <div style={{width:"820px" }}>
            <h5 className='bt'  style={{fontWeight:"400" ,fontSize:"22px"}} > From food and beauty to sports and travel, our exclusive network of content creators is covering almost all the niches to stand you out from the market. </h5>
            
        </div>
            
            
            
            
             </div>

        

    </div>    
</section>


 
<div class="uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" style={{height:"766px"}}  data-src={bg2}  uk-img="loading: eager">
  <h1>Background Image</h1>
</div>


<section style={{height:"893px"}} >

<div class="uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" style={{height:"766px"}}  data-src={bg3}  uk-img="loading: eager">
  <h1>Background Image</h1>
</div>
    
</section>


<section>
<div class=" uk-flex uk-text-center  uk-flex-center    " style={{height:"1022px" ,backgroundColor:"#FFFFFF" }}    >

  <div>

  <h1> Signup Here </h1>
  <p>We help you get wings</p>

    
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


<Footer/>


    </div>
  )
}

export default Home2
