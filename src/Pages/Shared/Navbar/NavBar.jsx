import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <>
            <div className="Footer-text navbar fixed z-10 max-w-screen-lg mx-auto bg-blue-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            
                          
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro-Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Menu'>Our Menu</Link></li>
                        <li><Link to='/Order/Salad'>Order Food</Link></li>
                        <li><Link to='/Contact'>Contact</Link></li>
                        <li><Link to='/Login'>Login</Link></li>
                        
                        
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