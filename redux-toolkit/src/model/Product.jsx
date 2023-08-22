import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, fetchProduct} from "../Features/shopSlice";
import style from "../css/style.css";

function Product() {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state)=> state.cart)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const handleAdd = (id)=>{
    dispatch(addCart({prodId:id}))
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
               <button onClick={()=>handleAdd(item._id)} >Купить</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
