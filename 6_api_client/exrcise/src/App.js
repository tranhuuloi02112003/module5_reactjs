
import './App.css';
import {Todo} from "./conponents/todo";
import {Route, Routes} from "react-router-dom";
import {ListBook} from "./conponents/bookManagementApp/listBook";
import {CreateBook} from "./conponents/bookManagementApp/createBook";
import React from "react";
import {UpdateBook} from "./conponents/bookManagementApp/updateBook";

function App() {
  return (
   <>
       <Routes>
           <Route path="/" element={<ListBook/>}></Route>
           <Route path="/create" element={<CreateBook/>}></Route>
           <Route path="/update/:id" element={<UpdateBook/>}></Route>
       </Routes>
   </>
  );
}

export default App;
