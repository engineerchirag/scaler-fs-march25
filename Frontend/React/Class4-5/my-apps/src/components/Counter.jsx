import { useEffect, useState } from "react";

const Counter = ({ intialCount }) => {
    const [count, setState] = useState(intialCount || 0); // Constructor
    // let count = 0;
    const handleDecrease = () => {
        // count--;
        // console.log(count);
        // console.log('previous > ', state);
        setState(count - 1);
        // console.log('after > ', state);
    }

    const handleIncrease = () => {
        // count++;
        // console.log(count);
        // console.log('previous > ', state);
        setState(count + 1);
        // console.log('after > ', state);
    }

    // Birth
    useEffect(() => {
        console.log('Mounted');
    }, []);

    // Update
    useEffect(() => {
        console.log('Update1: Every state/props change > on every rerender')
    });

    useEffect(() => {
        console.log('Update2: state - on count change')
    }, [count]);

    useEffect(() => {
        console.log('Update3: props - on intialCount change')
    }, [intialCount]);


    // Death
    useEffect(() => {
        return () => {
            console.log('Unmounting')
        }
    }, []);

    return (
        <div>
            <h2>Counter</h2>
            <div>
                <button onClick={handleDecrease}>-</button>
                {count}
                <button onClick={handleIncrease}>+</button>
            </div>
        </div>
    )
}

export default Counter;