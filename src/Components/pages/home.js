import React from 'react'
import bg1 from "../../Assets/images/bg1.png"
import bg2 from "../../Assets/images/greenbg.svg"
import bg3 from "../../Assets/images/wide.png"
import bg4 from "../../Assets/images/green.svg"
import Footer from '../common/footer'
import Header from '../common/header'
const Home = () => {
  return (
<div>



<section   >

<div class="uk-height-large  uk-background-cover uk-light" style={{height:"768px"}}  data-src={bg1}  uk-img="loading: eager">
    <Header/>
  <h1>Background Image</h1>
</div>
</section>


<section style={{height:"842px"}} >

    <div className='uk-flex uk-flex-center uk-flex-middle ' >
    <h1>Background Image</h1>
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
<div class="uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" style={{height:"500px"}}  data-src={bg3}  uk-img="loading: eager">
  <h1>Background Image</h1>
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
