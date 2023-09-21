
import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import './MyCart.css'
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const MyCart = () => {
    const [carts, refetch] = useCart()
    /* const {image,name,price}=carts?.data */
    //console.log(carts?.data)

    const getTotalPrice = (cart) => {
        const reducer = (pre, current) => pre + current.price
        const total = cart?.reduce(reducer, 0)
        return total
    }
    const totalPrice = getTotalPrice(carts?.data)

    /*  const total = carts?.data?.reduce((sum,item)=> item.price + sum,0) */

    const handleDelete = (id) => {
        // console.log(id)
        const url = `http://localhost:5000/cart/${id}`
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            width: 400,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your cart Item has been deleted.',
                                'success'
                            )
                        }
                        refetch()
                    })


            }
        })


    }

    return (
        <div className=" w-3/4">
            <Helmet>
                <title>Bistro Boss |My Cart</title>
            </Helmet>
            <div className="flex justify-around bg-slate-200 mt-4 rounded-lg py-2 items-center">
                <h2 className="uppercase text-bold"> Total Orders: {carts?.data?.length}</h2>
                <div className="flex">
                    <span> Total price:</span>
                    <span className="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{totalPrice}</span>
                    </span>
                </div>
                <Link to='/DashBoard/Payment'>
                   {totalPrice>0 && <button className=" btn btn-warning btn-sm">PAY</button>}
                </Link>
            </div>
            <div className="mt-5">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="cart-table">
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                carts?.data?.map(cart => <tr
                                    key={cart._id}
                                >
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={cart.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h3>{cart.name}</h3>
                                    </td>
                                    <td>{cart.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(cart?.orderItemId)} className="btn bg-red-700 text-white btn-sm">
                                            <FaTrashAlt />
                                        </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>


        </div>
    );
};

export default MyCart;