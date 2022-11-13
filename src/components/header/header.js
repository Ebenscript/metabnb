import NiceModal from "@ebay/nice-modal-react";
import { Link, NavLink } from "react-router-dom";
import hamburger from "../../images/hamburger.svg";
import logo from "../../images/logo.svg";
import { ConnectWalletModal } from "../../modal/connect-wallet/connect-wallet";
import { MobileMenu } from "../../modal/mobile-menu/mobile-menu";
import { Button } from "../button/button";
import "./header.css";

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="d-flex justify-content-space-between align-items-center">
          <Link to="/metabnb">
            <img src={logo} alt="" />
          </Link>

          <div className="top-nav d-none lg-d-flex" style={{ "--gap": "48px" }}>
            <NavLink className="header__nav-link" to="/metabnb">
              Home
            </NavLink>
            <NavLink className="header__nav-link" to="/metabnb/places">
              Place to stay
            </NavLink>
            <a className="header__nav-link" href="#NFTs">
              NFTs
            </a>
            <a className="header__nav-link" href="#Community">
              Community
            </a>
          </div>

          <Button
            onClick={() => NiceModal.show(ConnectWalletModal)}
            className="button d-none lg-d-block"
          >
            Connect wallet
          </Button>

          <Button
            isIconButton
            onClick={() => NiceModal.show(MobileMenu)}
            className="lg-d-none"
          >
            <img src={hamburger} alt="" />
          </Button>
        </div>
      </div>
    </header>
  );
}
