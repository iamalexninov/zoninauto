import HomeHero from "./Hero/HomeHero";
import Features from "../../components/Features/Features";
import About from "../../components/About/About";
import YoutubeReviews from "../../components/YoutubeReviews/YoutubeReviews";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Features />
      <About />
      <YoutubeReviews />
    </>
  );
};

export default Home;
