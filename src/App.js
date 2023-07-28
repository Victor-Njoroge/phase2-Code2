import Bot from './components/Bot';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BotDetails from './components/BotDetails';
function App() {
  const [data, setData]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:8000/bots`)
    .then((res)=>res.json())
    .then((bots)=>{
      setData(bots)
    })
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={data && <Bot bots={data}/>}/>
          <Route exact path='/details/:id' element={data &&<BotDetails bots={data}/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
