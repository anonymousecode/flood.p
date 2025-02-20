import React from 'react'
import Styles from '../styles/about.module.css'
import Mission from '../components/mission'
import Why from '../components/why'
import Solution from '../components/solution'

function About() {
  return (
    <div>
       <h1 className={Styles.heading}>About us</h1>
        <Mission />
        <Why/>
        <Solution/>
    </div>
  )
}

export default About