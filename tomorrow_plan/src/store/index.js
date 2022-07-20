import { createSlice,configureStore } from "@reduxjs/toolkit"

//******************************* plans ***************************************
const planSlice = createSlice({
    name:'plan',
    initialState: {plans:[],selectedMain:''},
    reducers:{
        add(state,action){
            if(state.plans.length == 0){
                state.plans = [action.payload]
                console.log(state.plans)
                return
            }

             
            let f = false
            var ps = []
            for(let i = 0; i < state.plans.length;i++){
                //console.log(ps)
                //console.log(state.plans[i])
                
                if( (Number(state.plans[i].from_hour)*100+Number(state.plans[i].from_minute)) < (Number(action.payload.from_hour)*100+Number(action.payload.from_minute)) ){
                    ps.push(state.plans[i])
                    //console.log(state.plans[i])

                }
                else{
                    f = true
                    console.log('fucking piece of shit')
                    console.log(state.plans[i])
                    ps.push(action.payload,state.plans[i])
                    //console.log(ps)
                    for(let j = i+1; j<state.plans.length;j++){
                        ps.push(state.plans[j])
                    }
                    state.plans = [...ps]
                    break
                }
            }
            if(!f){
                state.plans = [...state.plans,action.payload]
            }


            //console.log(state.plans)
        },
        remove(state,action){
            var newPlans = []
            for(let p of state.plans){
                if( p.id != action.payload ) {
                    newPlans = [...newPlans,p]
                }
            }
            state.plans = newPlans
        },
        color(state,action){
            let selected = getComputedStyle(document.documentElement).getPropertyValue(action.payload)
            state.selectedMain = action.payload
            document.documentElement.style.setProperty('--selectedMain',selected)
        }
    }
})


//**************************** notifications ******************************
const notificationSlice = createSlice({
    name:'notification',
    initialState:{notif:false,message:'',mode:'light'},
    reducers:{
        toggleNotif(state,action){
            state.notif = action.payload
        },
        setMessage(state,action){
            state.message = action.payload
        },
        toggleMode(state,action){
            state.mode = action.payload
            if(action.payload == 'light'){
                let selected = getComputedStyle(document.documentElement).getPropertyValue('--light')
                document.documentElement.style.setProperty('--selectedBack',selected)
            }
            else{
                let selected = getComputedStyle(document.documentElement).getPropertyValue('--dark')
                document.documentElement.style.setProperty('--selectedBack',selected)
            }
        }
    }
})









const store = configureStore({
    reducer:{
        plan:planSlice.reducer,
        notification:notificationSlice.reducer
    }
})



export const planActions = planSlice.actions
export const notifActions = notificationSlice.actions
export default store