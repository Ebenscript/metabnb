import { Route, Routes } from "react-router-dom";
import "./app.css";
import { Header } from "./components/header/header";

function HomePage() {
  return <Header />;
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
