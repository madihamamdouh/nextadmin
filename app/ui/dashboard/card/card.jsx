import React from 'react'
import styles from './card.module.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function card({item}) {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                {item.icon && (
                    <>
                <span className={styles.icon}>
                    <img src={item.icon} alt="biddables-icon" />
                </span>

                <span className={styles.option}>
                    <MoreVertIcon />
                </span>
                    </>
                )}
            </div>
            <div className={styles.texts}>

                <span className={styles.title}>{item.title}</span>
                <span className={styles.number}>{item.number}</span>
                <div className={styles.details}>
                    <span >
                        <ArrowDownwardIcon />
                    </span>
                    <span>
                       {item.target}
                    </span>

                </div>
            </div>
        </div>
    )
}

export default card