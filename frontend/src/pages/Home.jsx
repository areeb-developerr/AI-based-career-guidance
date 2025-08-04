import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-[url('/images/bg-hero.jpg')] bg-cover bg-center brightness-50" />
      <Navbar />
    </div>
  );
};

export default Home;
