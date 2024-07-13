import React from "react";
import './intro.css';
import bg from '../../assets/vijaya.png-removebg-preview.png'
import {  Link  } from 'react-scroll';
import btnImg from '../../assets/hireme.png'

const Intro =()=>{
return(
    <section id="intro">
       <div className="introContent" >
       <span className="hello">Hello,</span>
       <span className="introText">I'm <span className="introName">Vijaya Laxmi</span><br/> Aspiring Software Developer</span>
       <p className="introPara">Aspiring software developer with hands-on experience in React.js and <br/> strong proficiency in data structures and algorithms. </p>
       <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
       </div>
       <img src= {bg} alt="Profile" className="bg"/>
    </section>
)
}
export default Intro;