import React from 'react'
import {useParams} from 'react-router-dom'
// import "./Lesson.css"
import lessonArray from "../data"

function Lesson() {
    //gets the id from the params
    const { lessonId } = useParams()
    //gets the lesson array
    const lessons = lessonArray.lessons;
    //gets the lesson that matches the params id
    const less = lessons.find(lesson => lesson.id == lessonId);

  return (
    <div >
            <div className='lesson-container'>
                <div className='lesson-header-container'>
                    <div className='lesson-header-title'>
                        <h1>The Gospel</h1>
                        <p>New Beliver's Guide</p>
                        <p>Lesson 1</p>
                    </div>
                    <div className='lesson-header-img'>
                        <img src={less.img} alt={less.title} />
                    </div>
                </div>
                <div className='lesson-main-container'>
                    <div className='lesson-main-verse'>
                        <p>{less.verseStar}</p>
                    </div>
                    <div className='lesson-main-breakdown'>
                        <h2>Learning Objective</h2>
                        <p>{less.learningObjective}</p>
                        <h2>Overview</h2>
                        <p>{less.overview}</p>
                        <h2>{less.introQuest.question}</h2>
                        <p>{less.introQuest.answer}</p>
                        <p>{less.introQuest.answerCont}</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Lesson