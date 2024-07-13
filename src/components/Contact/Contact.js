import React from 'react'
import './Contact.css'
import ss from '../../assets/ss.png'
import blog from '../../assets/blog.png'
import email from '../../assets/email.png'
import linkd from '../../assets/linkd.png'
import address from '../../assets/address.png'
import gith from '../../assets/gith.png'

function Contact() {
  return (
   <section className='contactPage'>
    <div id='Activities'>
     <h2 className='contactPageTitle'>My Activities</h2>
     <p className='activitiesDesc'>
     "I have successfully grown my blog to nearly 200 followers through proactive engagement and introductions to Blogger.com. <br/>Additionally, I've developed a website on Weebly.com to enhance my proficiency in web design and broaden my learning."
     </p>
     
     <div className='activitiesImgs'>
          <div className='worksImgs'>
            <img src={ss} alt='' className='worksImg'/>
            <div className="content">
              <h2>website</h2>
              <a href="https://color-craze-cosmetics.weebly.com/" target="_blank" rel="noopener noreferrer">Visit via this link</a>
            </div>
          </div>
          <div className='worksImgs'>
            <img src={blog} alt='' className='worksImg'/>
            <div className="content">
              <h2>blog</h2>
              <a href="https://vijya-blogs.blogspot.com/" target="_blank" rel="noopener noreferrer">Visit via this link</a>
            </div>
          </div>
        </div>
     
    </div>
    <div id="Contact">
    
    <div class="contactPagetitle">Contact Me</div>

    <div class="contactBox">
        <div class="contactItem">
            
            <div class="info"><a href="mailto:vijayalaxmi.02vl@gmail.com">vijayalaxmi.02vl@gmail.com</a></div>
        </div>

        <div class="contactItem">
            
            <div class="info"><a href="https://www.linkedin.com/in/vijayalaxmi90/" target="_blank">Linedin</a></div>
        </div>

        <div class="contactItem">
   
            <div class="info"><a href="https://github.com/vijaya-laxmi90" target="_blank">GitHub</a></div>
        </div>

        <div class="contactItem">
           
            <div class="info">Punjab, Jalandhar</div>
            <div className='link-container'>
              <img src={email} alt='' className='link'/>
              <img src={linkd} alt='' className='link'/>
              <img src={gith} alt='' className='link'/>
              <img src={address} alt='' className='link'/>
            </div>
          </div>
        </div>
</div>
          </section>
  )
}

export default Contact
