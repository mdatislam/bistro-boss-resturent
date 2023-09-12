import Swal from "sweetalert2";
import { useLocation, useNavigate, } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useCart from "../../../../hooks/useCart";


const Order = ({ menuItems, }) => {
    const { image, price, name, recipe,_id } = menuItems
    const { user } = useContext(AuthContext)
const [,refetch]=useCart()
   const location=useLocation()
   const navigate=useNavigate()

    const handleCart = (item) => {
     
        if (user && user.email) {
            //console.log(item)
            const orderItem= {orderItemId:_id,price,name,image,email:user.email}
            fetch('http://localhost:5000/cart', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    //console.log(data)
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item add successfully',
                            showConfirmButton: false,
                            timer: 2500
                        })
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please Login to add to cart',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/Login', {state:{from:location}})
                   
                }
            })
        }
    }
    return (
        <div>
            <div className="card card-compact w-'424px' h-540px bg-base-100 shadow-xl">
                <figure><img src={image} width="424px" height="300px" alt="Food" /></figure>
                <p className="bg-slate-600 absolute right-0 text-white mx-4 mt-2 p-1"> $ {price}</p>

                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>

                    <div className="card-actions justify-center">
                        <button onClick={() => handleCart(menuItems)} className='uppercase font-semibold btn btn-outline btn-small border-0 border-b-4 border-orange-300'>add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;