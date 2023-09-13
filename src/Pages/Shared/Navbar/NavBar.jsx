import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaCartArrowDown, } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
import useUser from "../../../hooks/useUser";




const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [, users] = useUser()
    //console.log(user) 
    const navigate = useNavigate()

    const handleSignOut = () => {
        logOut()
            .then(() => { })
        navigate('/Login')
    }

    const [carts] = useCart()
    //console.log(carts)
    const logedUser = users?.users?.find(u => u.email === user?.email)

    return (
        <>
            <div className="Footer-text navbar fixed z-10 max-w-screen-lg mx-auto bg-pink-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>


                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro-Boss </a>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Menu'>Our Menu</Link></li>
                        <li><Link to='/Order/Salad'>Order Food</Link></li>

                        {user ?
                            <div className="flex ">
                                <button className="btn btn-ghost " onClick={handleSignOut}>LogOut</button>
                                <div className="avatar">
                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                            </div>

                            :
                            <li><Link to='/Login'>Login</Link></li>}

                        <li>
                            <Link to={logedUser?.role === 'admin' ? '/DashBoard/AdminHome' : '/DashBoard/UserHome'}>
                                <div className="indicator">
                                    <a className="btn btn-ghost normal-case text-2xl"><FaCartArrowDown /></a>
                                    <span className="indicator-item badge badge-warning">+{carts?.data?.length}</span>
                                </div>
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

        </>
    );
};

export default NavBar;