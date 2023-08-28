import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, fetchCart, fetchProduct } from "../Features/shopSlice";
import "../css/style.css";

function Product() {
  const product = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  console.log(cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchCart());
  }, [dispatch]);

  const handleAdd = (id) => {
    dispatch(addCart({ prodId: id }));
  };


  return (
    <div>
      {product.map((item) => {
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
               
                <div>

                  <span>{item.price}₽/гр.</span>
                </div>
                <button style={{}} disabled={cart.find(car => car.productId === item._id)} onClick={() => handleAdd(item._id)}>
                {cart.find(car => car.productId === item._id) ? 'уже в корзине' : 'купить'}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
