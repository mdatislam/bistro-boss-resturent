

const MenuItems = ({ menuItems }) => {
    const { image, price, name, recipe } = menuItems
    return (
        <div>
            <div className="flex">
                <img style={{ borderRadius: "0 200px 200px 200px ", margin: "8px" }} src={image} width='70px' alt="" />
                <div className="mx-2 p-2">
                    <p className="uppercase">{name}-------</p>
                    <p >{recipe}</p>
                </div>
                <div>
                    <p className="text-yellow-500 font-semibold">${price}</p>
                </div>
            </div>

        </div>
    );


};

export default MenuItems;