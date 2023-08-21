import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../Features/shopSlice";
import style from "../css/style.css";

function Product() {
  const products = useSelector((state) => state.products);
  const[data, setData]= useState(0)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

const handleRange =(id)=>{
setData(data+1)
}


  return (
    <div>
      {products.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="products">
            <div className="product">
              <div className="back">
                <span>{item.number}</span>
              </div>
              <div className="item">
                <div className="name">
                  <span>{item.name}</span>
                </div>
                <div className="desc">
                  <span>{item.description}</span>
                </div>
              </div>
              <div className="item2">
                <div><span>{item.price}₽/гр.</span></div>
                <input min="0" max="100" onChange={()=>handleRange(item._id)} type="range"  value={data}/>
                <span>{data}</span>
               <button>Купить</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
