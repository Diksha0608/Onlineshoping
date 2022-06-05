import logo from './logo.svg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './Components/Header';

import NavRouter from './Components/NavLink_Router/NavRouter';
import NavBar from './Components/NavBar/NavBar';



function App() {
  return (
    <div className="App">
     <NavRouter/>
     {/* <NavBar/> */}
    
   
    </div>
  );
}

export default App;




