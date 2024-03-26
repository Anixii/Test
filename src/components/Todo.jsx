import React, { useState } from 'react'
const makeId = () => {
  let ID = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for ( var i = 0; i < 12; i++ ) {
    ID += characters.charAt(Math.floor(Math.random() * 36));
  }
  return ID;
}
const Todo = ({page, ...props}) => {
  const [todo, setTodo] = useState([{title:'Купить молоко',id:' asdasdasd' }]) 
  const [title, setTitle] = useState('') 
  const [iserror, setError] = useState(false)
  const onHandleChangeTitle = (e) =>{ 
    setTitle(e.target.value)
  }  
  const onHandleDelete = (id) =>{ 
    const filterdTodo = todo.filter((item) => item.id !== id) 
    setTodo(filterdTodo)
  }
  const onHandleAddTodo = () =>{  
    setError(false)    
    const id = makeId()
    if(title === ''){ 
      setError(true)
    }else{ 
      setTodo([...todo,{title: title,id: id}]) 
      setTitle('')
    }
  }
  return (
    <>
      <div className='todo'> 
        <div className='todo__container'> 
          <div className='todo__form'>
            <div className='todo__input'> 
              <input onChange={onHandleChangeTitle} value={title} type="text" placeholder='Введите задачу'/> 
            </div> 
            <div className='todo__btn'> 
              <button onClick={onHandleAddTodo}>Добавить Задачу</button>
            </div> 
            {iserror && <h3 style={{color: 'red'}}>Ошибка</h3>}
          </div> 
          <div className='todo__list'> 
            {todo?.map( (item, key) => <div key={key}>{item.title} <button onClick={() => onHandleDelete(item.id)}>Delete</button></div>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo