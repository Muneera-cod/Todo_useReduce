import React from 'react'
import { IconSquareRoundedX } from '@tabler/icons-react';
import { useState,useRef,useEffect } from 'react'
function AddTodo(props) {
    const [newtodo,setTodo]=useState('')
    const inputref=useRef(null)
    useEffect(()=>{
        inputref.current.focus()
      },[])
   
    function addtodo(){
        props.dispatch({
          type:'addtodo',
          id:Date.now(),
          todo:newtodo
          
        })
        setTodo('')
      }
      function deletetodo(currid){
        props.dispatch({
          type:'deletetodo',
          id:currid

        })
      }
  return (
    <div className='todo-container'>
        <div className='innertodo1'><input type='text'  value={newtodo}  ref={inputref} onChange={(e)=>{setTodo(e.target.value)}}></input>
    <button type='submit' onClick={addtodo}>Add</button>
    {console.log(newtodo)}
   {console.log(props.state)}
    </div>
    <div className='innertodo2'>
      <ul>
        {props.state.map((items)=>{
          return(<div  key={items.id}> <li>{items.todo}</li><IconSquareRoundedX onClick={()=>deletetodo(items.id)}/></div>
 )} )}
      </ul>
    </div>
    </div>
  )
}

export default AddTodo