import HomeHero from "./Hero/HomeHero";
import About from "../../components/About/About";
import YoutubeReviews from "../../components/YoutubeReviews/YoutubeReviews";
import Companies from "../../components/Companies/Companies";

const Home = () => {
  return (
    <>
      <HomeHero />
      <About />
      <YoutubeReviews />
      <Companies />
    </>
  );
};

export default Home;
