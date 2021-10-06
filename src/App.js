import {useEffect} from "react"
import './App.css';


const App = () => {



useEffect(()=>{
  

  
  document.getElementById("about-grid").style.left="0px"
  document.getElementById("about-grid").style.transition="3s"

  document.getElementById("grid-up-1").style.top="0px"
  document.getElementById("grid-up-1").style.transition="3s"


  document.getElementById("about").style.left="130px"
  document.getElementById("about").style.transition="3s"

},[])


  return (
    <div className="App">
      <span id="grid-up-1" className="grid-up-1"></span>
      <div id="about-grid" className="about-grid">
     
      </div>
      <div className="about" id="about">
          <h1 id="h1">Hi,</h1>
          <h4>I am artist smith from california.</h4>
          <p>smith1990@gmail.com<br/>
          <i className="fa fa-instagram"></i>&nbsp;<i className="fa fa-facebook"></i>&nbsp;<i className="fa fa-twitter"></i></p>
        </div>
       <div className="show">

<img alt="" src="https://images.pexels.com/photos/1981468/pexels-photo-1981468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" id="img"/>
<img alt="" src="https://images.pexels.com/photos/707580/pexels-photo-707580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" id="img"/>
<img alt="" src="https://images.pexels.com/photos/3778078/pexels-photo-3778078.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" id="img" />
<img alt="" src="https://images.pexels.com/photos/1805268/pexels-photo-1805268.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" id="img" />
<img alt="" src="https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" id="img"/>
<img alt="" src="https://images.pexels.com/photos/994164/pexels-photo-994164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" id="img"/>
<img alt="" src="https://images.pexels.com/photos/732548/pexels-photo-732548.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" id="img" />
<img alt="" src="https://images.pexels.com/photos/1573434/pexels-photo-1573434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" id="img" />


</div>
<br/><br/><br/>

    </div>
  );
}

export default App;
