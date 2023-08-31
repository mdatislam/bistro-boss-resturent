
import { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitel/SectionTitle';
import MenuItems from '../../../Shared/MenuItems/MenuItems';

const PopularMenu = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch('menuItems.json')
        .then(res=> res.json())
        .then(data=>{
            const popularItem= data.filter(item=> item.category==='popular')
            setMenu(popularItem)
        })
    },[])
    return (
        <div className='my-10'>
            <section>
                <SectionTitle
                heading="from our Menu"
                subHeading={"check it out"}
                ></SectionTitle>
            </section>
            <div>
                <div className='grid md:grid-cols-2 gap-2'>
                    {
                        menu.map((item)=> <MenuItems
                        key={item._id}
                        menuItems={item}
                        ></MenuItems>)
                    }
                </div>
                <div className='text-center '>
                    <button className='uppercase font-semibold btn btn-outline btn-small border-0 border-b-4'> veiw full Menu</button>
                </div>
                
            </div>
            
        </div>
    );
};

export default PopularMenu;