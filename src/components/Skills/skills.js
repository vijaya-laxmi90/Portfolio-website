import React from 'react'
import './Skills.css';
import data from '../../assets/data.png'
import vision from '../../assets/vision.png'
import frontend from '../../assets/frontend.png'


const Skills=()=>{
   return(
    <section id='skills'>
      <div>
      <h2 className='skillsTitle'>About Me</h2>
    <span className='skillsDesc'>
        <h2></h2>"I am final year student with a demonstrated history of working on various live projects. Skilled in Data Science, React Framework and Leadership. Strong Engineering professional with a Bachelor's degree focused in Computer applicatione."</span>

<div class="info">
    <div>
        Full Name: Vijaya Laxmi
    </div>
    <div>
        Age: 22
    </div>
    <div>
        College: LPU
    </div>
    <div>
        Stream: Bachelor in Computer Application
    </div>
    <div>
        Address: Punjab, Jalandhar
    </div>
    <div>
        Nationality: Indian
    </div>
</div>

    <div className='skillstitle'>What i do </div>
    <span className='skillsDesc'>"As a software developer, I design, implement, and maintain software applications to meet user needs and business objectives. I collaborate with cross-functional teams to deliver high-quality code and innovative solutions."</span>
    <div className='skillsBars'>
        <div className='skillsBar'>
            <img src={frontend} alt='frontend' className='skillsBarImg' /> 
            <div className='skillsBarText'>
                <h2>Frontend Development</h2>
                <p>Proficient in building responsive and interactive user interfaces using modern frameworks and libraries like React.js, HTML, CSS, and JavaScript.</p>
            </div>
        </div>
    </div>
   <div className='skillsBar'>
               <img src={data} alt='data' className='skillsBarImg' /> 
                <div className='skillsBarText'>
                    <h2>Problem-Solving and Algorithms</h2>
                    <p>Strong in data structures and algorithms, with a proven track record in competitive programming and problem-solving on platforms like CodeChef</p>
                </div>
            </div>
            <div className='skillsBar'>
               <img src={vision} alt='vision' className='skillsBarImg' /> 
                <div className='skillsBarText'>
                    <h2>Version Control and Collaboration</h2>
                    <p>Experienced with Git and GitHub for version control and collaboration, ensuring efficient and seamless teamwork in projects</p>
                </div>
            </div>
        </div>
        
    </section>
   )
}

export default Skills;