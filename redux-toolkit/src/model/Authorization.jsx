import { Link, useNavigate} from "react-router-dom";
import { userLogin } from "../Features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import style from '../css/authorization.module.css'
import Main from "./Main";
function Authorization() {
  const error = useSelector((state)=> state.user.error)
  const token = useSelector((state)=>state.user.token)

  const [logi, setLog]= useState("")
  const [pas,setPass]=useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleLogin = (e)=>{
    e.preventDefault()
    dispatch(userLogin({log:logi, pass:pas}))
    setLog('')
    setPass('') 
    
    
  }
  if(token){
    navigate('/')

  }
  
  return (
    <div>
    <div className={style.Author}>
        <div className={style.h2}><h2>Авторизация</h2></div>
        <div className={style.inputs2}>
        {error ? <div className={style.invaliderr}>{error}</div>: null}
        <div><input value={logi} onChange={(e)=>setLog(e.target.value)} placeholder="Введите логин" type="text" /></div>
        <div><input value={pas} onChange={(e)=> setPass(e.target.value)} placeholder="Введите пароль" type="password" /></div>
        <button  onClick={handleLogin}>Войти</button>
        <div className={style.notAcc}><span>Нет аккаунта?</span>
        <span><Link to="Registr">Зарегистрироваться</Link></span>
        </div>
        </div>
    </div>
    <div className={style.main}>

    <Main/>
    </div>
    
    </div>
    
  )
}

export default Authorization