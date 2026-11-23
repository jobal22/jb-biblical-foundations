import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Components/HomePage';
import About from "./Components/About";
import NoMatch from './NoMatch';
import Lesson from './Components/Lesson';
import Discipleship from './Components/Discipleship';
import Gospel from './Components/Lessons/Gospel';
import Testimony from "./Components/Lessons/Testimony";
import Assurance from "./Components/Lessons/Assurance";
import Baptism from "./Components/Lessons/Baptism";
import Evangelism from "./Components/Lessons/Evangelism";
import Bible from "./Components/Lessons/Bible";
import Prayer from "./Components/Lessons/Prayer";
import Church from "./Components/Lessons/Church";


function RootRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/discipleship" element={<Discipleship/>} />
        <Route path="/discipleship/gospel" element={<Gospel/>} />
        <Route path="/discipleship/testimony" element={<Testimony/>} />
        <Route path="/discipleship/assurance" element={<Assurance/>} />
        <Route path="/discipleship/baptism" element={<Baptism/>} />
        <Route path="/discipleship/evangelism" element={<Evangelism/>} />
        <Route path="/discipleship/bible" element={<Bible/>} />
        <Route path="/discipleship/prayer" element={<Prayer/>} />
        <Route path="/discipleship/church" element={<Church/>} />
        <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default RootRoutes