import React from 'react'
import "./Lesson.css"
import logo from "../../img/Baptism.png"
import LessonTable from "../LessonTable"

function Baptism() {
  return (
    <div className='lesson-container'>
        <div className='lesson-header-container'>
            <div className='lesson-header-title'>
                <h1>Baptism</h1>
                <p className='guideTitle'>New Beliver's Guide</p>
                <p className='lesCount'>Lesson 4</p>
            </div>
            <div className='lesson-header-img'>
                <img src={logo} alt="baptism icon" />
            </div>
        </div>
        <div className='lesson-main-verse-container lmvc-baptism'>
            <div className='lesson-main-verse'>
                <div className='lesson-main-verse-box'></div>
                <p className='lesson-main-verse-p'>"Do you not know that all of us who have been baptized into Christ Jesus were baptized into his death? We were buried therefore with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life." <br/> Romans 6:3-4</p>
            </div>
        </div>
        <div className='lesson-main-container'>
            <div className='lesson-main-breakdown'>
                <h2>Learning Objective</h2>
                <p>This lesson focuses on the purpose that baptism plays in your walk with Christ</p>
                <h2>Overview</h2>
                <p>Your baptism is very important. It is a first step in obedience to your Lord and Savior Jesus, and an opportunity to proclaim His name to the world.</p>
                <h2>What is the Baptism?</h2>
                <p>Believer’s Baptism is an act of obedience to Christ's command and is performed by full immersion in water after you have been saved (Matthew 28:19). Let’s look at baptism in three ways: symbolism, proclamation, and obedience.</p>
            </div>
            <div className="lesson-main-container-parts">
                <h2>The Purpose of Baptism</h2>
                <div>
                    <ol className="lesson-main-parts-order">
                        <li className="lesson-main-parts-list">
                            <h3>Symbolism</h3>
                            <p>Our salvation is a gift provided by Jesus through His death, burial, and resurrection (Romans 3:24-26). We received this gift through repentance and belief (Mark 1:15). When we trusted in Jesus, He brought us from death to life (Romans 2:5). Baptism gives a physical representation of a spiritual act. During baptism, you go under water, which represents your sins being buried with Jesus. When you come out of the water, you represent the new life you now have with Jesus (Romans 6:3-4; Colossians 2:11-12). Through baptism, we identify ourselves with Jesus’ death, burial, and resurrection.</p>
                        </li>
                        <li className="lesson-main-parts-list">
                            <h3>Proclamation</h3>
                            <p>In Matthew 3:13-17, we read the story of Jesus’ baptism. Jesus asked His cousin, John, to baptize Him. He wanted to be baptized to fulfill all righteousness. When Jesus came out of the water, the Holy Spirit came down from heaven and rested on Him. Then, God the Father proclaimed, “This is my beloved Son, with whom I am well pleased” (Matthew 3:17).</p>
                            <p>Jesus was not baptized because He was a sinner in need of salvation. For we know He never sinned (1 John 3:5). The purpose of His baptism was to proclaim that He is God’s Son, the Savior and Lord. We are baptized not as sinners in need of salvation, but as those who have been made righteous by Christ and willing to proclaim His name.</p>
                        </li>
                        <li className="lesson-main-parts-list">
                            <h3>Obedience</h3>
                            <p>Baptism is a symbol of the salvation that we received through Jesus and a proclamation that Jesus is who He says He is. It is also an act of obedience. In Matthew 28:18-20, Jesus commands us to make disciples of all nations. He says to baptize these disciples in the name of the Father, Son, and Holy Spirit. When we trust Jesus as our Lord and Savior, we surrender our lives to Him so that we do whatever He says. As believers, this should be one of our first acts of obedience to our King.</p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="lesson-main-container-parts">
                <h2>Practical Aspects</h2>
                <p>Baptism is an act performed on a believer by another believer. As discussed earlier, baptism is for believers because it is a symbol, a proclamation, and an act of obedience. It is performed by another believer since Jesus gave His command to make disciples to believers (Matthew 28:18-20). Believers’ baptism is performed among other believers, as this should take place in the context of the church body. Becoming a part of a local church is important for your growth with God and protection from the deceitful schemes of the world (Ephesians 4:11-17). When we say church, we mean the people, not the building. The building is just a building, but the believing people are the body of Christ.</p>
                <p>When you get baptized, there will most likely be lost people around. So, when you give your testimony and walk in obedience to God’s command, you are not only demonstrating your faith in Christ to the church, but also proclaiming it to a lost world. This is a great opportunity to invite the lost to trust in Jesus as Lord and Savior.</p>
                <p>If you haven’t already, schedule a time with your pastor to get baptized. Invite your family, friends, and coworkers to come. Let your pastor know who is coming, so that he can make sure to save room for them. Your pastor will want to take the opportunity to share the Gospel with your guest on the day of your baptism.</p>
            </div>
            <div className="lesson-main-container-parts">
                <h2 className='lmcp-unique-bible-header'>Bible Verses to Know</h2>
                <div className='lmcp-exList lmpo-bible'>
                    <ol className="lesson-main-parts-order lmpo-bible-list">
                        <li className="lesson-main-parts-list lmcp-exList-parts lmpo-bible-list-border">
                            <p className='lmcp-bible-header'>Romans 6:3-4</p>
                            <p>Do you not know that all of us who have been baptized into Christ Jesus were baptized into his death? We were buried therefore with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life."</p>
                        </li>
                        <li className="lesson-main-parts-list lmcp-exList-parts lmpo-bible-list-border">
                            <p className='lmcp-bible-header'>Colossians 2:12</p>
                            <p>"Having been buried with him in baptism, in which you were also raised with him through faith in the powerful working of God, who raised him from the dead."</p>
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

export default Baptism