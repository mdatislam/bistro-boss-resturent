import { Link, useNavigate } from "react-router-dom";
import { FaCartArrowDown, } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";




const NavBar = () => {

    const { user, logOut } = useAuth()
    const [isAdmin] = useAdmin()
    const navigate = useNavigate()

    const handleSignOut = () => {
        logOut()
            .then(() => { })
        navigate('/Login')
    }

    const [carts] = useCart()
    //const isAdmin=true

    const menuItem = <>
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

       {user && <li>
            <Link to={isAdmin ? '/DashBoard/AdminHome' : '/DashBoard/UserHome'}>
                <div className="indicator">
                    <a className="btn btn-ghost normal-case text-2xl"><FaCartArrowDown /></a>
                    <span className="indicator-item badge badge-warning">+{carts?.data?.length}</span>
                </div>
            </Link>
        </li>}
    </>


    return (
        <>
            <div className="Footer-text navbar fixed z-10 max-w-screen-lg mx-auto bg-pink-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-500 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <p className="btn btn-ghost normal-case text-xl">Bistro-Boss </p>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItem}
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