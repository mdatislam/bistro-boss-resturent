import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import coverImg from '../../assets/menu/pizza-bg.jpg'
import MenuCatagory from "./MenuCatagory/MenuCatagory";



const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={coverImg} title={"Our Menu"}></Cover>
            <MenuCatagory/>
           
        </div>
    );
};

export default Menu;