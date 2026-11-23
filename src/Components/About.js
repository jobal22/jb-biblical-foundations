import React from 'react'
import profile from "../img/Jobal-photo1.png"
import './About.css'

function About() {
  return (
    <div className="about-container">
      <div className='ac-img-container'>
        <img src={profile} alt='jobal' />
      </div>
      <div className='ac-text-container'>
          <h1>Dr. Jonathan Baldwin (Jobal)</h1>
          <h2>Testimony</h2>
          <p>At the end of 2009, a missions pastor shared the Gospel with me. God allowed me to hear the Gospel, and I chose to repent, believe, and confess Jesus as Lord and Savior. Christ forgave me of my sins and gave me His life. At that moment, I knew my life belonged to God, and it would never be the same. The missions pastor encouraged me towards seminary training after hearing my heart for missions. I was baptized in May 2010. This Gospel speaks of a problem, a solution, and an invitation. The problem is sin. All have sinned against God and are separated from Him. The solution is Jesus' death on the cross for our sins, and His resurrection from the grave on the third day. The invitation is to repent of our sins, believe that Jesus died on the cross and rose from the grave, and confess Jesus as Lord.</p>
          <h2>Education</h2>
          <ul className='ac-text-list-container'>
            <li>
              <h3>PH.D. (Evangelism and Church Revitalization)</h3>
              <p>Southwestern Baptist Theological Seminary</p>
            </li>
            <li>
              <h3>M.Div. (International Church Planting)</h3>
              <p>Southwestern Baptist Theological Seminary</p>
            </li>
            <li>
              <h3>B.S. (Toxicology)</h3>
              <p>University of Louisiana in Monroe</p>
            </li>
          </ul>
      </div>
  </div>
  )
}

export default About