import Button from "../button/button";
import { useState } from 'react';


const Counter = (props) => {
    let [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        console.log("increment");
        setCounter((prev) => prev + 1);
    };
    const decrementCounter = () => {
        console.log("decrement");
        return counter > 0 ? setCounter((counter -= 1)) : 0;
    };
    return (
        <div>
            <Button text="increment" functionName={incrementCounter}></Button>
            <span>{counter}</span>
            <Button text="decrement" functionName={decrementCounter}></Button>
        </div>
    );
};
export default Counter;
