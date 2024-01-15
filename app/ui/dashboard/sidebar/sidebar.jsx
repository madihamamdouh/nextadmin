

import styles from './sidebar.module.css';
import { promises as fs  } from 'fs';
import path from 'path';
import Sidebaritem from './sidebaritems/sidebaritem';
import { title } from 'process';

function sidebar() {

  const Items= [{
    title:"the handover",
    logo:"assets/icons/logo.svg",
    list:[
    {
       title: "Dashboard",
        path: "/dashboard",
        icon: "/assets/icons/dashboard.svg"
    },
    {
       title: "Analytics",
        path: "/analytics",
        icon: "/assets/icons/circle1.svg"
    },
    {
       title: "Investors",
        path: "/investors",
        icon: "/assets/icons/investors.svg"
    },
    {
       title: "Developers",
        path: "/developers",
        icon: "/assets/icons/developers.svg"
    },
    {
       title: "Revenue",
        path: "/revenue",
        icon: "/assets/icons/revenue.svg"
    },
    {
       title: "Disputes",
        path: "/disputes",
        icon: "/assets/icons/dispute.svg"
    },
    {
       title: "Todo",
        path: "/todo",
        icon: "/assets/icons/todo.svg"
    },
    {
       title: "Calendar",
        path: "/calendar",
        icon: "/assets/icons/calendar.svg"
    },
    {
       title: "Chat",
        path: "/chat",
        icon: "/assets/icons/chat.svg"
    },
    {
       title: "Email",
        path: "/email",
        icon: "/assets/icons/email.svg"
    }
  ]
  }
]
  return (
    <>
    {Items.map((item) => ( 
        <div className={styles.container}>
      <div className={styles.logo} >

        <img src={item.logo} alt="" srcset="" />
      <span className={styles.title}>{item.title}</span>
      </div>
 <ul>
      {item.list.map((item)=>(
    <li className={styles.item}>
        <Sidebaritem item={item}  key={item.title}/>
    </li>
        ))
      }
 </ul>
    
 </div>
))}
    </>

  )
}

export default sidebar