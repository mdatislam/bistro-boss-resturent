
import { Navigate, useLocation, } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin,isAdminLoading]=useAdmin()
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner loading-lg"></span>

    }

    if (!user && ! isAdmin) {
        return <Navigate to='/Login' state={{ from: location }} replace></Navigate>

    }
    return children

};

export default AdminRoute;