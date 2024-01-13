import Counter from "../components/Fragments/Counter";
import Footer from "../components/Layouts/Footer";
import Hero from "../components/Layouts/Hero";
import Navbar from "../components/Layouts/Navbar";

const Home = () => {
  return (
    <div className="bg-putih">
      <Navbar />;
      <Hero />
      <Counter />
      <Footer />
    </div>
  );
};
export default Home;
