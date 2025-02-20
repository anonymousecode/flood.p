import React from 'react'
import Cform from '../components/cform'
import Cinfo from '../components/cinfo'
import Styles from '../styles/contact.module.css'

function Contact() {
  return (
    <div className={Styles['contact-container']}>
      <Cinfo/>
      <Cform/>  
    </div>
  )
}

export default Contact