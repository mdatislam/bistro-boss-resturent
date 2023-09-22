import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth"

const useAdmin = () => {
    const { user,loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { isLoading: adminLoading ,data: isAdmin} = useQuery({
        queryKey: ['isAdmin'],
        enabled: !loading,
        queryFn: async () => {

            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            //console.log(res)
            return res.data.admin
        }
    })
    return [isAdmin, adminLoading]

}
export default useAdmin