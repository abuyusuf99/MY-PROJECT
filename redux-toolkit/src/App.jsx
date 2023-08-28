import { Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Product from "./model/Product";
import Podbor from "./model/Podbor";
import { useEffect, useState } from "react";
import Flacons from "./model/Flacons";
import Cart from "./model/Cart";
import { fetchCart } from "./Features/shopSlice";
import img from "./img/search.svg";
import img1 from "./img/registr.svg";
import Authorization from "./model/Authorization";
import Registr from "./model/Registr";
import AddProduct from "./model/AddProduct";

function App() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state)=> state.user)
  const token = useSelector((state)=> state.token)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  const [on, setOn] = useState(false);
  const [one, setOne] = useState(false);
  const [on1, setOn1] = useState(false);

  function handleClick() {
    setOn(true);
    setOne(false);
    setOn1(false);
  }
  function handleClick1() {
    setOne(true);
    setOn(false);
    setOn1(false);
  }
  function handleClick2() {
    setOne(false);
    setOn(false);
    setOn1(true);
  }

  return (
    <div>
      <div className="header">
        <div className="image">
         <Link to="/"> <img src="logo.jpg" alt="" /></Link>
        </div>

        <div className="navig">

        <div className="registr">
          {token ? <div style={{color: "white"}}>cab</div> : <Link to="Authorization">
            <img src={img1} alt="" />
          </Link>}
          
        </div>
        <div className="cartBlock">
          <div className="carticon">
            <Link to="/Cart">
              <img src="cart.svg" alt="" />{" "}
            </Link>
            <span>{cart.length}</span>
          </div>
        </div>
        

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
              style={{ color: on1 ? "white" : null }}
              onClick={handleClick2}
              to="/Flacons"
            >
              ФЛАКОНЫ
            </Link>
          </div>
      
          <div className="plusProd">
          <Link to="/PlusProduct">Добавить продукт</Link>
          </div>
          <div className="inputDiv">
          <form action="">
  <input type="search"/>
  <img src={img} className="fa"/>
</form>
        </div>
        </div>
      </div>
      <Routes>
        <Route path="Product" element={<Product />} />
        <Route path="Podbor" element={<Podbor />} />
        <Route path="Flacons" element={<Flacons />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Authorization" element={<Authorization />} />
        <Route path="Authorization/Registr" element={<Registr />} />
        <Route path="Register/Authorization" element={<Authorization />} />
        <Route path="PlusProduct" element={<AddProduct />} />
        
      </Routes>
    </div>
  );
}

export default App;
