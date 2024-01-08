import HomeHero from "./Hero/HomeHero";
import Service from "../../components/Service/Service";
import AboutPreview from "../../components/AboutPreview/AboutPreview";
import YoutubeReviews from "../../components/YoutubeReviews/YoutubeReviews";
import Companies from "../../components/Companies/Companies";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Service />
      <AboutPreview />
      <YoutubeReviews />
      <Companies />
    </>
  );
};

export default Home;
