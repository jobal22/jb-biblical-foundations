import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-links'>
            <ol>
                <li>
                    <a className="FIcon far fa-envelope"
                  href="mailto:jobalbaldwin@gmail.com"
                  aria-hidden="true"
                  rel="noopener noreferrer"></a>
                </li>
                <li>
                    <a className="FIcon fab fa-linkedin-in"
                  href="https://www.linkedin.com/in/jobal/"
                  target="_blank"
                  aria-hidden="true"
                  rel="noopener noreferrer"></a>
                </li>
            </ol>
        </div>
        <div className='footer-closing'>
            <p>All Rights Reserved</p>
            <p>All Scripture is from the English Standard Version</p>
        </div>
    </div>
  )
}

export default Footer