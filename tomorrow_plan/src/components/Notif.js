import styles from './Notif.module.css'



const Notif = props => {




    return(
        <div className={styles.wrapper}>
            <p> {props.message} </p>
        </div>
    )

}


export default Notif