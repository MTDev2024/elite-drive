import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/ui/Button";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <main className="flex-1">
          <Button
            label="Réserver"
            variant="primary"
            onClick={() => alert("cliqué")}
          />
          <Button
            label="En savoir plus"
            variant="secondary"
            onClick={() => alert("cliqué")}
          />
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
