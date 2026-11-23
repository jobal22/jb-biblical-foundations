import React from 'react'
import "./Lesson.css"
import logo from "../../img/Gospel.png"
import LessonTable from "../LessonTable"

function Gospel() {
  return (
    <div className='lesson-container'>
        <div className='lesson-header-container'>
            <div className='lesson-header-title'>
                <h1>The Gospel</h1>
                <p className='guideTitle'>New Beliver's Guide</p>
                <p className='lesCount'>Lesson 1</p>
            </div>
            <div className='lesson-header-img'>
                <img src={logo} alt="gospel icon" />
            </div>
        </div>
        <div className='lesson-main-verse-container lmvc-gospel'>
            <div className='lesson-main-verse'>
                <div className='lesson-main-verse-box'></div>
                <p className='lesson-main-verse-p'>"For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day inaccordance with the Scriptures." <br/> 1 Corinthians 15:3-41</p>
            </div>
        </div>
        <div className='lesson-main-container'>
            <div className='lesson-main-breakdown'>
                <h2>Learning Objective</h2>
                <p>By the end of this lesson, you will be able to examine your heart against the facts of Scripture to answer the question, <b>'Am I really saved?'</b></p>
                <h2>Overview</h2>
                <p>The Gospel is very important. It is the answer to our sin problem. Through it, God offers salvation for anyone who believes.</p>
                <h2>What is the Gospel?</h2>
                <p>The Gospel is the Good News of Jesus Christ. Jesus died on the cross for the sins of the world. After three days, He rose from the grave. The Gospel shows our sin problem, provides a solution, warns us about God's coming wrath, and invites us to take part in a relationship with God. The Apostle Paul wrote that the Gospel is the power of God for salvation to everyone who believes (Romans 1:16). He says the Gospel is something to be shared, heard, and believed upon (Romans 10:14-15). Everyone should have a chance to hear the Gospel (Matthew 28:18-20). Every follower of Jesus should be sharing the Gospel (Acts 1:8).</p>
                <p>This Gospel can be viewed in three parts: The Problem, The Solution, and The Invitation.</p>
            </div>
            <div className="lesson-main-container-parts">
                <h2>Gospel Explanation</h2>
                <div>
                    <ol className="lesson-main-parts-order">
                        <li className="lesson-main-parts-list">
                            <h3>The Problem: Sin</h3>
                            <p className="lesson-main-parts-verse">
                                "for all have sinned and fall short of the glory of God" Romans 3:23
                            </p>
                            <p>Sin is disobedience to God’s commands (Genesis 3:17; Romans
                                5:12). The 10 Commandments are a great example of God’s
                                commands. They are found in Exodus 20.</p>
                            <div className="tenCommands">
                                <h3>10 Commandments</h3>
                                <ol>
                                    <li>Put nothing before God (Exodus 20:3)</li>
                                    <li>No idols (Exodus 20:4)</li>
                                    <li>Honor God with your words (Exodus 20:7)</li>
                                    <li>Remember the Sabbath (Exodus 20:8)</li>
                                    <li>Honor your father and mother (Exodus 20:12)</li>
                                    <li>Do not murder (Exodus 20:13)</li>
                                    <li>Do not commit adultery (Exodus 20:14)</li>
                                    <li>Do not steal (Exodus 20:15)</li>
                                    <li>Do not lie (Exodus 20:16)</li>
                                    <li>Do not covet (Exodus 20:17)</li>
                                </ol>
                            </div>
                            <p>Jesus summarizes all of God’s commandments under two categories: loving God and loving others (Matthew 22:34-40). The Bible says that everyone has sinned against God. Because of our disobedience, we are separated from God (Romans 6:23). This separation means we do not know Him, and we do not have peace with Him (Ephesians 2:11-16). Our works cannot
                                save us (Ephesians 2:8-9) because they are like filthy rags to
                                God (Isaiah 64:2).</p>
                            <p>God knows about our sin problem. He knows more about us
                                than we know about ourselves (Psalms 139:1-6). He knows that
                                all people disobey Him (Romans 3:23) and cannot save
                                themselves (Matthew 19:26). For God to save us, our status
                                before Him would have to change from wicked to righteous,
                                the penalty for our sins would have to be paid, and God’s law
                                must be satisfied. When all three of these requirements are
                                met, God declares us to be innocent before Him because of
                                His righteousness (Romans 3:23-26).</p>
                        </li>
                        <li className="lesson-main-parts-list">
                            <h3>The Solution: Jesus</h3>
                            <p className="lesson-main-parts-verse">"For I delivered to you as of first importance what I also
                                received: that Christ died for our sins in accordance with the
                                Scriptures, that he was buried, that he was raised on the third
                                day in accordance with the Scriptures" - 1 Corinthians 15:3-4</p>
                            <p>God’s solution to our sin problem has always been Jesus. Jesus is the only one able to meet all these requirements.
                                Jesus is both God and man. Since He is 100% man, He grewtired (John 4:6), hungry (Mark 11:12), and was able to die
                                (Romans 8:34). He was tempted (Hebrews 4:15), but He never
                                sinned (2 Corinthians 5:21). He died for our sins on the cross (1 Corinthians 15:3).</p>
                            <p>Jesus is also 100% God (Philippians 2:5-6). Before anythingwas created, Jesus existed (John 1:1-2). Before He was born as
                                a man, He was with God the Father (John 17:5). God the Father
                                and God the Son are one (John 10:30). This is one of the reasons why the religious leaders of His time wanted to kill
                                Him (John 10:33). When Jesus died on the cross, death did not
                                conqueror Him. Jesus defeated death (2 Timothy 1:10).
                                Jesus rose from the grave on the third day (1 Corinthians 15:4).</p>
                            <p>When Jesus died on the cross for our sins, it was to change our status before God from wicked to righteous. Christ’s death
                                paid the penalty for our sin. Jesus’ death and resurrection satisfied God’s law. Jesus met all three requirements for God
                                to see us as innocent before Him because of His righteousness
                                (Romans 3: 23-26).</p>
                        </li>
                        <li className="lesson-main-parts-list">
                            <h3>The Invitation: Repent & Believe</h3>
                            <p className="lesson-main-parts-verse">"The time is fulfilled, and the kingdom of God is at hand;
                                repent and believe in the gospel." - Mark 1:15</p>
                            <p className="lesson-main-parts-verse">"...If you confess with your mouth that Jesus is Lord and
                                believe in your heart that God raised him from the dead,
                                you will be saved. For with the heart one believes and is justified,
                                and with the mouth one confesses and is saved.” - Romans 10:9-10</p>
                            <p>God presents a beautiful invitation for a forever relationship
                                with Him. The gift of eternal life is not earned but received
                                (Romans 6:23; Ephesians 2:8-9). Our works cannot save us.
                                Only the work of Jesus’ death, burial, and resurrection can
                                save us. The Gospel invitation is to repent, believe, and call
                                upon Jesus as Lord. Jesus calls for everyone to repent and believe (Mark 1:15).
                                Apart from Christ, all people are dead in sin
                                (Ephesians 2:1) and destined for hell (1 Corinthians 6:9). The
                                Gospel gives an invitation to turn from trusting in the world,
                                the devil, and the flesh (Acts 14:15; Ephesians 2:1-3) and to
                                turn to trusting in Jesus (Acts 26:20; 1 Thessalonians 1:9).
                                As we put our faith in Jesus as Savior, we are to confess Him as
                                our Lord (Romans 10:9-10, 13).</p>
                            <p>When we turn from not trusting in Jesus and turn to faith in
                                Jesus, God saves us by His grace (Ephesians 2:8). He
                                demonstrates His righteousness by changing our status before
                                Him from wicked to righteous (Romans 3:24). He sees our sin
                                debt as completely and forever paid (Romans 3:24). His law is
                                satisfied (Romans 3:25), we are declared children (John 1:12),
                                servants (John 13:16), and friends of God (John 15:15).</p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="lesson-main-container-parts">
                <h2>Examine Your Heart</h2>
                <p>Have you received God’s free gift of salvation? Often, people confuse the gift of salvation in four ways.</p>
                <div className='lmcp-exList'>
                    <ol className="lesson-main-parts-order">
                        <li className="lesson-main-parts-list lmcp-exList-parts">
                            <p>Many people believe they are saved because they were born into a Christian family. It is a wonderful blessing to grow up in a home where the parent(s) are believers and build their home on the word of God. However, this does not provide salvation for you. The Christian home can/should provide many opportunities for you to hear the Gospel and trust in Jesus. Just because the people around us are saved does not mean that we are.</p>
                        </li>
                        <li className="lesson-main-parts-list lmcp-exList-parts">
                            <p>Attending Church is another activity that many people believe saves them. Church is the gathering of believers to worship God and serve one another. Attending Church doesn’t confirm salvation for any individual. However, a biblical Church provides opportunities to hear the Gospel so you can place your faith in Jesus as Lord and Savior.</p>
                        </li>
                        <li className="lesson-main-parts-list lmcp-exList-parts">
                            <p>Often, people place their assurance of salvation in their baptism. Baptism is a public profession of your faith in Jesus as the Son of God. It symbolizes the day you repented of your sins and trusted in Jesus. This means infant baptism, or ritual baptism, doesn’t save you. In the Baptism lesson, we will discuss biblical baptism, which takes place after you place your faith in Jesus.</p>
                        </li>
                        <li className="lesson-main-parts-list lmcp-exList-parts">
                            <p>Another unfortunate confusion many have about salvation is that their works or good deeds save them. The Bible thoroughly explains the fact that our deeds have done nothing for us in the context of salvation but separate us from God. Your deeds are not worth placing your faith in. We must place our faith in the work of Jesus Christ.</p>
                        </li>
                    </ol>
                </div>
                <p>The Apostle John wrote about receiving Jesus by faith (John 1:11-13). We receive Jesus by faith when we repent of our sins and place our trust in Jesus as Lord and Savior. To “repent” means to change your mind or turn away. 
                    When we repent of sin, we withdraw our faith from anything that is not Jesus. To “believe” means to place your faith in or turn towards. When we believe in Jesus, we place our faith only in Him as Savior (the one who died on the cross and rose from the grave) 
                    and as Lord (the one who reigns over all things forever). 
                    We surrender all of ourselves to Him (1 Thessalonians 1:9). A great way to receive the gift of salvation is through prayer. There is no better way to start a relationship with God than by talking to Him. There are many word-for-word prayers to pray called “A Prayer of Salvation.” But I encourage 
                    you to speak to God about these three things: 1. Your sin – confess your sins to God. Now that you realize that these actions were against God and the very reason Jesus died on the cross, talk to God about your sins and ask for forgiveness (1 John 1:9). 2. Your faith –talk to Jesus about believing in Him that He died on the cross and rose from the grave after three days (Romans 10:9). 3. Your confession – call out to Him as Lord. There is no one like Him, the Forever King (Romans 10:10).</p>
                <p>If you have repented, believed, and confessed Jesus as Lord and Savior, then according to Scripture, you are saved. You have the free gift of a forever relationship with God, and your sins (all of them) are forgiven.</p>
                <p>If you have not repented, believed, and confessed Jesus as Lord and Savior, then according to Scripture, you are not saved. But today can be the day that you are. What is keeping you from trusting Jesus? I encourage you to examine the importance of that issue against the importance of life with Jesus. Bring this concern to God through prayer and to your pastor or small-group/Sunday School leader.</p>
            </div>
            <div className="lesson-main-container-parts">
                <div className='lesson-main-container-bigMoment'>
                    <div className='lmcb-first'>
                        <h3>If you want to be saved, then talk to God about these three topics</h3>
                        </div>
                    <div className='lmcb-second'>
                        <ol className='lesson-main-parts-list lmcb-moments'>
                            <li className='lesson-main-parts-list lmcp-exList-parts'><p>Confess Sin</p></li>
                            <li className='lesson-main-parts-list lmcp-exList-parts'><p>Believe Jesus Died and Rose from the Grave</p></li>
                            <li className='lesson-main-parts-list lmcp-exList-parts'><p>Confess Jesus as Lord</p></li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="lesson-main-container-parts">
                <h2 className='lmcp-unique-bible-header'>Bible Verses to Know</h2>
                <div className='lmcp-exList lmpo-bible'>
                    <ol className="lesson-main-parts-order lmpo-bible-list">
                        <li className="lesson-main-parts-list lmcp-exList-parts lmpo-bible-list-border">
                            <p className='lmcp-bible-header'>1 Corinthians 15:3-4</p>
                            <p>"For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures"</p>
                        </li>
                        <li className="lesson-main-parts-list lmcp-exList-parts lmpo-bible-list-border">
                            <p className='lmcp-bible-header'>Romans 6:23</p>
                            <p>"For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord."</p>
                        </li>
                        <li className="lesson-main-parts-list lmcp-exList-parts lmpo-bible-list-border">
                            <p className='lmcp-bible-header'>Romans 10:9-10</p>
                            <p>"...If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved. For with the heart one believes and is justified, and with the mouth one confesses and is saved."</p>
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

export default Gospel