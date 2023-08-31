import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../Features/userSlice";
import style from '../css/registr.module.css'

function Registr() {
  const [logi, setLog] = useState("");
  const [pas, setPass] = useState("");
  const [nam, setNam] = useState("");
  const [last, setLast] = useState("");
  const [phon, setPhon] = useState("");
  const [mail, setMail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [f1, setf1]=useState(false)
const [f2, setf2]=useState(false)
const [f3, setf3]=useState(false)
  const [f4, setf4]=useState(false)
const [f5, setf5]=useState(false)
const [f6, setf6]=useState(false)

  const handleAdd = (e) => {
    e.preventDefault();
    if(logi,pas,nam,last,phon,mail === ('')){
setf1(true)
setf2(true)
setf3(true)
setf4(true)
setf5(true)
setf6(true)
    }
    else{
      dispatch(
        addUser({
          log: logi,
          pass: pas,
          name: nam,
          lastname: last,
          phone: phon,
          mail: mail,
        })
      );
      setLog("");
      setPass("");
      setNam("");
      setPhon("");
      setMail("");
      navigate("/Authorization");
    }
  };

  return (
    <div className={style.Registration}>
      <div className={style.h3}>
        <h2>Регистрация</h2>
      </div>
      <div className={style.inputs}>
      <div>
        <input required
          value={logi}
          onChange={(e) => setLog(e.target.value)}
          placeholder={f1 ? "Поле не может быть пустым" :"Введите логин"}
          type="text"
        />
      </div>
      <div>
        <input
          value={pas}
          onChange={(e) => setPass(e.target.value)}
          placeholder={f2 ? "Поле не может быть пустым" :"Введите пароль"}
          type="password"
        />
      </div>
      <div>
        <input
          value={nam}
          onChange={(e) => setNam(e.target.value)}
          placeholder={f3 ? "Поле не может быть пустым" :" Введите Имя"}
          type="text"
        />
      </div>
      <div>
        <input
          value={last}
          onChange={(e) => setLast(e.target.value)}
          placeholder={f4 ? "Поле не может быть пустым" :"Введите фамилию"}
          type="text"
        />
      </div>
      <div>
        <input
          value={phon}
          onChange={(e) => setPhon(e.target.value)}
          placeholder={f5 ? "Поле не может быть пустым" :" Введите номер телефона"}
          type="text"
        />
      </div>
      <div>
        <input
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder={f6 ? "Поле не может быть пустым" :"Введите электронную почту"}
          type="text"
        />
      </div>
      <div>
        <button onClick={handleAdd}>Зарегистрироваться </button>
      </div>
      <div className={style.butAuthor}>
        {" "}
        <Link to="/Authorization">Войти</Link>
      </div>
      </div>
    </div>
  );
}

export default Registr;
