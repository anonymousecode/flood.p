import React from 'react'
import Styles from '../styles/about.module.css'
import wimg from '../images/why.jpeg'

function Why() {
  return (
    <div>
        <div className={Styles.container}>
      
      <div className={Styles.textContainer}>
        <h1>Why It Matters</h1>
        <p>
          Floods are one of the most destructive natural disasters, impacting millions each year. Accurate predictions are essential 
          for timely alerts, infrastructure protection, resource allocation, and long-term urban planning. By understanding flood risks, 
          we can save lives and minimize damages.
        </p>
      </div>
      <div className={Styles.imageContainer}>
        <img src={wimg} alt="Why It Matters" className={Styles.image} />
      </div>
    </div>
    </div>
  )
}

export default Why