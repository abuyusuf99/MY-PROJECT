import { useState } from "react";
import { useDispatch } from "react-redux";
import { plusProd } from "../Features/shopSlice";

function AddProduct() {

    const dispatch = useDispatch()

const[num,setNum]= useState('')
const[nam,setNam]= useState('')
const[pri, setPri]= useState('')
const[des, setDes]= useState('')

const handlePlusProd = (e)=>{
e.preventDefault()
dispatch(plusProd({number:num, name:nam, price:pri, description: des}))
setDes('')
setNam('')
setNum('')
setPri('')
}


  return (
    <div className="rodBlockAdd">
      <div className="addProductinput">
        <div className="input">
          {" "}
          <input value={num} onChange={(e)=> setNum(e.target.value)} type="text" placeholder="Введите нумерация продукта" />
        </div>
        <div className="input">
          <input value={nam} onChange={(e)=> setNam(e.target.value)} type="text" placeholder="Введите название продукта" />
        </div>
        <div className="input">
          {" "}
          <input value={pri} onChange={(e)=> setPri(e.target.value)} type="text" placeholder="Введите цену" />
        </div>
        <div className="input">
          {" "}
          <input value={des} onChange={(e)=> setDes(e.target.value)} type="text" placeholder="Описание продукта" />
        </div>
        <div className="addButtProd">
        <button onClick={handlePlusProd}>Добавить продукт</button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
