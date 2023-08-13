import React from 'react'
import {AiFillYoutube,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>MBA Burger Wala</h2>
            <p>We are trying to give you the best taste possible</p>
            <br/>
            <em>We give attention to genuine feedback</em>
            <strong>All right reserved @mbaburgerwala</strong>
        </div>
        <aside>
            <h4>Follow Us</h4>
            <a href="https://www.youtube.com"><AiFillYoutube/></a>
            <a href="https://github.com/sumitme00117"><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/sumitme00117/"><AiFillLinkedin/></a>
        </aside>
    </footer>
  )
}

export default Footer
