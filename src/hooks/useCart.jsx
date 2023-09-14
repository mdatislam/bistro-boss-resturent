
import {  useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"




const useCart = () => {

    const { user,loading } = useAuth()
    const [axiosSecure]=useAxiosSecure()
    //console.log(user)
    const { isLoading,refetch, data:carts=[] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data
        },
    })
    return [carts, refetch,isLoading]

}
export default useCart