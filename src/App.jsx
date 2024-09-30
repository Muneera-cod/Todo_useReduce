import React from 'react'
import { useReducer } from 'react'
import AddTodo from './AddTodo'
function reducer(state,action){
 switch(action.type){
 
 case 'addtodo':{
    return[
      ...state,{
        id:action.newid,
        todo:action.newtodo,
        isComplete:false
      }
    ]
 }
 case 'deletodo':{
  
 }
  
 }
}
function App() {
 
  const [state,dispatch]=useReducer(reducer,[{id:1,todo:'Design',isComplete:false},{id:2,todo:'Validation',isComplete:true}])
  return (
    <div className='outerbox'>
    <AddTodo dispatch={dispatch} state={state} />
   </div>
  )
}

export default App