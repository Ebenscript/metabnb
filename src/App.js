import { Route, Routes } from "react-router-dom";
import "./app.css";
import { Footer } from "./components/footer/footer";

function HomePage() {
  return <Footer />;
}

function PlacesPage() {
  return "places page";
}

function App() {
  return (
    <Routes>
      <Route path="/metabnb" element={<HomePage />} />
      <Route path="/metabnb/places" element={<PlacesPage />} />
    </Routes>
  );
}

export default App;
