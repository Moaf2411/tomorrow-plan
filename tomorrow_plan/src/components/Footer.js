import styles from './Footer.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { notifActions } from '../store'


const Footer = props => {
    const dispatch = useDispatch()
    const mode = useSelector(state => state.notification.mode)

    const toggleLight = () => {
        dispatch(notifActions.toggleMode('light'))
    }
    const toggleDark = () => {
        dispatch(notifActions.toggleMode('dark'))
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.switch}>
                <div className={mode==='light'? `${styles.light} ${styles.act}`:styles.light} onClick={toggleLight}>light</div>
                <div className={mode==='dark'? `${styles.dark} ${styles.act}`:styles.dark} onClick={toggleDark}>dark</div>
            </div>
        </div>
    )
}



export default Footer