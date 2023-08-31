
import Order from "../SectionTitel/Order/Order";


const TabFoodItems = ({ foodItem }) => {
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    foodItem.map(item => <Order
                        key={item._id}
                        menuItems={item}

                    ></Order>)
                }
            </div>

        </div>
    );
};

export default TabFoodItems;