
import { Link } from 'react-router-dom';
import MenuItems from '../../Shared/MenuItems/MenuItems';

const MenuCategoryItems = ({categoryItems,title}) => {
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-2'>
                    {
                        categoryItems.map((item) => <MenuItems
                            key={item._id}
                            menuItems={item}
                        ></MenuItems>)
                    }
                </div>
                <div className='text-center '>
                    <Link to={`/Order/${title}`}>
                        <button className='uppercase font-semibold btn btn-outline btn-small border-0 border-b-4'>order food</button>
                        </Link>
                </div>

        </div>
    );
};

export default MenuCategoryItems;