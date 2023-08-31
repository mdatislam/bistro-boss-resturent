
import Featured from "../Featured/Featured";
import SwaiperSlider from "../SwaiperSlider";
import Testimonial from "../Testimonial/Testimonial";
import CarouselAwesome from "./CarouselAwesome";
import PopularMenu from "./PopularMenu/PopularMenu";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <CarouselAwesome />
            <SwaiperSlider />
            <PopularMenu />
            <Featured />
            <Testimonial />
        </div>
    );
};

export default Home;