import './App.css';
import {BrowserRouter , Switch , Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Section1 from './components/Sections/Section1';
import Section2 from './components/Sections/Section2';
import Section3 from './components/Sections/Section3';
import Section4 from './components/Sections/Section4';
import Section5 from './components/Sections/Section5';
import Section6 from './components/Sections/Section6';

function App() {
  return (
    <div className="App">
      <style>
                @import "react-alice-carousel/lib/alice-carousel.css";
                @import "react-alice-carousel/lib/scss/alice-carousel.scss";
      </style>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
              <Navbar/>
              <Section1/>
              <Section2/>
              <Section3/>
              <Section4/>
              <Section5/>
              <Section6/>
          </Route>
        </Switch>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
