import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { getUser } from "../Features/userSlice";
import style from '../css/cabinet.module.css'

function Cabinet() {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()

const navigate = useNavigate()

useEffect(() => {
dispatch(getUser())
}, [])

  const handleClearLocalStorage = (e) => {
    localStorage.removeItem('token')
    navigate('/Authorization')
    location.reload()
e.preventDefault()
  };




  return (
    <div > 
        <div className={style.cabinet}>
            <h4>Мой кабинет</h4>
            
            {user.name} {user.lastname}
          <Link to="/Setting"> <span>Изменить данные</span></Link>
          {user.isAdmin ?  <Link to="/PlusProduct">Добавить продукт</Link> : null}
            
            <button onClick={handleClearLocalStorage}>Выйти</button>
        </div>
      
    </div>
  )
}

export default Cabinet