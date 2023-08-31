import { useState } from "react";
import { useDispatch } from "react-redux";
import { plusProd } from "../Features/shopSlice";
import style from '../css/addproduct.module.css'

function AddProduct() {

    const dispatch = useDispatch()

const[nam,setNam]= useState('')
const[pri, setPri]= useState('')
const[des, setDes]= useState('')
const [fallnam, setfallnam]=useState(false)
const [fallpri, setfallpri]=useState(false)
const [falldes, setfalldes]=useState(false)

const handlePlusProd = (e)=>{
  if(nam,pri,des === ('')){
    e.preventDefault()
    setfallnam(true)
    setfallpri(true)
    setfalldes(true)
  }
  else {
dispatch(plusProd({name:nam, price:pri, description: des}))
setDes('')
setNam('')
setPri('')

}
}


  return (
    <div className={style.rodBlockAdd}>
      <div className={style.addProductinput}>
        <div className={style.input}>
          <input value={nam} onChange={(e)=> setNam(e.target.value)} type="text" placeholder= {fallnam ? "Поле не может быть пустым": "Введите название продукта"} />
         
        </div>
        <div className={style.input}>
          {" "}
          <input value={pri} onChange={(e)=> setPri(e.target.value)} type="text" placeholder= {fallpri ? "Поле не может быть пустым": "Введите цену"} />
        </div>
        <div className={style.input}>
          {" "}
          <input value={des} onChange={(e)=> setDes(e.target.value)} type="text"  placeholder={ falldes ? "Поле не может быть пустым": "Описание продукта"} />
        </div>
        <div className={style.addButtProd}>
        <button onClick={handlePlusProd}>Добавить продукт</button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
