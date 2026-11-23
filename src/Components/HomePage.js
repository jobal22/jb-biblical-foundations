import React from 'react'
import { Link } from "react-router-dom";
import Discipleship from './Discipleship'
import mainLogo from '../img/JB-logo2.png'

import "./HomePage.css"

function HomePage() {
  return (
    <div className='hpContainer'>
        <section className='hpWelcome'>
            <img src={mainLogo} alt="main JB logo" />
            <div className='hpWelcome-text'>
                <h2>Welcome</h2>
                <p><b>JB Biblical Foundations</b> is designed to help you grow in your relationship with Christ through eight New Believer's Guide lessons.  </p>
            </div>
        </section>
        <section>
            <Discipleship />
        </section>
        {/* <section className='hpCardContainer'>
            <div className='hpCard '>
                <div className='hpCard-header first-card-header'>
                    <h2>About Me</h2>
                </div>
                <div className='hpCard-body'>
                    <p>I am a Web Developer with a Ph.D. in evangelism.
                        I have experience in coding, leadership, academic writing, and teaching.
                        See more of my journey through life</p>
                </div>
                <div className='hpCard-footer first-card-footer'><Link to={`/about`}>My Story</Link></div>
            </div>
            <div className='hpCard'>
                <div className='hpCard-header second-card-header'>
                    <h2>Coding</h2>
                </div>
                <div className='hpCard-body'>
                    <p>Check out apps that I have made through React and Node.</p>
                </div>
                    <div className='hpCard-footer second-card-footer'><Link to={`/coding`}>Projects</Link></div>
            </div>
            <div className='hpCard'>
                <div className='hpCard-header third-card-header'>
                    <h2>Discipleship</h2>
                </div>
                <div className='hpCard-body'>
                    <p>Discipleship aims to help you grow closer to God.
                        I have designed a Believer's Guide to help you with
                        basic principles for following Christ.
                    </p>
                </div>
                <div className='hpCard-footer third-card-footer'><Link to={`/discipleship`}>Learn</Link></div>
            </div>
        </section> */}
    </div>
  )
}

export default HomePage