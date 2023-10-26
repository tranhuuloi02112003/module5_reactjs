import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import {List} from "./components/List";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<List/>}></Route>
                {/*<Route path="/create" element={<Create/>}></Route>*/}
                {/*<Route path="/update/:id" element={<Update/>}></Route>*/}
            </Routes>
        </>
    );
}

export default App;
