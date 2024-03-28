import React,{ useState } from "react"
import { add,remove,addValues } from "./store/slices/counterSlice"
import {useSelector,useDispatch} from 'react-redux'
function App() { 
  const [name, setName] = useState('')
  const dispatch = useDispatch()    
  const onHandleClick = () =>{ 
    dispatch(add())
  }
  const onHandleClickRem = () =>{ 
    dispatch(remove())
  } 
  const onHandleAddValues = () =>{ 
    dispatch(addValues(+name))
  }
  const store = useSelector((store) => store.counterSlice.value)
  console.log(store);
  return(   
    <>          
      {store}
      <button onClick={onHandleClick}>Добавить</button>
      <button onClick={onHandleClickRem}>Delte</button> 
      <div>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
      <button onClick={onHandleAddValues}>Добавить значение в инпуте</button>
      </div>
    </>
  )
}  

export default App
