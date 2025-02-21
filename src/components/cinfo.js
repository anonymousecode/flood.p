import React from 'react'
import Styles from '../styles/cinfo.module.css'
import cimage from '../images/contact.png'

function Cinfo() {
  return (
    <div className={Styles.divcontainer}>
        <h1 className={Styles.h1}>Contact us</h1> 
        <p className={Styles.p}>We'd love to hear from you! Whether you have questions, 
          feedback, or need assistance, feel free to reach out. Our team is here to help you.
        </p>
        <img src={cimage} className={Styles.cimage} alt='info' />
        
    </div>
  )
}

export default Cinfo