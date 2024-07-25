import React from 'react'
import './Works.css'
import ccc from '../../assets/ccc.png'
import rr from '../../assets/rr.png'
import fd from '../../assets/fd.png'
import pr from '../../assets/pr.png'

const Works=() =>{
  return (
   <secton id="works">
     <h2 className='workstitle'>My Portfolio</h2>
    
     <span className='workDesc'>
  <h4 class="fade-in">Educational Background: A degree in Computer Science.</h4>
  <h4 class="fade-in">Technical Skills: Proficiency in programming languages such as Java, or C++. Experience with frameworks and libraries like React.js.</h4>
  <h4 class="fade-in">Problem-Solving Abilities: Strong analytical skills to design efficient algorithms and solve complex coding challenges.</h4>
  <h4 class="fade-in">Experience with Tools and Technologies: Familiarity with version control systems (Git), databases (SQL), and development tools (VS Code).</h4>
  <h4 class="fade-in">Project Experience: Demonstrated ability to manage and complete projects. Participation in coding competitions and contributions to open-source projects.</h4>
  <h4 class="fade-in">Soft Skills: Effective communication, teamwork, and time management skills.</h4>
  <h4 class="fade-in">Continuous Learning: Commitment to staying updated with the latest industry trends and technologies.</h4>
</span>

       
<div className="worksContainer">
  <div className='worksImgs'>
    <img src={rr} alt='' className='worksImg'/>
    <div className="content">
      <h2>React Router Project</h2>
      <p>
        With the help of Vite + React, I have developed a React Router project where I have made different components and in the GitHub component I have inserted my followers with the help of Fetch API.
      </p>
      <a href="https://reactrouter20.netlify.app/" target="_blank">Visit via this link</a>
    </div>
  </div>
  <div className='worksImgs'>
    <img src={ccc} alt='' className='worksImg'/>
    <div className="content">
      <h2>Currency Converter Project</h2>
      <p>
        With the help of Vite + React, I have developed a currency converter project where I have made different components and made custom hooks. Here is the link to this app.
      </p>
      <a href="https://currencyconverterok.netlify.app/" target="_blank">Visit via this link</a>
    </div>
  </div>
  <div className='worksImgs'>
    <img src={fd} alt='' className='worksImg'/>
    <div className="content">
      <h2>Food Delivery app</h2>
      <p>
        "Developed a complete food ordering website/web app using React.js,Bootstrap, implementing full stack functionality. The project showcases my skills in building dynamic, responsive web applications. Integrated various features to enhance user experience and streamline the ordering process."
      </p>
      <a href="https://food-website-jade-three.vercel.app/" target="_blank">Visit via this link</a>
    </div>
  </div>
  <div className='worksImgs'>
    <img src={pr} alt='' className='worksImg'/>
    <div className="content">
      <h2>Portfolio website</h2>
      <p>
      "I built a comprehensive portfolio website using React.js as a full stack project. This project showcases my skills in React.js development and full stack web applications. It demonstrates my ability to create dynamic and responsive web designs."
      </p>
      <a href="https://portfolio-website-ffua.vercel.app/" target="_blank">Visit via this link</a>
    </div>
  </div>
 
</div>
<button className='workBtn'>See More</button>

   </secton>
  );
}

export default Works
