"use client"
import React from 'react'
import styles from './navbar.module.css'

function navbar() {
  return (
    <div className={styles.container}>

      <div className={styles.search}>
        <img src="/assets/icons/search.svg" alt="" srcset="" />
        <input type="text" placeholder='Search (Ctl+/)' className={styles.searchbar} />
      </div>
      <div className={styles.icons}>
        <img src="/assets/icons/LR.png" alt="lang" width={32} height={32} />
        <img src="/assets/icons/Dark.svg" alt="dark-mode" width={23} height={23} />
        <img src="/assets/icons/App.svg" alt="dark-mode" width={23} height={23} />
        <img src="/assets/icons/alert.svg" alt="dark-mode" width={23} height={23} />
        <div className={styles.imgwrapper}>
          <img src="/assets/imgs/arash.png" alt=""  width={40} height={40}/>
        </div>
      </div>


    </div>
  )
}

export default navbar