import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { addUser } from "../Features/shopSlice"

function Registr() {
  
const [logi, setLog]= useState("")
const [pas,setPass]=useState('')
const dispatch = useDispatch()
const navigate = useNavigate()


const handleAdd = (e)=>{
  e.preventDefault()
  dispatch(addUser({log:logi, pass:pas}))
  setLog('')
  setPass('')
  navigate('/Authorization')
}

  return (
    <div className="Registration">
      <div>
        <h3>Регистрация</h3>
      </div>
      <div>
        <input value={logi}onChange={(e)=> setLog(e.target.value)} placeholder="Логин" type="text" />
      </div>
      <div>
        <input value={pas} onChange={(e)=> setPass(e.target.value)} placeholder="Пароль" type="password" />
      </div>
      <div>
        <button onClick={handleAdd}>Зарегистрироваться </button>
      </div>
    <div className="butAuthor">  <Link to="/Authorization">Войти</Link></div>
    </div>
  )
}

export default Registr