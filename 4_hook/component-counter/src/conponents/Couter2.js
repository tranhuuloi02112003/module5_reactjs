import {UseIncrease} from "./useIncrease";

export function Couter2() {
    const [count,setCount] = UseIncrease(2)
    return (
        <div>
            <h2>Counter 1</h2>
            <p>Count: {count}</p>
            <button onClick={setCount}>Increase +2</button>
        </div>
    );
}
