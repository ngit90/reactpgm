import React,{useReducer} from 'react'

export default function Newcomp7() {
    const initial = { count :0, value : 1};
    const [state,dispatch] = useReducer(countreduce,initial);
  
    function countreduce (state, action) {
        switch(action.type){
          case "Increment" : 
            return { ...state, count : state.count + 1 }
          case "Decrement" : 
            return { ...state, value : state.value - 1}
          default :
            return state.count;
        }
      }
    
  return (
    <div>
            <h1> use reducer ...</h1>
           <p> count : {state.count} </p>
           <p> value : {state.value}</p>
           <button onClick={()=> dispatch({type : "Increment"})}> Increment </button>
           <button onClick={()=> dispatch({type : "Decrement"})}> Decrement </button>
    </div>
  )
}
