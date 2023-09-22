import {UseIncrease} from "./useIncrease";

export function Couter1() {
    const [count,setCount] = UseIncrease(1)
    return (
        <div>
            <h2>Counter 1</h2>
            <p>Count: {count}</p>
            <button onClick={setCount}>Increase +1</button>
        </div>
    );
}
