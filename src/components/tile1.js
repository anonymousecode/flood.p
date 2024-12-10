import React from 'react'
import Styles from '../styles/tile1.module.css'
import { Link } from 'react-router-dom'

function Tile1() {
  return (
    <div className={Styles.main} ><br />
        <h1 className={Styles.title}>FLOOD PREDICTION SYSTEM</h1>
        <h3 className={Styles.subTitle}>STAY INFORMED, STAY SAFE : FLOOD PREDICTION AT YOUR FINGERTIPS</h3>
        <br /><br />
        <Link to="/Predictor"><button className={Styles['button-30']} >FLOOD PREDICTION</button></Link>
    </div>
  )
}

export default Tile1