import logoLight from "../../images/logo-light.svg";
import instagram from "../../images/icon-instagram.svg";
import twitter from "../../images/icon-twitter.svg";
import facebook from "../../images/icon-facebook.svg";
import "./footer.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div
          className="d-grid md-d-flex md-justify-content-space-between align-items-flex-start"
          style={{ "--gap": "50px" }}
        >
          <div className="d-grid" style={{ "--gap": "126px" }}>
            <Link to="/metabnb">
              <img src={logoLight} alt="" />
            </Link>

            <div className="d-grid" style={{ "--gap": "56px" }}>
              <div
                className="footer-social-links d-flex"
                style={{ "--gap": "41px" }}
              >
                <a href="#facebook">
                  <img src={facebook} alt="" />
                </a>
                <a href="#instagram">
                  <img src={instagram} alt="" />
                </a>
                <a href="#twitter">
                  <img src={twitter} alt="" />
                </a>
              </div>

              <p
                className="footer__copyright d-flex"
                style={{ "--gap": "10px" }}
              >
                <span>&copy;</span> <span>2022 Metabnb</span>
              </p>
            </div>
          </div>

          <div className="d-grid" style={{ "--gap": "23px" }}>
            <p className="footer__links-header">Community</p>

            <ul className="d-grid" style={{ "--gap": "16px" }}>
              <li>
                <a className="footer__link" href="#nft">
                  NFT
                </a>
              </li>
              <li>
                <a className="footer__link" href="#tokens">
                  Tokens
                </a>
              </li>
              <li>
                <a className="footer__link" href="#landlords">
                  Landlords
                </a>
              </li>
              <li>
                <a className="footer__link" href="#discord">
                  Discord
                </a>
              </li>
            </ul>
          </div>

          <div className="d-grid" style={{ "--gap": "23px" }}>
            <p className="footer__links-header">Places</p>

            <ul className="d-grid" style={{ "--gap": "16px" }}>
              <li>
                <a className="footer__link" href="#nft">
                  Castle
                </a>
              </li>
              <li>
                <a className="footer__link" href="#tokens">
                  Farms{" "}
                </a>
              </li>
              <li>
                <a className="footer__link" href="#landlords">
                  Beach
                </a>
              </li>
              <li>
                <a className="footer__link" href="#discord">
                  Learn more
                </a>
              </li>
            </ul>
          </div>

          <div className="d-grid" style={{ "--gap": "23px" }}>
            <p className="footer__links-header">About us</p>

            <ul className="d-grid" style={{ "--gap": "16px" }}>
              <li>
                <a className="footer__link" href="#nft">
                  Road map
                </a>
              </li>
              <li>
                <a className="footer__link" href="#tokens">
                  Creators{" "}
                </a>
              </li>
              <li>
                <a className="footer__link" href="#landlords">
                  Career
                </a>
              </li>
              <li>
                <a className="footer__link" href="#discord">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
