import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import styles from './Preview.module.css'


const Preview = pops => {
    const plans = useSelector(state => state.plan.plans)

    return(
        <div className={styles.wrapper}>
            <p className={styles.header}>Plans</p>
            <div className={styles.plans}>
                {plans.map(pl => 
                    <div className={styles.item} key={pl.id}>
                        <p className={styles.time}>{`${pl.from_hour}:${pl.from_minute} تا ${pl.to_hour}:${pl.to_minute}`}</p>
                        <p className={styles.name}>{pl.name}</p>
                        <p className={styles.des}>{pl.description}</p>

                    </div>
                )}
            </div>
        </div>
    )
}


export default Preview