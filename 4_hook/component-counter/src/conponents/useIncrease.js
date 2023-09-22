import {useState} from "react";

export function UseIncrease(AddMount) {
    const [count, setCount] = useState(0);
    let increase = () => {
        setCount(prevState => prevState + AddMount);
    }
    return [count,increase];

}
