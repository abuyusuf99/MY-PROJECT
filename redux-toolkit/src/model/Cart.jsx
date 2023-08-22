import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchCart, fetchProduct } from "../Features/shopSlice";
import { useEffect } from "react";

function Cart() {

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
    <div className="cartRod">
      {!cart.length ?(<div>Корзина пуста</div>):
      (products.map((prod)=>{
        return(
          <div >
            {cart.map((item)=>{
              if(prod._id === item.productId){
                return(
                  <div  className="cart">
                    <div className="cartBack"><span>
                    {prod.number}
                    </span>
                    </div>
                    <div>{prod.name}</div>
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