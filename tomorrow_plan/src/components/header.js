import {React} from 'react'
import styles from './header.module.css'
import { useNavigate, NavLink } from 'react-router-dom'

const Header = props => {
    const navigate = useNavigate()
    const gohome = () => {
        navigate('/', {replace:true})
    }
    const goprev = () => {
        navigate('/preview' , {replace:true})
    }



    return(
        <div className={styles.wrapper}>
            <div className={styles.top}></div>
            <p className={styles.logo}> tomorrow-plan</p>
            
            <ul className={styles.navbar}>
                <NavLink className={(nav) => nav.isActive? `${styles.nav} ${styles.act}`:styles.nav } to='/preview' >Preview</NavLink>
                <NavLink className={(nav) => nav.isActive? `${styles.nav} ${styles.act}`:styles.nav }  to='/' >Home</NavLink>
            </ul>
        </div>
    )


}


export default Header