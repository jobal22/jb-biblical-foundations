import React from 'react'
import "./Lesson.css"
import logo from "../../img/Bible.png"
import LessonTable from "../LessonTable"

function Bible() {
  return (
    <div className='lesson-container'>
        <div className='lesson-header-container'>
            <div className='lesson-header-title'>
                <h1>The Bible</h1>
                <p className='guideTitle'>New Beliver's Guide</p>
                <p className='lesCount'>Lesson 6</p>
            </div>
            <div className='lesson-header-img'>
                <img src={logo} alt="bible icon" />
            </div>
        </div>
        <div className='lesson-main-verse-container lmvc-bible'>
            <div className='lesson-main-verse'>
                <div className='lesson-main-verse-box'></div>
                <p className='lesson-main-verse-p'>"All Scripture is breathed out by God and proﬁtable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work." <br/> 2 Timothy 3:16-17</p>
            </div>
        </div>
        <div className='lesson-main-container'>
            <div className='lesson-main-breakdown'>
                <h2>Learning Objective</h2>
                <p>This Bible lesson will give you the basics of the Bible's different categories and how to begin studying it.</p>
                <h2>Overview</h2>
                <p>The Bible is not like any other book. It was written by God through faithful men to change lives both physically and spiritually.</p>
                <h2>What is the Bible?</h2>
                <p>The Bible contains 66 books written by over 30 different authors. God, of course, is the ultimate author of the Bible (2 Timothy 3:16). The Bible can be organized into a few different categories that help us to understand it better. The Old and New Testaments function as the most well-known categories of the Bible. Both tell one big story about God’s holiness and His free invitation to have a forever relationship with Him.</p>
                <p>Let's examine the organization of the Bible and explore some reading methods.</p>
            </div>
            <div className="lesson-main-container-parts">
                <h2>Two Categories</h2>
                <h3 className='bible-unique-header'>Old Testament</h3>
                <p>The Old Testament develops the story of God’s holiness and grace within 39 books. It begins with creation and the flood. Then the focus shifts to God’s relationship with the people of Israel. Throughout the Old Testament, God promises to send the Savior. The entire Old Testament points to the coming of Jesus Christ.</p>
                <p>The Old Testament can be categorized into four types of writing: Law, History, Poetry, and Prophetic.</p>
                <h4 className='bible-unique-mini-header'>The Law</h4>
                <p>Genesis through Deuteronomy are commonly referred to as the Law. Moses wrote these five books, which take us from creation to Israel’s journey in the wilderness. In these books, God gave the law to Israel to demonstrate man's need for a Savior (Romans 3:20).</p>
                <h4 className='bible-unique-mini-header'>Historical Writings</h4>
                <p>Joshua through Job contain what’s known as the historical writings. They not only focus on God’s works but also on His relationship with Israel in the Promised Land. In these books, God promised a forever king, who would be Jesus (2 Samuel 7:16).</p>
                <h4 className='bible-unique-mini-header'>Poetic Writings</h4>
                <p>Psalms through Song of Solomon contain the poetic writings. These books contain prayers and are filled with the great wisdom of God and man’s desire to see the work of His hand. Many of these books were written by two of Israel’s kings while they were in the Promised Land. These books point towards a forever wise (Proverbs 8) king (Jesus), who would suffer for our sins (Psalms 22).</p>
                <h4 className='bible-unique-mini-header'>Prophetic Writings</h4>
                <p>Isaiah through Malachi are the writings of the prophets. We refer to the larger books of this category as the Major Prophets and the shorter books as the Minor Prophets. These prophecies speak about God’s work, warnings, and promises to Israel and the rest of the world of their need for redemption and a coming Savior (Isaiah 53).</p>
                <h3 className='bible-unique-header'>New Testament</h3>
                <p>The New Testament develops the story of God’s holiness and grace in 27 books. It begins with four accounts of Jesus' life, ministry, death, and resurrection. Then, the focus becomes on God’s relationship with the Church. Throughout the New Testament, we see God fulfill His Old Testament promise of salvation through Jesus Christ.</p>
                <p>The New Testament can be categorized into two groups of writing: 1) The Gospels & Acts and 2) The Epistles & Revelation.</p>
                <h4 className='bible-unique-mini-header'>The Gospels & Acts</h4>
                <p>Matthew, Mark, Luke, and John are known as the Gospel writings. These four books focus on the life, death, resurrection, and ascension of Jesus Christ. Matthew and Luke each give an account of Jesus' birth. Matthew contains what is known as the Sermon on the Mount (Matthew 5-7), a sermon Jesus preached on a mountain to His disciples and a crowd. Mark is the shortest of the Gospels. Luke contains the largest collection of Jesus’ parables. John details, in 5 chapters, a meal Jesus shares with His disciples, where Jesus unfolds amazing truths to them.</p>
                <p>The Book of Acts unfolds the church receiving the Holy Spirit and the Good News of Jesus going throughout the world. In Acts, the disciples learn that salvation is not just for the Jews but for anyone who trusts Jesus, can be saved. The conversion of the Apostle Paul and His many mission trips are detailed in this book.</p>
                <h4 className='bible-unique-mini-header'>The Epistles and Revelation</h4>
                <p>Romans through Jude are the letters written to specific Churches, people, or groups of believers. The Apostle Paul wrote the majority of these letters. However, Peter and John also wrote many of them.</p>
                <p>The Book of Revelation contains a prophecy written by the Apostle John to the seven Churches. This book details events that will happen before, during, and after Jesus’ return. Revelation ends with a declaration that Jesus is coming soon (Revelation 22:20).</p>
            </div>
            <div className="lesson-main-container-parts">
                <h2>Reading Methods</h2>
                <h3 className='bible-unique-header'>Why Read the Bible</h3>
                <p>With anything we do in life, we must know why we are doing it, how we will do it, and pick a place to begin. Reading the Bible is no different. The Apostle Paul gives us the “why” in 2 Timothy 3:16-17. The end goal for spending time in the Word of God is to grow in the righteousness we received through Christ. We are to use the Bible to teach, reproof, correct, and train. This starts with applying what we learn to our own lives.</p>
                <h3 className='bible-unique-header'>How to Read the Bible</h3>
                <h4 className='bible-unique-mini-header'>Bible Translations</h4>
                <p>One of the most important parts of choosing a Bible translation is making sure you can understand it. Find a translation in your language. The Bible was originally written in Hebrew (Old Testament) and Greek (New Testament) but has since been translated into many languages. Three English translations I recommend are the New American Standard Bible (NASB), the English Standard Version (ESV), and the Christian Standard Bible (CSB). Your local Church may have a Bible translation that they prefer to use, so check with your pastor.</p>
                <h4 className='bible-unique-mini-header'>Reading</h4>
                <p>The amount you read depends on you. You may have seasons of your life where you spend months on one verse, section, or chapter. Other times, you may read through one of Paul’s letters all at once. You might find it easier to listen to an audio version of the Bible. The main point is to be in the Word daily and always set your mind on the Word.</p>
                <h4 className='bible-unique-mini-header'>Journaling</h4>
                <p>Some believers have found it helpful to journal while studying the Bible. This way, you keep a copy of what you are learning and what God is teaching you. Journaling may help you in Church. Take notes while your pastor is preaching.</p>
                <h4 className='bible-unique-mini-header'>Memorizing</h4>
                <p>Psalm 1 states that the blessed man’s “delight is in the law of the Lord, and on his law, he meditates day and night.” Memorizing the Bible may seem like a big task, but it becomes easier if you focus on one verse at a time. Some people find that they memorize verses more easily by saying them out loud several times. Others find that sharing the verse or writing it down is more helpful. However you decide to begin memorizing scripture, God will use His Word to encourage, convict, and shine through you.</p>
                <h3 className='bible-unique-header'>Time to Begin</h3>
                <p>If you are brand new to the Bible, I recommend starting with the Gospel of John and then reading the Book of Acts. In John, you will be quickly introduced to the character and life of our Savior. In Acts, you will learn what the disciples did with the teachings of Jesus. Beyond this starter recommendation, you can find many different reading plans online. In fact, your local Church may have a reading plan that they are currently using.</p>
                <p>The important thing is that you get your Bible, sit down with it, and begin studying it. Look to answer questions like: 1) Who are the main characters in this story? 2) What do these verses say about God and man? 3) Is there something I need to obey from this chapter?</p>
            </div>
            <div className="lesson-main-container-parts">
                <h2 className='lmcp-unique-bible-header'>Bible Verses to Know</h2>
                <div className='lmcp-exList lmpo-bible'>
                    <ol className="lesson-main-parts-order lmpo-bible-list">
                        <li className="lesson-main-parts-list lmcp-exList-parts lmpo-bible-list-border">
                            <p className='lmcp-bible-header'>2 Timothy 3:16-17</p>
                            <p>"All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work."</p>
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

export default Bible