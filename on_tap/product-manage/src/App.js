import './App.css';
import {ProductList} from "./conponents/ProductList";
import {ProductCreate} from "./conponents/ProductCreate";
import {Route, Routes} from "react-router-dom";
import {ProductUpdate} from "./conponents/ProductUpdate";

function App() {
  return (
   <>
       <Routes>
           <Route path="/" element={<ProductList/>}></Route>
           <Route path="/create" element={<ProductCreate/>}></Route>
           <Route path="/update/:id" element={<ProductUpdate/>}></Route>

       </Routes>
   </>
  );
}

export default App;
