import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {List} from "./conponents/List";
import {Create} from "./conponents/Create";
// import {Create} from "./conponents/Create";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<List/>}></Route>
          <Route path="/create" element={<Create/>}></Route>
        </Routes>
      </>
  );
}

export default App;
