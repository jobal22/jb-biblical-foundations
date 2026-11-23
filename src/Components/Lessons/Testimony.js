import React from 'react'
import "./Lesson.css"
import logo from "../../img/Testimony.png"
import LessonTable from "../LessonTable"

function Testimony() {
  return (
    <div className='lesson-container'>
        <div className='lesson-header-container'>
            <div className='lesson-header-title'>
                <h1>Testimony</h1>
                <p className='guideTitle'>New Beliver's Guide</p>
                <p className='lesCount'>Lesson 2</p>
            </div>
            <div className='lesson-header-img'>
                <img src={logo} alt="testimony icon" />
            </div>
        </div>
        <div className='lesson-main-verse-container lmvc-testimony'>
            <div className='lesson-main-verse'>
                <div className='lesson-main-verse-box'></div>
                <p className='lesson-main-verse-p'>"For by grace you have been saved through faith. And this is not your own doing; it is the gift of God," <br/> Ephesians 2:8</p>
            </div>
        </div>
        <div className='lesson-main-container'>
            <div className='lesson-main-breakdown'>
                <h2>Learning Objective</h2>
                <p>By the end of this lesson, you will have a working copy of your testimony and the ability to share a shortened and extended version.</p>
                <h2>Overview</h2>
                <p>Your testimony is very important. It communicates how the Gospel has personally changed your life.</p>
                <h2>What is a Testimony and Its Purpose?</h2>
                <p>A Testimony is a way in which we can communicate/witness about God’s saving power, specifically in our lives. Your testimony communicates the Gospel (Matthew 24:14), shares your salvation story (John 4:39), and highlights God’s greatness (Acts 4:33). God can use our testimony to demonstrate our salvation to other believers (Galatians 1:22-24). He can also use our testimony to allow unbelievers to hear the Gospel (Acts 26:12-29).</p>
                <p>There are at least three major parts to a believer’s testimony: 1) Your life before salvation, 2) How you got saved, and 3) Your life with Christ. A testimony functions best when it contains Scripture. We tend to focus more on part I of our testimony to highlight how bad we were. However, the most important section of your testimony is part II. This is most important because it contains the Gospel. The Gospel is what the world needs to hear. You will spend the most time sharing this section so your listener(s) can respond to the Gospel message.</p>
                <p>Let's look at the three parts of a believer's testimony while utilizing Ephesians 2:1-10.</p>
            </div>
            <div className="lesson-main-container-parts">
                <h2>Testimony Breakdown</h2>
                <div>
                    <ol className="lesson-main-parts-order">
                        <li className="lesson-main-parts-list">
                            <h3>Your Life Before Christ</h3>
                            <p>As we discussed in the Gospel Lesson, every person has sinned except Jesus. As the Apostle Paul details his testimony in Acts 22:1-22, Acts 26:12-29, and Galatians 1:11-22; 2:1-10, he speaks of his life as an unbeliever. This details his sins and need for Jesus’ salvation.</p>
                            <p>In Ephesians 2:1-10, Paul provides a template for the believers' testimony. The first three verses detail someone’s life before salvation.  These verses provide a description, the direction, and the destination for unbelievers. The Bible describes a lost person as dead (Ephesians 2:1). Physically, we will all die, but the unbeliever is spiritually dead, separate from God. The unbeliever's direction has to do with the authority they are under and their behavior. The unbeliever lives under the authority of the world, the devil, and the flesh and behaves within the sinful desires of their own will (Ephesians 2:1-3). The wrath of God functions as the destination for unbelievers (Ephesians 2:3). Paul says that those who do not know God and do not obey the gospel of Jesus “will suffer the punishment of eternal destruction, away from the presence of the Lord and from the glory of his might (2 Thessalonians 1:9).</p>
                        </li>
                        <li className="lesson-main-parts-list">
                            <h3>How You Got Saved</h3>
                            <p>Jesus is the only solution to the problem of sin. As discussed in the Gospel lesson, the only way sin can be forgiven is at the price of a life (Hebrews 9:22). In the Old Testament, Israel could use animals as sacrifices for their sins. The animals in the Old Testament remained dead, and every time Israel sinned, they would sacrifice animals (Hebrews 10:3-4). However, Jesus came and died on the cross as the ultimate sacrifice for the sins of the world. Then, He rose from the grave after three days. He died for all of our sins once and for all (Hebrews 10:10). He will never die again, and we do not need any other sacrifice for the forgiveness of sin (Romans 6:9-10). He paid the full cost (John 19:30).</p>
                            <p>In Ephesians 2:4-9, the Bible demonstrates God’s great love in salvation. These verses describe God (Ephesians 2:4), tell of His love poured out (Ephesians 2:5-7), and His love at work (Ephesians 2:8-9).</p>
                            <p>God is described as rich in mercy because of His great love (Eph 2:4). God doesn’t desire sacrifice. He actually desires mercy because He is a merciful God (Matthew 9:13). This means that God does not give us what we deserve.  We deserve death and separation (Romans 3:23; 6:23). However, when Jesus came to the earth, He did not come for the righteous, but for the sinners (Matthew 9:13). He did not come to condemn but to save (John 3:17). His mercy comes from His great love (Romans 5:8).</p>
                            <p>God poured this love out on us through His Son. He didn’t call us to fix our own sin problem and then come to Him. Instead, He came to us to fix our sin problem (John 3:16; Romans 5:8). Jesus died on the cross for our sins and rose from the grave so that we could have a forever relationship with God (Romans 4:24). Through Jesus, He demonstrated His grace. This means that God gave us what we did not deserve. We do not deserve our sins to be forever removed, nor a forever relationship with God. However, through Jesus' death and resurrection, God made us alive, raised, and seated with Him (Ephesians 2:5-6). In all of this, God is showing His kindness to us and the world (Ephesians 2:7).</p>
                            <p>Ephesians 2:8-9 shows God’s love at work. The Bible says our works do not help save us (Ephesians 2:8). If salvation came through works, we could boast in ourselves instead of Jesus (Ephesians 2:9). The Bible says our salvation is given through God’s grace. We receive salvation by placing our faith in Jesus. When we place our faith in Jesus, we are withdrawing our faith from something else. This is commonly referred to as repentance. When we place our faith in Jesus, we are trusting in Him as Savior and Lord. He is the only one who could save us, and He is the King of kings.</p>
                        </li>
                        <li className="lesson-main-parts-list">
                            <h3>Your Life With Christ</h3>
                            <p>When we put our faith in Jesus and receive salvation, we are not instantly zapped into heaven. God leaves us on earth because there is work to be done. We are servants of God.</p>
                            <p>We see God’s plan for us in Ephesians 2:10. Through Jesus, we belong to God. We are God’s workmanship. We are made new through Jesus. The old life is gone, and we now live in our new relationship with God (2 Corinthians 5:17). In our new life, we live for God’s purpose. His purpose is to love Him and love others by making disciples of all nations (Matthew 22:36-40; 28:18-20).</p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="lesson-main-container-parts">
                <h2>Testimony Exercise</h2>
                <p>If you are saved, you have a testimony. This is a personal way to share the Gospel with unbelievers. It lets you share your personal story and how Jesus has specifically changed your life.</p>
                <p>Write your testimony down on one sheet of paper. Make sure to include all three sections:</p>
                <div className='lmcp-exList testimony-unique'>
                    <ol className="lesson-main-parts-order">
                        <li className="lesson-main-parts-list lmcp-exList-parts testimony-bd">
                            <p>Your Life Before Salvation</p>
                        </li>
                        <li className="lesson-main-parts-list lmcp-exList-parts testimony-bd">
                            <p>How You Got Saved</p>
                        </li>
                        <li className="lesson-main-parts-list lmcp-exList-parts testimony-bd">
                            <p>Your Life with Christ</p>
                        </li>
                    </ol>
                </div>
                <p>When writing your testimony, make sure that the Gospel is the main focus. Writing your testimony will help you to organize your thoughts and better memorize your story. You will want to be able to share your testimony in a few different ways. First, see if you can share your testimony in 5 minutes. This will allow you to share your story naturally in conversation. Second, see if you can share your testimony in 1 minute. Sometimes people don't have enough time to get into a conversation, but we can still share a shortened version of our story.</p>
                <p>Think about at least three people that you can share your testimony with this week.</p>
            </div>
            <div className="lesson-main-container-parts">
                <h2 className='lmcp-unique-bible-header'>Bible Verses to Know</h2>
                <div className='lmcp-exList lmpo-bible'>
                    <ol className="lesson-main-parts-order lmpo-bible-list">
                        <li className="lesson-main-parts-list lmcp-exList-parts lmpo-bible-list-border">
                            <p className='lmcp-bible-header'>Ephesians 2:1-3</p>
                            <p>"And you were dead in the trespasses and sins in which you once walked, following the course of this world, following the prince of the power of the air, the spirit that is now at work in the sons of disobedience — among whom we all once lived in the passions of our flesh, carrying out the desires of the body and the mind, and were by nature children of wrath, like the rest of mankind."</p>
                        </li>
                        <li className="lesson-main-parts-list lmcp-exList-parts lmpo-bible-list-border">
                            <p className='lmcp-bible-header'>Ephesians 2:4-9</p>
                            <p>"But God, being rich in mercy, because of the great love with which he loved us, 5 even when we were dead in our trespasses, made us alive together with Christ—by grace you have been saved— 6 and raised us up with him and seated us with him in the heavenly places in Christ Jesus, 7 so that in the coming ages he might show the immeasurable riches of his grace in kindness toward us in Christ Jesus. 8 For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, 9 not a result of works, so that no one may boast."</p>
                        </li>
                        <li className="lesson-main-parts-list lmcp-exList-parts lmpo-bible-list-border">
                            <p className='lmcp-bible-header'>Ephesians 2:10</p>
                            <p>"For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them."</p>
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

export default Testimony