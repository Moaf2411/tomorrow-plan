import {React,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { planActions } from '../store/index.js'
import { notifActions } from '../store/index.js'

import styles from './Planner.module.css'
import Form from './Form.js'

const Planner = props => {
    const dispatch = useDispatch()
    const plans = useSelector(state => state.plan.plans)



    const submit = data => {
        dispatch(planActions.add(data))
    }

    const raise = data => {
        if(!data){
            dispatch(notifActions.toggleNotif(false))
            return
        }
        dispatch(notifActions.toggleNotif(true))
        dispatch(notifActions.setMessage(data))
    }


    return(
        <div className={styles.wrapper}>
            
            <div className={styles.plans}>
                {plans.map(pl => 
                    <div className={styles.item} key={pl.id}>
                        <p className={styles.time}>{`${pl.from_hour}:${pl.from_minute} تا ${pl.to_hour}:${pl.to_minute}`}</p>
                        <p className={styles.name}>{pl.name}</p>
                        <p className={styles.des}>{pl.description}</p>

                    </div>
                )}
            </div>

            <Form submit={submit} raise={raise}/>
            
        </div>

    )
}



export default Planner;
