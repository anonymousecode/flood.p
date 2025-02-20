import React from 'react'
import {Link} from 'react-router-dom'
import Styles from '../styles/header.module.css'

function Header() {
  return (
    <div>
      <header  class={Styles.Header}>
        <h2 className={Styles.logo}>&lt; flood.p /&gt;</h2>
        <nav class={Styles.Nav}>
            <ul className={Styles['nav-nav']}>
              <li className={Styles['nav-item']}><Link to="/" className={Styles['nav-link']}>Home</Link></li>
              <li className={Styles['nav-item']}><Link to="/Predictor" className={Styles['nav-link']}>Predict</Link></li>
              <li className={Styles['nav-item']}><Link to="/Weather" className={Styles['nav-link']}>Weather</Link></li>
              <li className={Styles['nav-item']}><Link to="/Contact" className={Styles['nav-link']}> Contact</Link></li>
              <li className={Styles['nav-item']}><Link to="/About" className={Styles['nav-link']}> About</Link></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header;