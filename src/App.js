// import './App.css';
import Home from './Components/pages/home';
import { BrowserRouter , Route , Routes }  from 'react-router-dom';
import Creator from './Components/pages/creator';
import Home2 from './Components/pages/home2';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Routes>

      <Route path='/' 
      element ={
        <Home/>
      } >

      </Route>
      <Route path='/home2' 
      element ={
        <Home2/>
      } >

      </Route>
      <Route path='/creator' 
      element ={
        <Creator/>
      } >
      </Route>


     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
