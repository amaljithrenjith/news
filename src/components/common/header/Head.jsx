import React from "react"
import  pic from "../../../Images/logo.png"
import  pic1 from "../../../Images/headerb.png"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB paddingTB'>
          <div className='logo'>
            <img src={pic}  alt='' />
          </div>
          <div className='ad'>
            <img src={pic1} alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
