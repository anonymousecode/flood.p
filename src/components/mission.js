import React from 'react';
import mimg from '../images/mission.jpeg';
import Styles from '../styles/about.module.css';

function Mission() {
  return (
    <div className={Styles.container}>
      <div className={Styles.textContainer}>
        <h1>Our Mission</h1>
        <p>
          Our goal is to create a data-driven model that predicts flood likelihood by analyzing key environmental, 
          infrastructural, and socio-economic factors. We aim to provide an accurate and actionable early warning system to 
          save lives and reduce damage.
        </p>
      </div>
      <div className={Styles.imageContainer}>
        <img src={mimg} alt="Mission" className={Styles.image} />
      </div>
    </div>
  );
}

export default Mission;
