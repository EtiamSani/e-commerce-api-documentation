import React from 'react'
import UiImage from '../../../static/img/Component UI.png';
import styles from './styles.module.css';


const UI = () => {
  return (
    <div className={styles['ui-container']}>
    <div className={styles['ui-text']}>Concentrez-vous sur votre interface, on s'occupe du reste !</div>
    <img src={UiImage} alt='UI Screenshot' className={styles['ui-image']} />
  </div>
    
  )
}

export default UI