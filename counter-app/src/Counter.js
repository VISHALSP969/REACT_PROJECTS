import {useState} from 'react';
import './Counter.css';

function Counter(){
    const [count,setCount]=useState(0);

    const incrementCount=()=>{
        setCount(count+1);
    }

    const decrementCount=()=>{
        if(count!==0){
            setCount(count-1);
        }  
    }

    return(
        <div className="counter-container">
            <h1>Counter App</h1>
            <div className="display">{count}</div>
            <div className="button-container">
                <button onClick={incrementCount}>+</button>
                <button onClick={decrementCount}>-</button>
            </div>
        </div>
    );
}

export default Counter;