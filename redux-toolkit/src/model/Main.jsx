import { Carousel, CarouselItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../css/main.module.css";

function Main() {
  return (
    <div className={style.rodCarusel}>
      <div className={style.carusel}>
        <Carousel>
          <CarouselItem>
            <img
              className="d-block w-100"
              src="https://plmuskus.ru/media/slider/154-1.jpg"
              alt="First slide"
            />
          </CarouselItem>
          <CarouselItem className={style.carusel}>
            <img
              className="d-block w-100"
              src="https://plmuskus.ru/media/slider/155-1.jpg"
              alt="Second slide"
            />
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
}

export default Main;
