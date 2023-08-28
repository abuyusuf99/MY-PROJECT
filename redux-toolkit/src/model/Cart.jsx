import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchCart, fetchProduct } from "../Features/shopSlice";
import { useEffect, useState } from "react";

function Cart() {
  const[data, setData]=useState(0)

const handleChange =()=>{
  setData(data+1)
}

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchProduct());
  }, [dispatch]);

 const handleDelete = (id)=>{
  dispatch(deleteProduct(id))
 }

const products = useSelector((state)=> state.products)
const cart = useSelector((state)=> state.cart)



  return (
    <div className="basket">
      {!cart.length ?(<div>Корзина пуста</div>):
      (products.map((prod)=>{
        return(
          <div className="cartRod" >
            {cart.map((item)=>{
              if(prod._id === item.productId){
                return(
                  <div  className="cart">
                    <div className="cartBack">
                      <div className="a1">
                    {prod.number}
                    </div>
                    </div>
                    <div className="cart__name">{prod.name}</div>
                    <input max="60" onChange={handleChange} type="range" />
                    <span>{data}</span>
                    <div>{prod.price} ₽</div>
                    <button onClick={()=>handleDelete(item._id)}>Удалить</button>
                  </div>
                )
              }
            })}
          </div>
        )
      }))}
    </div>
  )
}

export default Cart