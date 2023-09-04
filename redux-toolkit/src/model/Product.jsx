import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delProduct, fetchCart, fetchOneProduct, fetchProduct } from "../Features/shopSlice";
import "../css/style.css";
import style from '../css/product.module.css'
import { Link } from "react-router-dom";

function Product({text}) {
  const product = useSelector((state) => state.productSlice.products);
  const cart = useSelector((state) => state.productSlice.cart);
  const user = useSelector((state) => state.user.user);
  console.log(user);

  const dispatch = useDispatch();


  

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchCart());
  }, [dispatch]);

  const handleAdd = (id) => {
    dispatch(addCart({ prodId: id }));
  };
const handleDelete = (id)=>{
  dispatch(delProduct(id))
}

  return (
    <div className={style.pro}>
      {product.filter((prod) =>{
        if(prod.name.toLowerCase().includes(text)){
          return prod
        }
      }).map((item,index) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className={style.products}>
            <div className={style.product}>
              <div className={style.back}>
                <span>{index+1}</span>
              </div>
              <div className={style.item}>
                <div  className={style.name}>
                 <Link to={`OneProduct/${item._id}`}><span >{item.name}</span></Link> 
                </div>
                <div  className={style.desc}>
                  <span>{item.description}</span>
                  {user.isAdmin ?  <button onClick={() => handleDelete(item._id)}>Удалить</button> :null}
                </div>
              </div>
              <div className={style.item2}>
               
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









