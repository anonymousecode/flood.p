import React from 'react'
import Styles from '../styles/cform.module.css'

function Cform() {
  return (
    <div className={Styles['fdiv-container']}>
        <form>      
            <input name="name" type="text" className={Styles['feedback-input']} placeholder="Name" />
            <input name="email" type="text" className={Styles['feedback-input']} placeholder="Email" />
            <textarea name="text" className={Styles['feedback-input']} placeholder="Comment"></textarea>
            <button className={Styles['button-28']}>Submit</button>
        </form>
    </div>
  )
}

export default Cform