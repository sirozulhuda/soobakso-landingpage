import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Menu from "./components/Menu.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
