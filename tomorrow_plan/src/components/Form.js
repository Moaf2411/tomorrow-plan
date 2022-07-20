import { useRef, useState } from 'react'
import styles from './Form.module.css'
import { useDispatch } from 'react-redux'
import { planActions } from '../store/index.js'


const Form = props => {
    const [err,setErr] = useState(' ')
    const name = useRef()
    const des = useRef()
    const from_hour = useRef()
    const from_minute = useRef()
    const to_hour = useRef()
    const to_minute = useRef()
    const dispatch = useDispatch()


    const submit = e => {
        e.preventDefault()
        let form = e.target.parentElement
        let children = form.children
        let ok = true
        if(name.current.value == ''){
            setErr(styles.error)
            props.raise('an error has occured!') // error message
            ok = false
        }
        else if( (Number(from_hour.current.value)*100+Number(from_minute.current.value)) >= (Number(to_hour.current.value)*100+Number(to_minute.current.value)) ){
            setErr(styles.error)
            props.raise('an error has occured!') // error message
            ok = false
        }



        for(let i = 0; i < children.length; i++){
            if(children[i].tagName == 'INPUT'){
                if(children[i].value == ''){
                    setErr(styles.error)
                    ok = false
                }
            }
        }

        if(ok){
            if(err){
                setErr('')
            }
            props.raise(false)
            let f_hour = from_hour.current.value
            let f_min = from_minute.current.value
            if(f_hour < 10){
                f_hour = '0' + String(f_hour)
            }
            if(f_min < 10){
                f_min = '0' + String(f_min)
            }
            let t_hour = to_hour.current.value
            let t_min = to_minute.current.value
            if(t_hour < 10){
                t_hour = '0' + String(t_hour)
            }
            if(t_min < 10){
                t_min = '0' + String(t_min)
            }


            let plan = {
                name:name.current.value,
                description:des.current.value,
                from_hour:f_hour,
                from_minute:f_min,
                to_hour:t_hour,
                to_minute:t_min,
                id:name.current.value
            }
            name.current.value = ''
            des.current.value = ''
            from_hour.current.value = '0'
            from_minute.current.value = '0'
            to_hour.current.value = '0'
            to_minute.current.value = '0'


            props.submit(plan)

        }
    }


    // color
    function changeColor(e){
        if(e.target.id == 'red')dispatch(planActions.color('--red'))
        if(e.target.id == 'blue')dispatch(planActions.color('--blue'))
        if(e.target.id == 'green')dispatch(planActions.color('--green'))
        if(e.target.id == 'purple')dispatch(planActions.color('--blueviolet'))
        if(e.target.id == 'pink')dispatch(planActions.color('--pink'))
    }





    return(
        <div className={styles.wrapper}>
        <div></div>

        <form className={styles.form}> 
               
                <label>from</label>
                <div>
                    <label className={styles.time} >hour</label>
                    <input ref={from_hour} className={err} type='number' placeholder='0' min='0' max='23' defaultValue='0' />
                    <label className={styles.time}>minute</label>
                    <input ref={from_minute} className={err} type='number' placeholder='0' min='0' max='59' defaultValue='0'/>
                </div>

                <label>until</label>
                <div>
                    <label  className={styles.time}>hour</label>
                    <input ref={to_hour} className={err} type='number' placeholder='0' min='0' max='23' defaultValue='0'/>
                    <label className={styles.time}>minute</label>
                    <input ref={to_minute} className={err} type='number' placeholder='0' min='0' max='59' defaultValue='0'/>
                </div>
            
            
            <label>name of activity</label>
            
            <input ref={name} type='text' placeholder='name' className={err}/>
            
            <label>activity description</label>
            
            <textarea ref={des} placeholder='description of your activity' className={err}/>
            
            <button onClick={submit}>Add</button>
        </form>


        <div className={styles.colorswrapper}>
            <div id='red' className={styles.red} onClick={changeColor}></div>
            <div id='purple' className={styles.purple} onClick={changeColor}></div>
            <div id='pink' className={styles.pink} onClick={changeColor}></div>
            <div id='green' className={styles.green} onClick={changeColor}></div>
            <div id='blue' className={styles.blue} onClick={changeColor}></div>
        </div>



    </div>
    )
}


export default Form