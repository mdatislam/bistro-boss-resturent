import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Order from '../../Components/SectionTitel/Order/Order';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import TabFoodItems from '../../Components/TabFoodIems/TabFoodItems';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const OrderFood = () => {
    const categories= ['Salad','pizza','soup','desserts','drinks']
    const {category}=useParams()
    const initialTabIndex= categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialTabIndex);
    const [menu] = useMenu()
        console.log(category)
    
    const drinkMenu = menu.filter(item => item.category === 'drinks')
    const desertMenu = menu.filter(item => item.category === 'dessert')
    const saladMenu = menu.filter(item => item.category === 'offered')
    const pizzaMenu = menu.filter(item => item.category === 'pizza')
    const soupMenu = menu.filter(item => item.category === 'soup')

    return (
        <div className=''>
             <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            {/* Bannar  */}
            <Cover img={orderImg} title='Order' />

            {/* Tab */}

            <div className='w-3/4 mx-auto my-5'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>

                    </TabList>
                    <TabPanel>
                        <TabFoodItems foodItem={saladMenu}></TabFoodItems>
                    </TabPanel>
                    
                    <TabPanel>
                        <TabFoodItems foodItem={pizzaMenu}></TabFoodItems>
                    </TabPanel>
                    
                    <TabPanel>
                        <TabFoodItems foodItem={soupMenu}></TabFoodItems>
                    </TabPanel>
                    
                    <TabPanel>
                        <TabFoodItems foodItem={desertMenu}></TabFoodItems>
                    </TabPanel>
                    
                    <TabPanel>
                        <TabFoodItems foodItem={drinkMenu}></TabFoodItems>
                    </TabPanel>
                    
                </Tabs>
            </div>

        </div>
    );
};

export default OrderFood;