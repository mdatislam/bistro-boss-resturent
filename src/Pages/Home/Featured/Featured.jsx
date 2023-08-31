import SectionTitle from "../../Components/SectionTitel/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <section className="feature-background bg-fixed">
            <div>
                <SectionTitle
                heading="from our menu"
                subHeading="check it out"
                ></SectionTitle>
            </div>
            <div className="flex items-center w-100">
                <img src={featured} width={350} alt="" />
                <div className="px-2 text-white">
                    <p>March 20, 2023</p>
                    <h3 className="uppercase">where can i get some</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius necessitatibus ratione incidunt tempore quam harum dicta sed libero voluptatum vel?</p>
                </div>

            </div>
            
        </section>
    );
};

export default Featured;