import React from 'react'
import { useReducer } from 'react'
import AddTodo from './AddTodo'
function reducer(state,action){
 switch(action.type){
 
 case 'addtodo':{
    return[
      ...state,{
        id:action.id,
        todo:action.todo,
        isComplete:false
      }
    ]
 }
 case 'deletetodo':{
  return state.filter((items)=> items.id !== action.id)
 
 
 }
 default:{
  return state
 }
  
 }
}
function App() {
 
  const [state,dispatch]=useReducer(reducer,[])
  return (
    <div className='outerbox'>
    <AddTodo dispatch={dispatch} state={state} />
   </div>
  )
}

export default App