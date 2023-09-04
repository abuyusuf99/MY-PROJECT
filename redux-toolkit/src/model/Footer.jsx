import style from '../css/footer.module.css'
import img from '../img/insta.svg'


function Footer() {
  return (
    <div className={style.rod_footer_block}>
    <div className={style.footer}>
        <div className={style.footer_span}>
            <span>О компании</span>
            <span>Новости</span>
            <span>Контакты</span>
        </div>
    </div>
        <div className={style.footer_img}><a target='https://www.instagram.com/ambra_perfume95' href="https://www.instagram.com/ambra_perfume95/"><img src={img} alt="" /></a></div>
        <div className={style.footer_span1}><span>© 2023 Парфюмерная лавка "Ambra". Условия обмена и возврата товара</span></div>
    </div>
  )
}

export default Footer