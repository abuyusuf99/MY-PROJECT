import { Link, Route, Routes } from "react-router-dom";
import Product from "./model/Product";
import Podbor from "./model/Podbor";
import { useState } from "react";
import Flacons from "./model/Flacons";
import Cart from "./model/Cart";



function App() {
  const [on, setOn] = useState(false);
  const [one, setOne] = useState(false);

  function handleClick() {
    setOn(true);
    setOne(false);
  }
  function handleClick1() {
    setOne(true);
    setOn(false);
  }

  return (
    <div>
      <div className="header">
        <div className="image">
          <img src="logo.jpg" alt="" />
        </div>
        <div className="cartBlock">
        <div className="cart">
          <span>0</span><img  src="cart.svg" alt="" /></div>
        </div>
        <div className="navig">
          <div className="menu">
            <Link
              style={{ color: on ? "white" : null }}
              onClick={handleClick}
              to="/Product"
            >
              АРОМАТЫ
            </Link>
            <Link
              style={{ color: one ? "white" : null }}
              onClick={handleClick1}
              to="/Podbor"
            >
              ПОДБОР АРОМАТА
            </Link>
            <Link
          
             to="/Flacons">ФЛАКОНЫ</Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="#" element={<Cart/>}/>
        <Route path="Product" element={<Product />} />
        <Route path="Podbor" element={<Podbor />} />
        <Route path="Flacons" element={<Flacons/>}/>
      </Routes>
    </div>
  );
}

export default App;
