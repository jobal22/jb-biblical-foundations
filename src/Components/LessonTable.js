import React from 'react'
import {Link} from 'react-router-dom'
import "./LessonTable.css"

function CustomLink({ to, style, children, ...props }) {
    const pathname = window.location.pathname;
    const pathId = pathname.split('/').pop();
    console.log('this is pathname', pathname);
    console.log('this is pathId', pathId);
    const art = "gospel";
    function bob(nark) {
        if(nark === art){
            return 'yes';
        } else {
            return 'no';
        }
    };
    console.log('this is new function', bob('gospel'));

    const isLink = to === pathname;

    const combinedStyle = {
        ...style,
        ...(isLink ? { color: '#af9e7a'} : {}),
    };

    return (
        <Link to={to} style={combinedStyle} {...props}>{children}</Link>
    )
}


function LessonTable() {
    

  return (
    <div className='lessonTable-container'>
        <h2>What's Next</h2>
        <div className='lessonTable-lessons-container'>
            <CustomLink to={`/discipleship/`} className='lessonTable-lessons-link'>
                <div className='lessonTable-lessons'>
                    <h3 >The Overview</h3>
                    <p>View &#8594;</p>
                </div>
            </CustomLink>
            <hr className='lessonTable-hr'/>
            <CustomLink to={`/discipleship/gospel`} className='lessonTable-lessons-link'>
                <div className='lessonTable-lessons'>
                    <h3 >The Gospel</h3>
                    <p>View &#8594;</p>
                </div>
            </CustomLink>
            <hr className='lessonTable-hr'/>
            <CustomLink to={`/discipleship/testimony`} className='lessonTable-lessons-link'>
                <div className='lessonTable-lessons'>
                    <h3 >Testimony</h3>
                    <p>View &#8594;</p>
                </div>
            </CustomLink>
            <hr className='lessonTable-hr'/>
            <CustomLink to={`/discipleship/assurance`} className='lessonTable-lessons-link'>
                <div className='lessonTable-lessons'>
                    <h3 >Assurance</h3>
                    <p>View &#8594;</p>
                </div>
            </CustomLink>
            <hr className='lessonTable-hr'/>
            <CustomLink to={`/discipleship/baptism`} className='lessonTable-lessons-link'>
                <div className='lessonTable-lessons'>
                    <h3 >Baptism</h3>
                    <p>View &#8594;</p>
                </div>
            </CustomLink>
            <hr className='lessonTable-hr'/>
            <CustomLink to={`/discipleship/evangelism`} className='lessonTable-lessons-link'>
                <div className='lessonTable-lessons'>
                    <h3 >Evangelism</h3>
                    <p>View &#8594;</p>
                </div>
            </CustomLink>
            <hr className='lessonTable-hr'/>
            <CustomLink to={`/discipleship/bible`} className='lessonTable-lessons-link'>
                <div className='lessonTable-lessons'>
                    <h3 >Bible</h3>
                    <p>View &#8594;</p>
                </div>
            </CustomLink>
            <hr className='lessonTable-hr'/>
            <CustomLink to={`/discipleship/prayer`} className='lessonTable-lessons-link'>
                <div className='lessonTable-lessons'>
                    <h3 >Prayer</h3>
                    <p>View &#8594;</p>
                </div>
            </CustomLink>
            <hr className='lessonTable-hr'/>
            <CustomLink to={`/discipleship/church`} className='lessonTable-lessons-link'>
                <div className='lessonTable-lessons'>
                    <h3 >Church</h3>
                    <p>View &#8594;</p>
                </div>
            </CustomLink>
            <hr className='lessonTable-hr'/>
        </div>
    </div>
  )
}

export default LessonTable

{/* <div className='lessonTable-lessons'>
    <h3 >The Overview</h3>
    <Link to={`/discipleship/`} className='lessonTable-lessons-link'>View &#8594;</Link>
</div> */}