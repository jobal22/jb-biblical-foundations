import React from 'react'
import { Link } from "react-router-dom";
import "./Discipleship.css"
import gospel from "../img/Gospel.png"
import testimony from "../img/Testimony.png"
import assurance from "../img/Assurance.png"
import baptism from "../img/Baptism.png"
import evangelism from '../img/Evangelism.png'
import bible from "../img/Bible.png"
import prayer from "../img/Prayer.png"
import church from "../img/Church.png"

function Discipleship() {
  return (
    <div className='discipleship-container'>
        <div className='discipleship-header-container'>
            <h1>New Believer's Guide</h1>
        </div>
        <div className='discipleship-main-container'>
            <section id="nbg-intro">
                <p>The New Believers module consists of eight essential lessons. Each lesson is
                    designed to help you understand your new life with Christ and your responsibility as
                    a believer in bringing glory to God.</p>
                <p><b>Lessons 1-3</b> focus on the Gospel, Believer’s Testimony, and Assurance of
                    Salvation. These lessons are designed to help you better understand the Good News
                    about Jesus, how it has personally affected your life, and how it will continuously
                    transform you each day.
                    </p>
                <p><b>Lesson 4</b> is about Baptism, which is one of the first steps of obedience for every
                    new believer.
                    </p>
                <p><b>Lessons 5-8</b> focus on the four disciplines a believer should walk in daily:
                    Evangelism, Bible, Prayer, and Fellowship.
                    </p>
            </section>
            <section id='table-contents'>
                <div className='table-container'>
                    <h2>Lessons</h2>
                    <div className='table-lessons-container'>
                        <div className='table-lessons'>
                            <img src={gospel} alt="gospel icon" className='item-1'></img>
                            <h3 className='item-2'>The Gospel</h3>
                            <p className='item-3'>This lesson will help you examine your heart
                                against the facts of Scripture to ask yourself,
                                “Am I really saved?”</p>
                            <Link to={`/discipleship/gospel`} className='table-lessons-link item-4'>View Lesson</Link>
                        </div>
                        <div className='table-lessons'>
                            <img src={testimony} alt="testimony icon" className='item-1'></img>
                            <h3 className='item-2'>Testimony</h3>
                            <p className='item-3'>By the end of this lesson, you will have a working copy of your testimony and the ability to share a shortened and extended version.</p>
                            <Link to={`/discipleship/testimony`} className='table-lessons-link item-4'>View Lesson</Link>
                        </div>
                        <div className='table-lessons'>
                            <img src={assurance} alt="assurance icon" className='item-1'></img>
                            <h3 className='item-2'>Assurance</h3>
                            <p className='item-3'>This lesson will help you understand the importance of relying on the Bible.</p>
                            <Link to={`/discipleship/assurance`} className='table-lessons-link item-4'>View Lesson</Link>
                        </div>
                        <div className='table-lessons'>
                            <img src={baptism} alt="baptism icon" className='item-1'></img>
                            <h3 className='item-2'>Baptism</h3>
                            <p className='item-3'>This lesson focuses on the purpose that baptism plays in your walk with Christ.</p>
                            <Link to={`/discipleship/baptism`} className='table-lessons-link item-4'>View Lesson</Link>
                        </div>
                        <div className='table-lessons'>
                            <img src={evangelism} alt="evangelism icon" className='item-1'></img>
                            <h3 className='item-2'>Evangelism</h3>
                            <p className='item-3'>This lesson will equip you with basic tools to
                                share the Gospel and the understanding of the
                                importance of evangelizing the lost.</p>
                            <Link to={`/discipleship/evangelism`} className='table-lessons-link item-4'>View Lesson</Link>
                        </div>
                        <div className='table-lessons'>
                            <img src={bible} alt="bible icon" className='item-1'></img>
                            <h3 className='item-2'>Bible</h3>
                            <p className='item-3'>The Bible lesson will give you the basics for
                                understanding the diﬀerent categories of the
                                Bible and how to begin studying it.</p>
                            <Link to={`/discipleship/bible`} className='table-lessons-link item-4'>View Lesson</Link>
                        </div>
                        <div className='table-lessons'>
                            <img src={prayer} alt="prayer icon" className='item-1'></img>
                            <h3 className='item-2'>Prayer</h3>
                            <p className='item-3'>By the end of this lesson, you will have a
                                deeper understanding of what it means to
                                spend time with God through prayer.</p>
                            <Link to={`/discipleship/prayer`} className='table-lessons-link item-4'>View Lesson</Link>
                        </div>
                        <div className='table-lessons'>
                            <img src={church} alt="church icon" className='item-1'></img>
                            <h3 className='item-2'>Church</h3>
                            <p className='item-3'>This lesson will help you understand what the Church is and how to fellowship with other believers.</p>
                            <Link to={`/discipleship/church`} className='table-lessons-link item-4'>View Lesson</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Discipleship