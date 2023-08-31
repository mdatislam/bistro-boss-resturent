
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitel/SectionTitle';
import Cover from '../../Shared/Cover/Cover';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import MenuCategoryItems from './MenuCategoryItems';


const MenuCatagory = () => {
    const [menu] = useMenu()
    const offeredMenu = menu.filter(item => item.category === 'offered')
    const desertMenu = menu.filter(item => item.category === 'dessert')
    const saladMenu = menu.filter(item => item.category === 'offered')
    const pizzaMenu = menu.filter(item => item.category === 'pizza')
    const soupMenu = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <div>
                {/* offered section */}
                <SectionTitle heading="today's offer" subHeading="Don't Miss"></SectionTitle>
                <MenuCategoryItems categoryItems={offeredMenu}></MenuCategoryItems>
            </div>

            <div className='my-10'>
                {/* Desserts section */}
                <Cover img={dessertImg} title="desserts"></Cover>
                <MenuCategoryItems categoryItems={desertMenu} title="desserts"></MenuCategoryItems>
            </div>

            <div className='my-10'>
                {/* Pizza section */}
                <Cover img={pizzaImg} title="pizza"></Cover>
                <MenuCategoryItems categoryItems={pizzaMenu} title="pizza"></MenuCategoryItems>

            </div>

            <div className='my-10'>
                {/* Salads section */}
                <Cover img={saladImg} title="salad"></Cover>
                <MenuCategoryItems categoryItems={saladMenu} title="salad"></MenuCategoryItems>


            </div>
            <div className='my-10'>
                {/* Soup section */}
                <Cover img={soupImg} title="soup"></Cover>

                <MenuCategoryItems categoryItems={soupMenu} title="soup"></MenuCategoryItems>

            </div>

        </div>
    );
};

export default MenuCatagory;