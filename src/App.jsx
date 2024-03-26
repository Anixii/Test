import { useSelector,useDispatch } from 'react-redux'
import { addId, getFavoritesThunk, removeId } from './store/slice/slice'; 
import { useState } from 'react';

import {SomeContext} from './context'
function App() {     
  const [data,setData] = useState([]) 
  const providerData = { 
    onChange: setData, 
    products:data
  }
  return(   
    <>         
    <SomeContext.Provider value={providerData}> 
      <MainPage/>
    </SomeContext.Provider>
    </>
  )
}  

export default App
{/* */}
// {/* <Route path='/post' element={<Posts/>}/> */}