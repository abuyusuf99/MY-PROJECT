import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlacons } from "../Features/shopSlice";
import style from '../css/flacons.module.css'

function Flacons() {
  const flacons = useSelector((state) => state.productSlice.flacons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlacons());
  }, []);

  return (
    <div className={style.rodBlock}> 
      {flacons.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className={style.ccc}>
          <div className={style.flakons}> 
            <div className={style.flackImg}>
              <img src={item.image} alt="" />
              <div>{item.name}</div>
              <div>{item.price} ₽</div>
            </div>
            </div>
            </div>
        );
      })}
    </div>
  );
}

export default Flacons;
