"use client"
import React from 'react'
import Card from '../ui/dashboard/card/card'
import Users from '../ui/dashboard/users/users'
import Rightbar from '../ui/dashboard/rightbar/rigthbar'
import styles from '../ui/dashboard/dashboard.module.css'
import {NextUIProvider} from "@nextui-org/react";
function Dashboard() {
  const data = [
    {title:"Biddables", number:"1,286", icon:"/assets/icons/IconA.svg", target:"-13.4%"},
    {title:"Sales", number:"482M", icon:"", target:"34%"},
    {title:"Expenses", number:"482M", icon:""},
    {title:"Transactions", number:"482M", icon:"/assets/icons/card.svg", target:"+28.14%"}
  ]
  return (
   <NextUIProvider>
    <div className={styles.wrapper}>
      <div className={styles.main}>
      <div className={styles.header}> {"Welcom James!"} </div>
      <div className={styles.cards}>
        {data.map((item)=>(

          <Card  item={item} key={item.title}/>
        ) )}
      </div>
      <Users/>
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>

    </NextUIProvider>
    
   
  )
}

export default Dashboard