import { useDispatch, useSelector } from "react-redux";
import { patchUser } from "../Features/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../css/setting.module.css"

function Setting() {
  const user = useSelector((state) => state.user.user)
  const [logi, setLog] = useState("");
  const [pas, setPass] = useState("");
  const [nam, setNam] = useState("");
  const [last, setLast] = useState("");
  const [phon, setPhon] = useState("");
  const [mail, setMail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handlePatch = () => {
    dispatch(
      patchUser({
        log: logi,
        pass: pas,
        name: nam,
        lastname: last,
        phone: phon,
        mail: mail,
      }),
      navigate('/Cabinet')
    );
  }

    return (
      <div className={style.sett}>
        <div className={style.settinputs}>
        <span>Изменить данные</span>
        <input
          type="text" value={logi}  onChange={(e) => setLog(e.target.value)} placeholder="Логин"/>
        <input type="text" value={pas}  onChange={(e) => setPass(e.target.value)} placeholder="Пароль" />
        <input type="text" value={nam}  onChange={(e) => setNam(e.target.value)} placeholder="Имя" />
        <input type="text" value={last}  onChange={(e) => setLast(e.target.value)} placeholder="Фамилия" />
        <input type="text" value={phon}  onChange={(e) => setPhon(e.target.value)} placeholder="Номер телефона" />
        <input type="text" value={mail}  onChange={(e) => setMail(e.target.value)} placeholder="Электронная почта" />
        <button onClick={()=>handlePatch(user._id)}>Подтвердить</button>
        </div>
      </div>
    );
}

export default Setting;
