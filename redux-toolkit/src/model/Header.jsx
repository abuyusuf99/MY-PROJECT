import { Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCart, fetchOneProduct, fetchProduct } from "../Features/shopSlice";
import Cabinet from "./Cabinet";
import Flacons from "./Flacons";
import Cart from "./Cart";
import Authorization from "./Authorization";
import Registr from "./Registr";
import AddProduct from "./AddProduct";
import Setting from "./Setting";
import Product from "./Product";
import style from '../css/header.module.css'
import Podbor from "./Podbor";
import img1 from '../img/registr.svg'
import img from '../img/search.svg'
import img3 from '../img/logo.jpg'
import img_cart from '../img/cart.svg'
import Main from "./Main";
import OneProduct from "./OneProduct";
import { getUser } from "../Features/userSlice";

function Header() {
    const cart = useSelector((state) => state.productSlice.cart);
    const token = useSelector((state) => state.user.token);
  
    const [text, setText] = useState("");
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchCart());
      dispatch(getUser())
      dispatch(fetchProduct())
      dispatch(fetchOneProduct())
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
    
    
    
    
          <div className={style.header}>
            <div className={style.image}>
              <Link to="/">
                {" "}
                <img src={img3} alt="" />
              </Link>
            </div>
    
            <div className={style.navig}>
              <div className={style.registr}>
                {token ? (
                  <Link to="Cabinet">
                    <img src={img1} alt="" />
                  </Link>
                ) : (
                  <Link to="Authorization">
                    <img src={img1} alt="" />
                  </Link>
                )}
              </div>
              <div className={style.cartBlock}>
                <div className={style.carticon}>
                  <Link to="/Cart">
                    <img src={img_cart} alt="" />{" "}
                  </Link>
                  <span>{cart.length}</span>
                </div>
              </div>
    
              <div className={style.menn}>
                <div className={style.menu}>
                  <Link
                    style={{ color: on ? "white" : null }}
                    onClick={handleClick}
                    to="/Product"
                  >
                    АРОМАТЫ ◊
                  </Link>
                  <Link
                    style={{ color: one ? "white" : null }}
                    onClick={handleClick1}
                    to="/Podbor"
                  >
                    ПОДБОР АРОМАТА ◊
                  </Link>
                  <Link
                    style={{ color: on1 ? "white" : null }}
                    onClick={handleClick2}
                    to="/Flacons"
                  >
                    ФЛАКОНЫ ◊
                  </Link>
                </div>
              </div>
              <div className={style.inputDiv}>
                <form action="">
                  <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="search"
                  />
                  <img src={img} className={style.fa}/>
                </form>
    
              </div>
          
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route
              path="/Product"
              element={<Product text={text.toLowerCase()} setText={setText} />}
            />
            <Route path="Cabinet" element={<Cabinet />} />
            <Route path="Podbor" element={<Podbor />} />
            <Route path="Flacons" element={<Flacons />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="Authorization" element={<Authorization /> } />
            <Route path="Authorization/Registr" element={<Registr />} />
            <Route path="Register/Authorization" element={<Authorization />} />
            <Route path="PlusProduct" element={<AddProduct />} />
            <Route path="Setting" element={<Setting />} />
            <Route path="Product/OneProduct/:id" element={<OneProduct />} />
          </Routes>
         
        </div>
      );
                }

export default Header