import React from 'react'
import "./Lesson.css"
import logo from "../../img/Evangelism.png"
import LessonTable from "../LessonTable"

function Evangelism() {
  return (
    <div className='lesson-container'>
        <div className='lesson-header-container'>
            <div className='lesson-header-title'>
                <h1>Evangelism</h1>
                <p className='guideTitle'>New Beliver's Guide</p>
                <p className='lesCount'>Lesson 5</p>
            </div>
            <div className='lesson-header-img'>
                <img src={logo} alt="evangelism icon" />
            </div>
        </div>
        <div className='lesson-main-verse-container lmvc-evangelism'>
            <div className='lesson-main-verse'>
                <div className='lesson-main-verse-box'></div>
                <p className='lesson-main-verse-p'>"And Jesus came and said to them, 'All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.'” <br/> Matthew 28:18-20</p>
            </div>
        </div>
        <div className='lesson-main-container'>
            <div className='lesson-main-breakdown'>
                <h2>Learning Objective</h2>
                <p>This lesson will equip you with the basic tools to share the Gospel and understand the importance of evangelizing the lost.</p>
                <h2>Overview</h2>
                <p>Sharing the Gospel is not an option but a command that God equips you to obey.</p>
                <h2>What is Evangelism?</h2>
                <p>Evangelism is verbally communicating the Gospel to unbelievers. At its simplest, it means to share the Gospel. The goal is to glorify God, get the Gospel to people’s ears, and invite them to repent, believe, and confess Jesus as Lord. If you are a believer, then you are fully equipped and expected by God to share the Gospel with others.</p>
            </div>
            <div className="lesson-main-container-parts">
                <h2>Equipped to Share</h2>
                <div>
                    <ol className="lesson-main-parts-order">
                        <li className="lesson-main-parts-list">
                            <h3>The Faith</h3>
                            <p>"Now I would remind you, brothers, of the gospel I preached to you, which you received, in which you stand," 1 Corinthians 15:1</p>
                            <p>You are equipped to share the Gospel because of your faith. Your faith is important for many reasons. By God's grace and through faith, you are saved (Ephesians 2:8). Without your faith in Jesus, you would not be saved, and you would not be a messenger for God. However, because you have repented of your sins and trusted in Jesus, you are saved and have kingdom work to do. Part of that kingdom work is telling others about Jesus so that they can be saved, too.</p>
                        </li>
                        <li className="lesson-main-parts-list">
                            <h3>The Gospel</h3>
                            <p>"For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures," 1 Corinthians 15:3-4</p>
                            <p>You are equipped to share the Gospel because of the Gospel. Without the Gospel message, no one could get saved, for it is the power of God for salvation to everyone who believes (Romans 1:16). Without the Gospel message, you would have no good news to share, for it is the message of Jesus' rescuing us from God's wrath.</p>
                        </li>
                        <li className="lesson-main-parts-list">
                            <h3>The Holy Spirit</h3>
                            <p>"But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth." Acts 1:8</p>
                            <p>You are equipped to share the Gospel because of the Holy Spirit. Without the Holy Spirit, you have no power. However, everyone who is saved has the Holy Spirit and the power to share the Gospel and see others get saved.</p>
                        </li>
                        <li className="lesson-main-parts-list">
                            <h3>The Command</h3>
                            <p>"Go therefore and make disciples of all nations," Matthew 28:19a</p>
                            <p>You are equipped to share the Gospel because of God's command to "make disciples". Without the command to "make", we would be doing this on our own strength. However, God has commanded every believer to share the Gospel, and He has equipped every believer to do so.</p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="lesson-main-container-parts">
                <h2>Sharing the Gospel</h2>
                <div>
                    <ol className="lesson-main-parts-order">
                        <li className="lesson-main-parts-list">
                            <h3>What to Share</h3>
                            <p>As we discussed in the Gospel Lesson, the Gospel is the Good News of Jesus Christ. It contains our sin problem, Jesus' death and resurrection, and gives an invitation to repent, believe, and confess Jesus as Lord.</p>
                            <p>When we share the Gospel with unbelievers, we must include these three components: Problem, Solution, and Invitation. Depending on the context of your conversation, you may go into greater detail about these components. If we leave out the Problem, then what need is there for a solution and an invitation? If we disclose the Problem but never give the Solution, then we are only communicating hopelessness. If we tell of the Problem and Solution but withhold the invitation, then we are only telling them about the way of salvation but not showing them the way to salvation. When we communicate the Gospel to unbelievers, we want them to understand the problem, the solution that God provides, and invite them into a relationship with God.</p>
                        </li>
                        <li className="lesson-main-parts-list">
                            <h3>Gospel Receptivity</h3>
                            <p>Often in Evangelism training, we focus on all the ways that people may doubt and reject the Gospel message. However, God is always at work and saving people. So, let’s talk about what to do when someone is receptive to the Gospel.</p>
                            <p>After you share the Gospel with someone, ask questions to see what the hearer(s) understood and how they are processing the information.</p>
                            <h4>Helpful Questions:</h4>
                              <ol className="lesson-main-parts-order">
                                <li className="lesson-main-parts-list2">
                                  <p>Have you heard the Gospel before?</p>
                                </li>
                                <li className="lesson-main-parts-list2">
                                  <p>What are your thoughts about this information?</p>
                                </li>
                              </ol>
                            <p>Once you ask these questions, listen to their answers, and dig deeper into their answer. They may already be a believer, and you can celebrate that with them.</p>
                            <h4>Furthering the Conversation:</h4>
                              <ol className="lesson-main-parts-order">
                                <li className="lesson-main-parts-list2">
                                  <p>Is there anything that keeps you from wanting to place your faith in Jesus today?</p>
                                </li>
                                <li className="lesson-main-parts-list2">
                                  <p>Do you want to give your life to Christ (Matthew 16:24,25; 1 Corinthians 6:19-20; Galatians 2:20)?</p>
                                </li>
                                <li className="lesson-main-parts-list2">
                                  <p>Would you like to ask Christ into your heart (Ephesians 3:17)?</p>
                                </li>
                              </ol>
                            <p>If the hearer(s) are receptive to the Gospel and want to be saved, celebrate that with them. First, ask why. Why do you want to be saved? This is not to talk them out of salvation. This will help you understand what is motivating them. Are they convicted of their sins? If their answer is unclear, rediscuss the subject of sin (the Problem) to help them better understand why everyone needs salvation. Next, ask "what." What did Jesus do because of your sin? This gives you a chance to re-discuss the Gospel solution. Then ask about the Gospel invitation: what do you need to do to receive this free gift? This will help you to see what they heard when you shared the Gospel with them earlier.</p>
                            <p>When the hearer(s) understand their need for forgiveness through Jesus' death, burial, and resurrection, invite them to pray. There is no better way to enter a relationship with God than to talk to Him. Romans 10:13 says, "Everyone who calls upon the name of the Lord will be saved."</p>
                            <p>Many people have crafted sweet prayers of salvation for people to repeat after them. Many of these are great prayers. I find it easiest to encourage the person to speak to God about their sin, God’s solution, and receiving the invitation. Encourage them to confess Jesus as Lord. When you encourage them to pray about the problem, solution, and invitation, you will see God work in their heart in ways that you could not imagine. Ask them to pray with you at that moment and help guide them in prayer as needed.</p>
                            <p>The new believer will need discipleship and encouragement. They will need encouragement to be baptized, read their Bible, pray to God, share the Gospel, and fellowship with other believers. Invite them to be a part of your church or encourage them to find a healthy church in their area.</p>
                        </li>
                        <li className="lesson-main-parts-list">
                            <h3>Gospel Rejections</h3>
                            <p>As you are out sharing the Gospel, whether it is a planned or unplanned Gospel conversation, you will find that some people may not want to talk about the Gospel, and some will not be able to talk about the Gospel at that moment. Let's talk about rejections in two ways: Conversation Rejections and Gospel Rejections.</p>
                            <h4>Conversation Rejections</h4>
                            <p>Whether you are discussing dinner plans, sports, or the Gospel, conversations can easily get distracted. Time constraints and interruptions are a few ways that conversation can end earlier than intended. When it comes to evangelism, these distractions can often prohibit us from ever sharing the Gospel. One way to prevent this is to begin the conversation with the Gospel. Paul says that delivering the Gospel is a priority (1 Cor 15:3). We can begin a conversation with the Gospel. This way, if a distraction happens (ex., they are in a hurry, a kid gets sick, or an important phone call comes in), you have at least placed the Gospel in their ears.</p>
                            <p>Sometimes when we share the Gospel, people may not want to talk or may not have time. It may have nothing to do with the topic of the conversation, but the conversation in general. Let’s walk through some of these conversation rejections and how to handle them.</p>
                              <ol className="lesson-main-parts-order">
                                <li className="lesson-main-parts-list2">
                                  <p>I'm too busy</p>
                                  <p>- Be understanding. You have busy days too. </p>
                                  <p>- Leave a gospel tract. Briefly explain the tract to them.</p>
                                  <p>- Ask if there is a better time for you to talk with them.</p>
                                  <p>- Listen to their response. If they answer 'yes,' then set up the time and go back. If 'no,' then thank them for the time that they share with you.</p>
                                </li>
                                <li className="lesson-main-parts-list2">
                                  <p>I go to Church</p>
                                  <p>- Ask questions about where they go to Church and what their Church says the Gospel is.</p>
                                  <p>- Second, listen. You get to hear about their views on Jesus and God’s story.</p>
                                  <p>- If they know the Gospel, ask when they were saved.</p>
                                  <p>- If they don't know the Gospel, tell them the biblical Gospel</p>
                                </li>
                                <li className="lesson-main-parts-list2">
                                  <p>I'm not interested</p>
                                  <p>- Be understanding. There was once a time when you, too, were not interested.</p>
                                  <p>- There are questions to ask. “What makes you feel uninterested in this subject?”</p>
                                  <p>- Listen. If the conversation allows for deeper discussion of the Gospel, take the opportunity to discuss it. If the conversation does not allow for deeper discussion of the Gospel, thank them for their time.</p>
                                </li>
                                <li className="lesson-main-parts-list2">
                                  <p>I'm part of another religion</p>
                                  <p>- Be understanding. You were once fooled by the promises of this world (Ephesians 2:1-3).</p>
                                  <p>- Ask questions about what their religion says about Jesus.</p>
                                  <p>- Listen to their answer</p>
                                  <p>- Their religion will worship no god, one god, many gods, acknowledge someone named Jesus, no acknowledge someone named Jesus, and/or look very similar to Christianity.</p>
                                </li>
                              </ol>
                            <h4>Gospel Rejections</h4>
                            <p>As your conversations focus on the Gospel, the unbeliever may reject the content of the Gospel message. It’s usually on this topic of evangelism that believers get the most nervous. Often our flesh wants to worry about what to say, how to say it, and what if you don’t know the answer to some question.</p>
                              <ol className="lesson-main-parts-order">
                                <li className="lesson-main-parts-list2">
                                  <p>Here is a helpful guide to deal with Gospel Rejections:</p>
                                  <p>- Listen</p>
                                  <p>- Pray</p>
                                  <p>- Ask Questions</p>
                                  <p>- Trust in the Lord's Strength</p>
                                  <p>- Point to Scripture</p>
                                  <p>- Get Back to the Gospel</p>
                                </li>
                              </ol>
                            <p>Let’s utilize this time to talk about the rejections people may have to the three components of the Gospel message.</p>
                            <h4>Rejecting the "Problem"</h4>
                            <ol className="lesson-main-parts-order">
                                <li className="lesson-main-parts-list2">
                                  <p>What is sin?</p>
                                  <p>- Sin is disobedience to God’s commands. We first see this in Genesis 3:17, in the context of Adam and Eve. Paul called Adam’s sin disobedience. "For as by the one man's disobedience the many were made sinners,..." (Romans 5:19a).</p>
                                </li>
                                <li className="lesson-main-parts-list2">
                                  <p>I'm a good person.</p>
                                  <p>- You may be sharing the Gospel with someone who considers themselves a good person. However, the Bible says no one is good (Romans 3:10-12), and we are all lawbreakers (James 2:10).</p>
                                </li>
                                <li className="lesson-main-parts-list2">
                                  <p>I'm too great a sinner.</p>
                                  <p>- You may be sharing the Gospel with someone who considers themselves to be too great a sinner. But the truth is that no sin is more powerful than Jesus. Also, we will never be able to get rid of our sin apart from Jesus. We se in the Bible that Jesus saves murderers (1 Timothy 1:15). We also see that Jessu died for us while we were sinners (Romans 5:6-8).</p>
                                </li>
                              </ol>
                            <h4>Rejecting the "Solution"</h4>
                              <ol className="lesson-main-parts-order">
                                <li className="lesson-main-parts-list2">
                                  <p>Who is Jesus?</p>
                                  <p>- The Word is God and became flesh (John 1:1-18). </p>
                                  <p>- Jesus is God (Philippians 2:5-6; John 10:33).</p>
                                  <p>- Jesus is Man (Matthew 1:23).</p>
                                </li>
                                <li className="lesson-main-parts-list2">
                                  <p>Why the Cross?</p>
                                  <p>- The wages of sin is death but God’s gift is eternal life through Jesus (Romans 6:23).</p>
                                  <p>- Old Testament promise (Genesis 3:15).</p>
                                  <p>- By His wound we are healed (Isaiah 52:13-15; 53).</p>
                                  <p>- Christ became a curse for us. (Galatians 3:13). </p>
                                  <p>- Jesus took our sin to give us His righteousness (2 Corinthians 5:21).</p>
                                </li>
                                <li className="lesson-main-parts-list2">
                                  <p>Why the Resurrection?</p>
                                  <p>- Fulfill Scripture (1 Corinthians 15:4)</p>
                                  <p>- Our faith is not in vain (1 Corinthians 15:17).</p>
                                  <p>- Victory through Christ (1 Corinthians 15:57) </p>
                                  <p>- Shows God’s might (Ephesians 1:19-20) </p>
                                  <p>- Christ is Lord! (Ephesians 1:21-22)</p>
                                </li>
                              </ol>
                            <h4>Rejecting the "Invitation"</h4>
                              <ol className="lesson-main-parts-order">
                                <li className="lesson-main-parts-list2">
                                  <p>I'm going to wait (live my life)</p>
                                  <p>- Man does not know his time of death (Ecclesiastes 9:12). </p>
                                  <p>- Man dies and then comes judgment (Hebrews 9:27).</p>
                                </li>
                                <li className="lesson-main-parts-list2">
                                  <p>I don't know what I need to do...</p>
                                  <p>- Faith, not works (Ephesians 2:8-9) </p>
                                  <p>- Repent and Believe (Mark 1:15)</p>
                                </li>
                              </ol>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="lesson-main-container-parts">
                <h2>Evangelism Exercise</h2>
                <div>
                    <ol className="lesson-main-parts-order">
                        <li className="lesson-main-parts-list">
                          <h3>Practice sharing the Gospel with yourself, church members, family, and friends.</h3>
                        </li>
                        <li className="lesson-main-parts-list">
                          <h3>Write down your testimony and memorize it. Have a shorter version for more time-sensitive conversations.</h3>
                        </li>
                        <li className="lesson-main-parts-list">
                          <h3>Join your church when they go out for corporate evangelism.</h3>
                        </li>
                        <li className="lesson-main-parts-list">
                          <h3>Set time in the week to evangelize and be ready for the unplanned conversations.</h3>
                        </li>
                        <li className="lesson-main-parts-list">
                          <h3>Pray, Pray, Pray</h3>
                        </li>
                        <li className="lesson-main-parts-list">
                          <h3>Keep an evangelism journal. Write the date you share the Gospel, who you share it with, and their response. Use this journal for accountability and to pray for those you share with.</h3>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="lesson-main-container-parts">
                <h2 className='lmcp-unique-bible-header'>Bible Verses to Know</h2>
                <div className='lmcp-exList lmpo-bible'>
                    <ol className="lesson-main-parts-order lmpo-bible-list">
                        <li className="lesson-main-parts-list lmcp-exList-parts lmpo-bible-list-border">
                            <p className='lmcp-bible-header'>Matthew 28:18-20</p>
                            <p>"And Jesus came and said to them, 'All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.'”</p>
                        </li>
                        <li className="lesson-main-parts-list lmcp-exList-parts lmpo-bible-list-border">
                            <p className='lmcp-bible-header'>Acts 1:8</p>
                            <p>"But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth."</p>
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

export default Evangelism