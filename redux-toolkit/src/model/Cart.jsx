import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../Features/shopSlice";
import { useEffect } from "react";

function Cart() {
 
  useEffect(() => {
    dispatch(fetchCart());
  }, []);



const products = useSelector((state)=> state.products)
const cart = useSelector((state)=> state.cart)
const dispatch = useDispatch()

  return (
    <div>
      {!cart.length ?(<div>Корзина пуста</div>):
      (products.map((prod)=>{
        return(
          <div className="cartRod">
            {cart.map((item)=>{
              if(prod._id === item.productId){
                return(
                  <div  className="cart">
                    <div className="cartBack"><span>
                    {prod.number}
                    </span>
                    </div>
                    <div>{prod.name}</div>
                    <div>{prod.price}</div>
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