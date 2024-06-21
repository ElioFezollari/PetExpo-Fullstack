
import AboutUs from "./Components/HomeComponents/AboutUs";
import ContactUs from "./Components/HomeComponents/ContactUs";
import Hero from "./Components/HomeComponents/Hero";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Hero/>
    <AboutUs/>
    <ContactUs/>
    </>
  );
};
export default Home;
