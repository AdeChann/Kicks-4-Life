import Card from "../components/Layouts/Card";
import Caraousel from "../components/Layouts/Carousel";
import Footer from "../components/Layouts/Footer";
import Hero from "../components/Layouts/Hero";
import Navbar from "../components/Layouts/Navbar";

const Home = () => {
  return (
    <div className="bg-putih">
      <Navbar />;
      <Hero />
      <Footer />
    </div>
  );
};
export default Home;
