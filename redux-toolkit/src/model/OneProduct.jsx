import { useDispatch, useSelector } from "react-redux";
import { addCart, fetchOneProduct } from "../Features/shopSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../css/oneproduct.module.css";
import img from "../img/parfume.svg";
import send from "../img/send.svg";
import userimg from "../img/user.svg";
import { addReview, deleteReview, fetchReviews } from "../Features/reviewsSlice";
import { getUser } from "../Features/userSlice";

function OneProduct() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productSlice.product);
  const review = useSelector((state) => state.reviewSlice.reviews);
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.productSlice.cart);
  console.log(product);
  const handleAdd = (id) => {
    dispatch(addCart({ prodId: id }));
  };

  useEffect(() => {
    dispatch(fetchReviews());
    dispatch(getUser());
  }, [dispatch]);

  const { id } = useParams(); //Для вывода одного продукта

  const handleAddRev = () => {
    dispatch(addReview({ text: text, user: user._id, productId: product._id }));
  };

  const handleOpenRev = () => {
    setOpen(!open);
  };
  const handleDelete = (id)=>{
    dispatch(deleteReview(id))
  }

  useEffect(() => {
    dispatch(fetchOneProduct(id));
  }, [dispatch]);

  return (
    <div className={style.product}>
      <div className={style.product_npd}>
        <div className={style.image}>
          <img src={img} alt="" />
        </div>
        <div className={style.nnn}>
          <div className={style.name_price}>
            <div className={style.name}>
              {" "}
              <span>{product.name}</span>
            </div>
            <div className={style.price}>
              {" "}
              <span>{product.price}</span> ₽/гр.{" "}
              <button
                disabled={cart.find((car) => car.productId === product._id)}
                onClick={() => handleAdd(product._id)}
              >
                Купить
              </button>
            </div>
          </div>
          <div className={style.desc}>
            <span>{product.description}</span>
          </div>
          <div className={style.otzyv}>
            <span onClick={handleOpenRev}>Отзывы о товаре</span>
          </div>
        </div>
      </div>
      {open ? (
        <div>
          <div className={style.reviews}>
            <div>
              {review.map((item) => {
                return (
                  <>
                  <div className={style.review_name}>
                    {item.productId === product._id ? (
                      <div className={style.image_name}>
                        <img src={userimg} alt="" />
                      <span>
                       {item.user.lastname}.  {item.user.name} :{item.text}
                      </span>
                      {item.user._id === user._id ? <button onClick={()=>handleDelete(item._id)}>X</button> : null}
                      
                      </div>
                    ) : null}
                  </div>
                  </>
                );
              })}
            </div>
            <div className={style.rev_input}>
            <input
              value={text}
              type="text"
              onChange={(e) => setText(e.target.value)}
            />
          <img  onClick={handleAddRev} src={send} alt="" />
          </div>
          </div>

        </div>
      ) : null}
    </div>
  );
}

export default OneProduct;
