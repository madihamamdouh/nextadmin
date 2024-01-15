"use client"
import React from 'react'
import styles from './sidebaritem.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
function Sidebaritem({item}) {
  const pathname = usePathname()
  return (
  
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      
    
       
      <img className={ item.title === 'Analytics'? styles.icon : ''} src={item.icon} alt="itemIcon" width={20} height={20}  /> 
     <div className={styles.item}>{item.title}</div> 
    </Link>
  )
}

export default Sidebaritem