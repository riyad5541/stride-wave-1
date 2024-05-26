import Accordian from "../components/home/Accordian";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Accordian></Accordian>
        </div>
    );
};

export default Home;