import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlacons, fetchProduct } from "../Features/shopSlice";

function Flacons() {
  const flacons = useSelector((state) => state.flacons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlacons());
  }, []);

  return (
    <div className="rodBlock"> 
      {flacons.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="ccc">
          <div className="flakons">
            <div className="flackImg">
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
