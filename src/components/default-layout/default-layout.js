import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import "./default-layout.css";

export function DefaultLayout(props) {
  return (
    <div className="default-layout">
      <Header />

      <main>{props.children}</main>

      <div className="default-layout__footer">
        <Footer />
      </div>
    </div>
  );
}
