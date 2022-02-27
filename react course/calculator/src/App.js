 import React,{useState} from 'react';
import './App.css';

 
const App=()=> {
  const [val, setVal]=useState([]);
   
  const press=(newval)=>{
    setVal(val=>[...val,newval])
  }
 
   

  return (
    <div className="App">
      <div className="result">
        {val}
      </div>
      <div onClick={()=>press(1)} className="btn">
        1        
      </div>
      <div onClick={()=>press(2)} className="btn">
        2        
      </div>
      <div onClick={()=>press(3)} className="btn">
        3        
      </div>
      <div onClick={()=>press(4)} className="btn">
        4        
      </div>
      <div onClick={()=>press(5)} className="btn">
        5        
      </div>
      <div onClick={()=>press(6)} className="btn">
        6        
      </div>
      <div onClick={()=>press(7)} className="btn">
        7        
      </div>
      <div onClick={()=>press(8)} className="btn">
        8        
      </div>
      <div onClick={()=>press(9)} className="btn">
        9        
      </div>
      <div onClick={()=>press(0)} className="btn">
        0        
      </div>
      <div onClick={()=>press('+')} className="btn">
        +        
      </div>
      <div onClick={()=>press('-')} className="btn">
        -        
      </div>
      <div onClick={()=>press('*')} className="btn">
        *
      </div>
      <div onClick={()=>press('/')} className="btn">
        /
      </div>
      <div onClick={()=>press('.')} className="btn">
        .
      </div>
      <div onClick={()=>setVal(val=>[eval(val.join(''))])} className="btn">
        =
      </div>
    </div>
  );
}

export default App;
