import React from 'react';
import simg from '../images/solution.jpeg'; 
import Styles from '../styles/about.module.css'; 

function Solution() {
  return (
    <div className={Styles.container}>
     
      <div className={Styles.textContainer}>
        <h1>Our Solution</h1>
        <p>
          We provide a comprehensive flood prediction model that leverages advanced analytics and real-time data 
          to offer precise forecasts. By integrating environmental and socio-economic factors, our solution helps 
          communities prepare effectively and respond swiftly to flooding risks.
        </p>
      </div>
      <div className={Styles.imageContainer}>
        <img src={simg} alt="Solution" className={Styles.image} />
      </div>
    </div>
  );
}

export default Solution;
