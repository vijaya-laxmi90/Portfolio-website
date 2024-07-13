import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer';

function App() {
  return (

     <div className="app">
       <Navbar/>
       <Intro/>
       <Skills/>
       <Works/>
        <Contact/>
       <Footer/>
      </div>
  );
}

export default App;
