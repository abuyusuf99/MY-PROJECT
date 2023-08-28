import { Link, useNavigate} from "react-router-dom";
import { userLogin } from "../Features/shopSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
function Authorization() {

  const [logi, setLog]= useState("")
  const [pas,setPass]=useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleLogin = (e)=>{
    e.preventDefault()
    dispatch(userLogin({log:logi, pass:pas}))
    setLog('')
    setPass('')
    navigate('/')
  }

  return (
    <div>
    <div className="Author">
        <div><h3>Авторизация</h3></div>
        <div><input value={logi} onChange={(e)=>setLog(e.target.value)} placeholder="Введите логин" type="text" /></div>
        <div><input value={pas} onChange={(e)=> setPass(e.target.value)} placeholder="Введите пароль" type="password" /></div>
        <div><button onClick={handleLogin}>Войти</button></div>
        <div><span>Нет аккаунта?</span></div>
        <Link to="Registr">Зарегистрироваться</Link>
    </div>
    
    </div>
    
  )
}

export default Authorization