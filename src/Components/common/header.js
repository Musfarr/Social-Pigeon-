import React from 'react'
import logo from "../../Assets/images/logo1.svg"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>

<nav class="uk-navbar-container   " style={{backgroundColor:"transparent"}} >
    <div class="uk-container navbar ">
        <div uk-navbar>

            <div class="uk-navbar-left" >
            <Link to={"/"}>
            <div>
            <img src={logo} />
            </div >  
            </Link>

             <ul class="uk-navbar-nav  " style={{marginLeft:"48%" }} >
                    <li>
                        <a href="#" className='wt'  >
                        <Link to={"/creator"}>
                            <span class=" uk-margin-small-right wt  headerbutton"    ></span>
                            For creators
                        </Link>
                        </a>
                    </li>


                    <li>
                        <a href="#">
                        <Link to={"/home2"}> 
                            <span class=" uk-margin-small-right wt headerbutton" ></span>
                            For company 
                        </Link>
                        </a>
                    </li>
                </ul>

               

                <div class="uk-navbar-item">
                    <form action="javascript:void(0)">
                    <button style={{backgroundColor:"#02EF93" , borderRadius:"20px" }} class="uk-button uk-button-primary ">JOIN</button>
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
