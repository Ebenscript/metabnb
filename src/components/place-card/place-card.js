import heart from "../../images/heart.svg";
import star from "../../images/star.svg";
import { Button } from "../button/button";
import "./place-card.css";

export function PlaceCard(props) {
  return (
    <div className="place-card">
      <div className="d-grid" style={{ "--gap": "16px" }}>
        <div className="image">
          <a href="#desert_king" className="d-block place-card__image">
            <img className="place-card__image" src={props.image} alt="" />
          </a>
          <Button isIconButton className="place-card__heart">
            <img src={heart} alt="" />
          </Button>
        </div>

        <div className="d-grid" style={{ "--gap": "10px" }}>
          <div className="d-flex justify-content-space-between">
            <a href="#desert_king" className="d-block">
              <h4>Desert king</h4>
            </a>

            <p>
              <span className="place-card__price">1MBT per night</span>
            </p>
          </div>
          <div className="d-flex justify-content-space-between">
            <p>2345km away</p>

            <p>available for 2weeks stay</p>
          </div>
          <div className="d-flex justify-content-space-between">
            <div className="d-flex" style={{ "--gap": "8px" }}>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
