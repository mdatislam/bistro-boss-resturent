


const Order = ({menuItems}) => {
    const { image, price, name, recipe } = menuItems
    return (
        <div>
            <div className="card card-compact w-'424px' h-540px bg-base-100 shadow-xl">
                <figure><img src={image} width="424px" height="300px" alt="Food" /></figure>
                <p className="bg-slate-600 absolute right-0 text-white mx-4 mt-2 p-1"> $ {price}</p>

                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    
                    <div className="card-actions justify-center">
                        <button className='uppercase font-semibold btn btn-outline btn-small border-0 border-b-4 border-orange-300'>add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;