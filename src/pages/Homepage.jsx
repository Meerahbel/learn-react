import Footer from "../components/Footer";
import Header from "../components/Header";
import Homesec1 from "../components/Homesec1";
import Homesec2 from "../components/Homesec2";
import Homesec3 from "../components/Homesec3";
import Homesec4 from "../components/Homesec4";

const Homepage = () => {
  return (
    <>
      <Header />
      <main className="">
        <Homesec1 />
        <Homesec2 />
        <Homesec3 />
        <Homesec4 />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
