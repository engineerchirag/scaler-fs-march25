import { useState } from "react";

const Counter = ({ intialCount }) => {
    const [state, setState] = useState(intialCount || 0);
    // let count = 0;
    const handleDecrease = () => {
        // count--;
        // console.log(count);
        console.log('previous > ', state);
        setState(state - 1);
        console.log('after > ', state);
    }

    const handleIncrease = () => {
        // count++;
        // console.log(count);
        console.log('previous > ', state);
        setState(state + 1);
        console.log('after > ', state);
    }

    return (
        <div>
            <h2>Counter</h2>
            <div>
                <button onClick={handleDecrease}>-</button>
                {state}
                <button onClick={handleIncrease}>+</button>
            </div>
        </div>
    )
}

export default Counter;