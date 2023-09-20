import {useEffect, useState} from "react";

export function ComponentTimer() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [timer, setTimer] = useState(10);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (timer === -1) {
            alert("Time’s up")
        }
        let timerId = setInterval(() => {
            setTimer(prevState => prevState - 1)
        }, 1000)

        return () => {
            clearInterval(timerId);
        }
    })
    return (
        <h1>Count down from {timer}</h1>
    )
}
