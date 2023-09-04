import Header from './model/Header'
import style from './css/app.module.css'
import Footer from './model/Footer'
function App() {
  return (
    <div className={style.app1} >
    <div className={style.header}><Header/></div>
    <div className={style.footer}><Footer/></div>
    </div>
  )
}

export default App