import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './rightbar.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const data = [
  {
    name: 'JAN',
    uv: 0,
    pv: 0,

  },
  {
    name: 'FEB',
    uv: 300,
    pv: 300
  },
  {
    name: 'MAR',
    uv: 100,
    pv: 100,

  },
  {
    name: 'APR',
    uv: 400,
    pv: 400,

  },
  {
    name: 'AUG',
    uv: 150,
    pv: 150,

  },
  {
    name: 'SEB',
    uv: 550,
    pv: 550,

  }
];
function rigthbar() {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}> Totla Usres </span>
        <spna className={styles.option}>
          <MoreVertIcon />
        </spna>

      </div>
      <div className={styles.chartInfo}>

        <div className={styles.widget}>
          <img src='/assets/icons/Background.svg' width={30} height={30} className={styles.icon} />
          <div className={styles.desc}><span className={styles.nubmer}>23.2k</span> <span className={styles.role}>Developers</span></div>
        </div>
        <div className={styles.widget}>
          <img src='/assets/icons/Background-2.svg' width={30} height={30} className={styles.icon} />
          <div className={styles.desc}><span className={styles.nubmer}>23.2k</span> <span className={styles.role}>Investors</span></div>
        </div>

      </div>
      <div className={styles.chart}>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={700} height={100} data={data}>

            <XAxis dataKey="name" />

            <Tooltip />

            <Line type="monotone" dataKey="pv" stroke="#FFAB00" strokeWidth={4} dot={false} />

          </LineChart>
        </ResponsiveContainer>

      </div>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          You have done 57.6% more users.
          Check your new badge in your profile.
        </div>
        <div className={styles.arrowContainer}>
          <ArrowForwardIosIcon  color='warning'/>
        </div>
      </div>
    </div>
  )
}

export default rigthbar