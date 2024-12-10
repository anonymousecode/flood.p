import React from 'react'
import Styles from '../styles/footer.module.css'

function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className={Styles['footer']}>{`Copyright © <flood.p/>  ${year}`}</footer>
  )
}

export default Footer