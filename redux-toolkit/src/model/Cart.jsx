import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchCart, fetchProduct } from "../Features/shopSlice";
import { useEffect, useState } from "react";
import style from '../css/cart.module.css'

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

const products = useSelector((state)=> state.productSlice.products)
const cart = useSelector((state)=> state.productSlice.cart)



  return (
    <div className={style.basket}>
      {!cart.length ?(<div>Корзина пуста</div>):
      (products.map((prod)=>{
        return(
          <div className={style.cartRod} >
            {cart.map((item, index)=>{
              if(prod._id === item.productId){
                return(
                  <div  className={style.cart}>
                    <div className={style.cartBack}>
                      <div className={style.a1}>
                    {index+1}
                    </div>
                    </div>
                    <div className={style.cart__name}>{prod.name}</div>
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