import logo from './logo.svg';
import './App.css';
import Welcome from "./welcome/welcome";
import AddComponent from "./add-component/AddComponent";
import SumNumber from "./funtion-component/SumNumber";
import CountClick from "./count-click/CountClick";
import ChangeBackgroundColor from "./change-background-color/ChangeBackgroundColor";

function App() {
    return (
        // <div className="App">
        //   <Welcome name="Admin" />
        // </div>
        // <div className="AddComponent">
        //     <AddComponent firstNumber={1} secondNumber={2}/>
        // </div>
    // <div className="SumNumber">
    //     <SumNumber firstNumber={2} secondNumber={2} />
    // </div>
    //     <div className="CountClick">
    //         <CountClick  />
    //     </div>
        <div className="ChangeBackgroundColor">
            <ChangeBackgroundColor/>
        </div>

    );
}

export default App;
