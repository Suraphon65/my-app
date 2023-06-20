import logo from './logo.svg';
import './App.css';
import Headers from './eader';
import Footer from './Footer'
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <Headers/> 
      <div className='MyContent'>
        <h2>{num}</h2>
        <button onClick={()=>setNum(num + 1)}>เพิ่ม</button>
        <button onClick={()=>setNum(num - 1)}>ลด</button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
