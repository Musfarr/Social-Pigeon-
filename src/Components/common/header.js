import React from 'react'
import logo from "../../Assets/images/logo1.svg"



const Header = () => {
  return (
    <div>

<nav class="uk-navbar-container uk-padding " style={{backgroundColor:"transparent"}} >
    <div class="uk-container">
        <div uk-navbar>

            <div class="uk-navbar-left" >

            <div>
            <img src={logo} />
            </div>

                <ul class="uk-navbar-nav " style={{marginLeft:"48%" }} >
                    <li>
                        <a href="#" className='wt'  >
                            <span class="uk-icon uk-margin-small-right" ></span>
                            For creators
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                            For company 
                        </a>
                    </li>
                </ul>

               

                <div class="uk-navbar-item">
                    <form action="javascript:void(0)">
                    <button style={{backgroundColor:"#02EF93" , borderRadius:"20px" }} class="uk-button uk-button-primary">JOIN</button>
                    </form>
                </div>

            </div>

        </div>
    </div>
</nav>
        


      
    </div>
  )
}

export default Header
