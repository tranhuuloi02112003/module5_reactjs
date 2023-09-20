import './App.css';
import {useState} from "react";

function App() {
    const [count,setCount]= useState(0);
    const [count2,setCount2]= useState(0);
    const handleCount1 = () => {
        setCount(count+1);
        console.log("handleCount1")
    }
    const handleCount2 = () => {
        setCount2(count2+2);
        console.log("handleCount2")
    }

    return (

        <>
            <div>
                <p>Giá trị {count}</p>
                <button onClick={handleCount1}>Tăng 1</button>
            </div>
            <div>
                <p>Giá trị {count2}</p>
                <button onClick={handleCount2}>Tăng 2</button>
            </div>
        </>
    );
}

export default App;
