import { useState } from "react"

const initialstate = {
    list:[]
}
const shopreducer = (state = initialstate,action)=>{
    switch(action.type){
        case "add_shop":
            const data = action.payload;
            return{
                ...state,
                list:[
                    ...state.list,
                    data
                ]
                
            }
            case "delete_shop":
              const newlist = state.list.filter((e)=>e.id !== action.id)
                return{
                    ...state,
                   list:newlist
                    
                }    
        default:
            return state;    
    }
}
export default shopreducer;
