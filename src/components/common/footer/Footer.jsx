import React from "react"
import { Link } from "react-router-dom"
import "./footer.css"
import pic4 from "../../../Images/tech-logo-footer.png"
import pic5 from "../../../Images/hero/hero1.jpg"
import pic6 from "../../../Images/hero/hero2.jpg"
import pic7 from "../../../Images/hero/hero3.jpg"


const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src={pic4} alt='' />
            <p>Busan is an amazing magazine Blogger theme that is easy to customize for your needs</p>
            <i className='fa fa-envelope'></i>
            <span> hello@beautiful.com </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +91 60521488</span>
          </div>
          <div className='box'>
            <h3>SPORT</h3>
            <div className='item'>
              <img src={pic5} alt='' />
              <p>Google To Boost Android Security In Few Days</p>
            </div>
            <div className='item'>
              <img src={pic6} alt='' />
              <p>Cespedes play the winning Baseball Game</p>
            </div>
          </div>
          <div className='box'>
            <h3>CRICKET</h3>
            <div className='item'>
              <img src={pic7} alt='' />
              <p>US Promises to give Intel aid to locate the soldiers</p>
            </div>
            <div className='item'>
              <img src={pic5} alt='' />
              <p>Renewable energy dead as industry waits for Policy</p>
            </div>
          </div>
          <div className='box'>
            <h3>LABELS</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
            <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/culture'>Culture</Link>
              </li>
              <li>
                <Link to='/politics'>Politics</Link>
              </li>
              <li>
                <Link to='/memes'>Memes</Link>
              </li>
              <li>
                <Link to='/sports'>Sports</Link>
              </li>
              <li>
                <Link to='/boxed'>Boxed</Link>
              </li>
              <li>
                <Link to='/reviews'>Reviews</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
          <p>
            made with <i className='fa fa-heart'></i> by amaljith
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
