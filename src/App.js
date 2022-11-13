import { Route, Routes } from "react-router-dom";
import "./app.css";
import { DefaultLayout } from "./components/default-layout/default-layout";

function HomePage() {
  return (
    <DefaultLayout>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique
      enim repellendus officia qui incidunt distinctio dolor tempora laudantium
      mollitia! Commodi ut quibusdam esse odit nesciunt possimus. In, accusamus
      sunt.
    </DefaultLayout>
  );
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
