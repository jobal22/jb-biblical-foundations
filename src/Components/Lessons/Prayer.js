import React from 'react'
import "./Lesson.css"
import logo from "../../img/Prayer.png"
import LessonTable from "../LessonTable"

function Prayer() {
  return (
    <div className='lesson-container'>
        <div className='lesson-header-container'>
            <div className='lesson-header-title'>
                <h1>Prayer</h1>
                <p className='guideTitle'>New Beliver's Guide</p>
                <p className='lesCount'>Lesson 7</p>
            </div>
            <div className='lesson-header-img'>
                <img src={logo} alt="prayer icon" />
            </div>
        </div>
        <div className='lesson-main-verse-container lmvc-prayer'>
            <div className='lesson-main-verse'>
                <div className='lesson-main-verse-box'></div>
                <p className='lesson-main-verse-p'>"praying at all times in the Spirit, with all prayer and supplication. To that end, keep alert with all perseverance, making supplication for all the saints," <br/> Ephesians 6:18</p>
            </div>
        </div>
        <div className='lesson-main-container'>
            <div className='lesson-main-breakdown'>
                <h2>Learning Objective</h2>
                <p>By the end of this lesson, you will better understand what it means to spend time with God through prayer.</p>
                <h2>Overview</h2>
                <p>Prayer provides a time to glorify God, grow closer to Him, and present your concerns to Him about your and others' physical, mental, and spiritual needs.</p>
                <h2>What is Prayer?</h2>
                <p>Prayer is having a conversation with God. This is a time when you speak to Him. But you must expect to hear from Him. We have a living God who hears and answers prayers. We are not casting wishes into a well. We are entering into the presence of the one true living God.</p>
                <p>Prayer can and should be done at all times. Physically, this means that you can pray anywhere. If you are at work, at home, at the grocery store, or at a sports event, you can speak to God. Emotionally, this means that you can pray no matter how you feel. If you are happy, mad, or sad, you can talk to God. Spiritually, this means that you can praise God and also confess your sins to Him.</p>
            </div>
            <div className="lesson-main-container-parts">
                <h2>Prayer</h2>
                <p>Prayer is an activity we should do in the Spirit because we worship in Spirit and in truth (John 4:24). Do you know who you are praying to, why you can pray to Him, and how to pray to Him</p>
                <h3 className='prayer-unique-header'>Who We Pray To?</h3>
                <p>We worship a living God, who is a Spirit (John 4:24). He has no beginning or end (Revelation 21:6). He is the maker of heaven, earth, the sea, and all that is in them (Acts 14:15). His works are great and amazing. His ways are just and true (Revelation 15:3). His power is seen in the gospel, which offers salvation to everyone who believes (Romans 1:16). He is the great Judge (James 4:8). After death, man stands before God (Hebrews 9:27).</p>
                <h3 className='prayer-unique-header'>Why Can We Pray to God?</h3>
                <p>We are able to speak with God because of Jesus’ death and resurrection. Jesus died on the cross for our sins (1 Corinthians 15:3). He rose from the grave so that we could have eternal life, a forever relationship with God (John 11:25). When we repented of our sins and trusted in Him, we were saved at that very moment (Romans 10:9-10) and forever on (John 3:16). We have been washed clean (Hebrews 10:22). You belong to God (John 10:18).</p>
                <h3 className='prayer-unique-header'>How to Talk to God</h3>
                <p>As you grow in your relationship with God, you will notice that the Word of God and your “words to God” will align more and more. Now, the Word of God never changes. But you do. As you seek after God, He continually grows you to know and want His desires (Romans 12:2). As you read the Bible, you see what God wants. You ask Him to align your heart with His desires.</p>
                <p>In the Gospels, Jesus tells us not to pray to be seen by people. Instead, we are to pray to be seen by God (Matthew 6:5-6). We pray to glorify God and desire His desires (Luke 2:2). Persistence and humility define the practice of prayer (Luke 18:6-8, 14). We are always to seek after God, and we must always remember that He is God and we are not.</p>
                <p>In the Gospels, Jesus tells us that God’s house is a house of prayer (Matthew 21:13), and we are His house (Ephesians 2:22). We pray for forgiveness (Mark 11:25), strength (Luke 21:36), unfailing faith (Luke 22:32), to be heard (Luke 1:13), to drive out demons (Mark 9:29), and to keep from falling to temptation (Matthew 26:41). We pray in order to forgive others (Mark 11:25), for His coming Kingdom (Matthew 6:10), for daily bread (Matthew 6:11), for our persecutors and abusers (Matthew 5:44; Luke 6:28), and for laborers for the harvest (Matthew 9:38).</p>
                <p>As the Apostle Paul says, “pray at all times in the Spirit with all prayer and supplication” (Ephesians 6:18). Your request may look different from others because your circumstances may be different. However, we have one God, one body, and one Spirit. God gives us unity so that we pray to glorify God and walk in obedience.</p>
            </div>
            <div className="lesson-main-container-parts">
              <h2>Examining Your Heart</h2>
              <p>We must start somewhere. I encourage you to set aside a special time each day to meet with God. This time may be in the morning, afternoon, or evening. Whatever works best for you. This is a time to read/listen to the Bible, align your desires with God’s desires, and speak with Him. Of course, as you grow in prayer, you will find yourself talking with God all the time.</p>
              <h3 className='prayer-unique-header'>Getting Started (Praying Scripture)</h3>
              <p>One easy way to get started is by praying Scripture. This will help you with what to say and knowing what God desires. Start by praying Scripture using Paul’s prayer in Ephesians 3:16-19. Here is an example of praying this passage:</p>
              <p>God, thank you that you are rich in glory. Please grant us to be strengthened with power through Your Spirit in our inner being, so that Christ may dwell in our hearts through faith – that we, being rooted and grounded in love, may have strength to comprehend with all the saints</p>
              <p>what is the breadth and length and height and depth, and to know the love of Christ that surpasses knowledge, that we may be filled with all of your fullness. In Jesus' name, I pray.</p>
            </div>
            <div className="lesson-main-container-parts">
                <h2 className='lmcp-unique-bible-header'>Bible Verses to Know</h2>
                <div className='lmcp-exList lmpo-bible'>
                    <ol className="lesson-main-parts-order lmpo-bible-list">
                        <li className="lesson-main-parts-list lmcp-exList-parts lmpo-bible-list-border">
                            <p className='lmcp-bible-header'>Ephesians 6:18-20</p>
                            <p>"praying at all times in the Spirit, with all prayer and supplication. To that end, keep alert with all perseverance, making supplication for all the saints, 19 and also for me, that words may be given to me in opening my mouth boldly to proclaim the mystery of the gospel, 20 for which I am an ambassador in chains, that I may declare it boldly, as I ought to speak."</p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="lesson-main-container-parts">
                <LessonTable />
            </div>
        </div>
    </div>
  )
}

export default Prayer