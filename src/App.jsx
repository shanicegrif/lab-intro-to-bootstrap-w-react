import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Travels from "./Components/Travels";

function App() {
  return (
    <main>
      <div className="container-fluid mb-5">
        <Nav />
        <Header />
        <Travels />
        <Footer />
      </div>
    </main>
  );
}

export default App;
