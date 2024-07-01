import ReactDOM from'react-dom/client';
import { useState } from 'react';

function App(){
    //btn for increment 
    // current number 
    // btn for decrement
    const [number , setNumber] = useState(0);
    function handleIncrement(){
        setNumber((prev)=>{
            prev+=1;
            return prev
        })
    }
    function handleDecrement(){
        setNumber((prev)=>{
            prev-=1;
            return prev
        })
    }
    return(
        <div className="app">
            <button className='btn' onClick={handleIncrement}>
                +
                </button>
            <div className='number'>{number}</div>
            <button className='btn' onClick={handleDecrement}>-
                </button>
        </div>
    ) 

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)



