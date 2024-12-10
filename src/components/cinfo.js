import React from 'react'
import Styles from '../styles/cinfo.module.css'
import cimage from '../images/contact.png'

function Cinfo() {
  return (
    <div className={Styles.divcontainer}>
        <h1 className={Styles.h1}>Contact us</h1> 
        <p className={Styles.p}>Need to get in touch with us? Either fill the form with your enquiry or find the
            department phone number you'd like to contact below.
        </p>
        <img src={cimage} className={Styles.cimage} />
        
    </div>
  )
}

export default Cinfo