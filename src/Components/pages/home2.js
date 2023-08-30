import React from 'react'
import bg1 from "../../Assets/images/companies/bg1.png"
import bg2 from "../../Assets/images/creators/greenlg.svg"
import bg3 from "../../Assets/images/wide.png"

import tabimg from "../../Assets/images/tabimg.png"
import Footer from '../common/footer'
import Header from '../common/header'
import c1 from "../../Assets/images/companies/c1.png"
import c2 from "../../Assets/images/companies/c2.png"


const Home2 = () => {
  return (
<div  >



<section   >

<div class="uk-height-large  uk-background-cover uk-light  " style={{height:"768px"}}  data-src={bg1}  uk-img="loading: eager">
    <Header/>
    
    <div className='uk-padding-large uk-container '>
    <div style={{width:"900px"}}>
    <h1 className='heading' style={{color:"#02F195" , fontWeight:"700" , fontSize:"57px" ,fontFamily:"Lexend Deca" }} >  Influencer Marketing   </h1>
    </div>
    <div style={{width:"600px" }} >
        <p className='wt ' style={{fontSize:"57px" , fontWeight:"700" , lineHeight:"68.5px" }} >Making your brand go to the next level</p>
        <p className='wt' style={{fontSize:"24px" , fontWeight:"700"}} >Social Pigeons helps build a lasting relationship between content creators and clients to bring benefits on both sides.</p>
    </div>
    </div>


</div>
</section>





<section style={{height:"842px"}} >

    <div className='uk-flex uk-flex-center uk-flex-middle uk-text-center sec2heading ' >
        <div className='' >
            <h1  className='bt' style={{fontWeight:"700" , fontSize:"46px" }}> Leave The Influence On Creators </h1>

            <div style={{width:"820px" }}>
            <h5 className='bt'  style={{fontWeight:"400" ,fontSize:"22px"}} > From food and beauty to sports and travel, our exclusive network of content creators is covering almost all the niches to stand you out from the market. </h5>
            
        </div>
</div>
</div>

<ul class="uk-subnav uk-subnav-pill uk-flex-center tabbuttons " uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
    <li className='tbbtn'><a>Food </a> </li>
    <li className='tbbtn'><a>Beauty</a></li>
    <li className='tbbtn'  ><a > Lifestyle </a></li>
    </ul>
    



<ul class="uk-switcher uk-margin">
<li><div className='uk-container uk-flex uk-padding ' >
        <div>
          <p className='heading'>Market Your<br></br>  Brand</p>

          <div className='text1 bfont' >
          <p>With Social Pigeons, a network of digital wings, you can persuade, engage, and encourage customers to market the brand amazingly. Here, you can digitally get connected with the creators that help your business grow in a whole new direction.</p>
          </div>
        </div>
        <div className='' >
          <img className='tabimg' src={tabimg}  />
        </div>
      </div></li>


    <li><div className='uk-container uk-flex uk-padding ' >
        <div>
          <p className='heading'>Market Your<br></br>  Brand</p>

          <div className='text1 bfont' >
          <p>With Social Pigeons, a network of digital wings, you can persuade, engage, and encourage customers to market the brand amazingly. Here, you can digitally get connected with the creators that help your business grow in a whole new direction.</p>
          </div>
        </div>
        <div className='' >
          <img className='tabimg' src={tabimg}  />
        </div>
      </div></li>


   <li><div className='uk-container uk-flex uk-padding ' >
        <div>
          <p className='heading'>Market Your<br></br>  Brand</p>

          <div className='text1 bfont' >
          <p>With Social Pigeons, a network of digital wings, you can persuade, engage, and encourage customers to market the brand amazingly. Here, you can digitally get connected with the creators that help your business grow in a whole new direction.</p>
          </div>
        </div>
        <div className='' >
          <img className='tabimg' src={tabimg}  />
        </div>
      </div></li>
</ul>









</section>


 
<div class="     uk-flex-center  uk-background-cover  uk-padding  " style={{height:"1190px"}}  data-src={bg2}  uk-img="loading: eager">

    <div>
  <p className=' uk-container   heading' >Perks Offered to Creators</p>
  </div>

  <div className=' uk-container uk-padding    ' > 
  
  
    <div className='uk-grid' uk-grid="" >
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


<section style={{height:"893px"}} >

<div class=" uk-flex uk-flex-middle  uk-background-cover uk-light" style={{height:"766px"}}  data-src={bg3}  uk-img="loading: eager">

<div className=' uk-container'>
  <h1 className='wheading whpd  '> CHANGE YOUR <br />MARKETING GAME </h1>
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

<ul class="uk-subnav   uk-flex-center formtabbutton" uk-switcher="connect:.formtab">

<li className='underline-input2' ><a style={{fontSize:"24px"  }} > 1.Personal Info </a> </li>
<li className='underline-input2' ><a style={{fontSize:"24px"}} > 2.Social Info </a></li>
</ul>

  </div>



<div className='uk-padding  uk-box-shadow-xlarge ' style={{height:"483px" , width:"904px" ,borderRadius:"20px" }} >

<ul class="uk-switcher uk-margin formtab">
<li> <div className='uk-grid   '>

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




</div> </li>

<li> <div className='uk-grid   '>

<div class="">
  <label class="uk-align-left flabels " for="form-stacked-text">Name</label>
  <div class="">
      <input class="uk-input formw  " id="form-stacked-text" type="text" placeholder="First Name "/>
  </div>
</div>

<div class="">
  
  <label class="uk-align-left flabels " for="form-stacked-text"> cddcName  </label>
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




</div> </li>
</ul>
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
