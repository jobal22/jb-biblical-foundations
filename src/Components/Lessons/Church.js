import React from 'react'
import "./Lesson.css"
import logo from "../../img/Church.png"
import LessonTable from "../LessonTable"

function Church() {
  return (
    <div className='lesson-container'>
        <div className='lesson-header-container'>
            <div className='lesson-header-title'>
                <h1>The Church</h1>
                <p className='guideTitle'>New Beliver's Guide</p>
                <p className='lesCount'>Lesson 8</p>
            </div>
            <div className='lesson-header-img'>
                <img src={logo} alt="church icon" />
            </div>
        </div>
        <div className='lesson-main-verse-container lmvc-church'>
            <div className='lesson-main-verse'>
                <div className='lesson-main-verse-box'></div>
                <p className='lesson-main-verse-p'>"that which we have seen and heard we proclaim also to you, so that you too may have fellowship with us; and indeed our fellowship is with the Father and with his Son Jesus Christ." <br/> 1 John 1:3</p>
            </div>
        </div>
        <div className='lesson-main-container'>
            <div className='lesson-main-breakdown'>
                <h2>Learning Objective</h2>
                <p>This lesson will help you understand what the Church is and how to fellowship with other believers</p>
                <h2>Overview</h2>
                <p>The Church is vital for every believer. As believers gather, they worship God and help each other mature. You need other believers in order to grow with Christ.</p>
                <h2>What is the Church?</h2>
                <p>The Church is a group of believers who gather to worship God, build each other up in love, and share the Gospel with the lost. Let's look at the different ways the Bible describes the Church and its function.  </p>
            </div>
            <div className="lesson-main-container-parts">
                <h2>The Church</h2>
                <p>Often, the church is mistaken for a building. However, the church is the assembly of those who believe in Jesus Christ as Lord and Savior. The building that the church meets in is not the Lord’s House. The church (the believers) is the Lord’s House. We are being built together into a dwelling place for God (Ephesians 2:22). In the Bible, the church is referred to as a household, plant, bride, body, and flock.</p>
                <h3 className='prayer-unique-header'>Household</h3>
                <p>When the church is referred to as a household, God says thatthe foundation, like any house, is a rock (Matthew 7:24). The rock is the truth that Jesus is the Christ, the Son of the living God (Matthew 16:16-18). Jesus is the most important part of this household (Ephesians 2:20-21). If the Church's focus is not Christ, then it will not stand (Matthew 7:26-27).</p>
                <h3 className='prayer-unique-header'>The Plant</h3>
                <p>When the Church is referred to as a plant, God says that the seed must be planted and watered. Yet, God does the growing (1 Corinthians 3:6-7). As a field worker focuses on the harvest, so will the church focus on leading people to Jesus (Luke 10:2). Under the illustration of a field, the Bible talks about the danger of weeds (those who mean to harm the church) mixed with the crops (Matthew 13:24-30). </p>
                <h3 className='prayer-unique-header'>The Bride</h3>
                <p>The Bible refers to the Church as the bride of Christ (2 Corinthians 11:2). This reference should direct our attention to Christ as the husband and our need to submit to Him. Christ loves the Church, died for her, sanctifies her, cleanses her, nourishes her, and cherishes her. He presents the Church as holy and without blemish (Ephesians 5:25-33). The Church’s responsibility is submission to Christ (Ephesians 5:22-24).</p>
                <h3 className='prayer-unique-header'>The Body</h3>
                <p>The Church, as the body of Christ, focuses on unity. Since Christ died, was resurrected, and is now seated in the heavenly places, He is over all things and is the head of the Church, which is His body (Ephesians 1:20-23). Through the Gospel, anyone who believes in Jesus is a member of the same body and partaker of the promise in Jesus (Ephesians 3:6; 4:4). Jesus desires maturity for His body. He gave gifts to the Church to equip each member for their ministry, to build up the body, so that we speak the truth in love (Ephesians 4:11-16).</p>
                <h3 className='prayer-unique-header'>The Flock</h3>
                <p>The Flock of God reference highlights Jesus as the Good Shepherd (John 10:11, 14). He laid down His life for the Church (John 10:11). Jesus knows those who believe in Him, and we know Him (John 10:14-15). Because Jesus is the Shephard, no one can take us away from Him. He protects the Church and has authority over the Church (John 10:18). Jesus has appointed Elders (Pastors) over the Church to shepherd (1 Peter 5:2), be an example (1 Peter 5:3), watch over, and care for the Church (Acts 20:28).</p>
            </div>
            <div className="lesson-main-container-parts">
              <h2>Gathering Together</h2>
              <p>In Acts 2:42-47, the Church gathers to devote itself to the Word, fellowship, breaking bread, and prayer. The result of the devotion, fellowship, meals, and prayer is saved souls. The Church shares the Gospel with the lost and sees people saved.</p>
              <h3 className='prayer-unique-header'>Devoted to the Word</h3>
              <p>When the Church meets together, her primary focus is to glorify God.  To do this, she must be devoted to the Word of God (Acts 2:42). Because the Word of God is important in your everyday life, the Church must come together under the Bible's teachings. The philosophies of man are captivating. They have the appearance of wisdom but are of no value (Colossians 2:8, 23). However, the Word of God never returns empty and always accomplishes its purpose (Isaiah 55:11). God uses it to renew our minds so that we can better discern His will (Romans 12:2).</p>
              <h3 className='prayer-unique-header'>Fellowship</h3>
              <p>As the Church aims to glorify God, she devotes herself to fellowship with each other (Acts 2:42). We can have a deep spiritual relationship with each other because God called us into fellowship with His Son (1 Corinthians 1:9). Through our relationship with Jesus, we now have fellowship with the Holy Spirit (2 Corinthians 13:14). We can have fellowship with each other because of the Holy Spirit (Acts 2:42; 1 John 1:3). The Holy Spirit allows us to have all things in common, meet each other’s needs, meet regularly to praise God, and share the Gospel alongside each other (Acts 2:44-47).</p>
              <h3 className='prayer-unique-header'>Breaking Bread</h3>
              <p>The Lord’s Supper is another way that the Church glorifies God together. It consists of prayer, bread, and wine, but centers around Christ. In Matthew 26:26-29, we see Jesus administering the Lord’s Supper as He ate with His disciples. Jesus broke the bread as a representation of His body for us. Then, He took the cup of wine as a representation of the new covenant He made through His blood. The disciples ate the bread and drank the wine (1 Corinthians 11:24-26).</p>
              <p>At least four important things happen when the Church participates in the Lord’s Supper. 1) the Lord’s Supper helps place our minds on the works of Christ. Jesus tells us to eat the bread and drink the wine in remembrance of Him (1 Corinthians 11:24-25). 2) Our participation in the Lord’s Supper is a way to proclaim the death of Christ until He returns (1 Corinthians 11:26). 3) The Apostle Paul encourages us to examine our hearts before we take the Lord’s Supper. If we approach it with sinful hearts, we are placing judgement on ourselves. A consequence of not examining our hearts and drawing near to God is weakness, illness, and sometimes death. This practice of self-reflection keeps us from being condemned by the world (1 Corinthians 11:27-32). 4) The Lord’s Supper promotes unity in the Church (1 Corinthians 11:33-34). God deeply desires unity in the Church (Ephesians 4:3).</p>
              <h3 className='prayer-unique-header'>Prayer</h3>
              <p>Prayer gives the Church a time to glorify God, grow closer to Him, and present our concerns to Him about our own and others' physical, mental, and spiritual needs and problems. When the Church prays in the Book of Acts, God moves in a mighty way. He helps the Church speak boldly of the Gospel (Acts 4:31). He gives us specific ministries (Acts 6:6; 14:23), and He amazes us (Acts 12:5, 16).</p>
              <h3 className='prayer-unique-header'>Results</h3>
              <p>The Church brings glory to God with the fruit of her labor. Throughout the Book of Acts, God uses the Church’s fellowship as an opportunity to proclaim the Gospel and save the lost. When the Holy Spirit came down on the Church in Acts 2, Peter began preaching to a crowd about the Holy Spirit. He invited people to be saved, and God added three thousand souls (Acts 2:41). Through the fellowship of the Church as they proclaimed the Gospel, God added to their number daily those who were being saved (Acts 2:47; 5:14; 6:7; 9:31; 11:21, 24). The Church shall never forget God’s expectation for each member to verbally share His Good News and invite the world to repent and believe in Jesus as Lord and Savior. The Church is equipped by God for this very work, and He is with her in this very work.</p>
            </div>
            <div className="lesson-main-container-parts">
              <h2>Exercise</h2>
              <h3 className='prayer-unique-header'>Attend</h3>
              <p>Attend a local Church that has a high view of Scripture, preaches it, and builds everything they do off the Gospel.</p>
              <h3 className='prayer-unique-header'>Build</h3>
              <p>Participate in building community at your Church. This can be done by joining a small group (ex., Sunday School, accountability group, etc). Utilize this time to form deeper relationships with God and those in your class. They should be sharpening you as you are also sharpening them.</p>
              <h3 className='prayer-unique-header'>Contribute</h3>
              <p>Contribute to your local church through serving on a ministry team or leading a small group. Another very important aspect of contributing to your local Church is bringing your tithes and offerings, as this helps the church function financially.</p>
            </div>
            <div className="lesson-main-container-parts">
                <h2 className='lmcp-unique-bible-header'>Bible Verses to Know</h2>
                <div className='lmcp-exList lmpo-bible'>
                    <ol className="lesson-main-parts-order lmpo-bible-list">
                        <li className="lesson-main-parts-list lmcp-exList-parts lmpo-bible-list-border">
                            <p className='lmcp-bible-header'>1 John 1:3</p>
                            <p>"that which we have seen and heard we proclaim also to you, so that you too may have fellowship with us; and indeed our fellowship is with the Father and with his Son Jesus Christ."</p>
                        </li>
                        <li className="lesson-main-parts-list lmcp-exList-parts lmpo-bible-list-border">
                            <p className='lmcp-bible-header'>Hebrews 10:24-25</p>
                            <p>"And let us consider how to stir up one another to love and good works, 25 not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near."</p>
                        </li>
                        <li className="lesson-main-parts-list lmcp-exList-parts lmpo-bible-list-border">
                            <p className='lmcp-bible-header'>Ephesians 4:15-16</p>
                            <p>"Rather, speaking the truth in love, we are to grow up in every way into him who is the head, into Christ, 16 from whom the whole body, joined and held together by every joint with which it is equipped, when each part is working properly, makes the body grow so that it builds itself up in love."</p>
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

export default Church