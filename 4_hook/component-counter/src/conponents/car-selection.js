import {useState} from "react";

export function CarSelection() {
    let carList = ["maybach", "mazda", "ford"];
    let colorList = ["red", "blu", "while", "ogange"];

    const [selectedCar, setSelectedCar] = useState({car: carList[0], color: colorList[0]});
    return (
        <>
            <h1>Select your car</h1>
            <p>Select a car</p>
        </>
    )
}
