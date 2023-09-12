import { FaCalendarAlt, FaCommentDots, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";



const DashBoard = () => {
    const [carts]=useCart()
    return (
        <div>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full  bg-[#D1A054]">
                        {/* Sidebar content here */}
                        <li>
                            <NavLink to='/DashBoard/Home' >
                            <FaHome/> User Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/DashBoard/Reservation'>
                            <FaCalendarAlt/> Reservation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/DashBoard/History'>
                            <FaWallet/>Payment History
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/DashBoard/MyCart'>
                                 <FaShoppingCart/> My Cart 
                                 <span className="indicator-item badge badge-warning">+{carts?.data?.length}</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/DashBoard/Review'>
                                 <FaCommentDots/> Add Review
                            </NavLink>
                        </li>
                        <div className="divider"></div>
                        <li><NavLink to='/'> <FaHome/> Home</NavLink></li>
                        <li><NavLink to='/Menu'>Our Menu</NavLink></li>
                        <li><NavLink to='/Order/Salad'>Order Food</NavLink></li>
                        <li><NavLink to='/Secret'>Secret</NavLink></li>
                        
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoard;