import React from 'react'
import { IconSquareRoundedX } from '@tabler/icons-react';
import { useState,useRef,useEffect } from 'react'
function AddTodo(props) {
    const [newtodo,setTodo]=useState('')
    const inputref=useRef(null)
    useEffect(()=>{
        inputref.current.focus()
      },[])
    const lastid=props.state[props.state.length-1].id
    function addtodo(){
        props.dispatch({
          type:'addtodo',
          newid:lastid+1,
          newtodo:newtodo
          
        })
        setTodo('')
      }
      // function deletetodo(){
      //   props.dispatch({
      //     type:'deletetodo'

      //   })
      // }
  return (
    <div className='todo-container'>
        <div className='innertodo1'><input type='text'  value={newtodo}  ref={inputref} onChange={(e)=>{setTodo(e.target.value)}}></input>
    <button type='submit' onClick={addtodo}>Add</button>
    {console.log(newtodo)}
   {console.log(props.state)}
    </div>
    <div className='innertodo2'>
      <ul>
        {props.state.map((items)=>
      
         <div  key={items.id}> <li>{items.todo}</li><IconSquareRoundedX/></div>
          )}
      </ul>
    </div>
    </div>
  )
}

export default AddTodo