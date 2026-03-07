import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import Categories from "../components/Categories"
import FeaturedProducts from "../components/FeaturedProducts"
import WhyChooseUs from "../components/WhyChooseUs";
import Brands from "../components/Brands";
import ContactCTA from "../components/ContactCTA"
import Companydet from "../components/Companydet";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Brands />
      <ContactCTA />
      <Footer />
      <Companydet/>
    </>
  );
}

export default Home;