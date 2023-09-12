import { useContext } from "react"
import { AuthContext } from "../Pages/Provider/AuthProvider"
import {  useQuery } from "@tanstack/react-query"




const useCart = () => {

    const { user } = useContext(AuthContext)
    //console.log(user)
    const { isLoading,refetch, data:carts=[] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json()
        },
    })
    return [carts, refetch,isLoading]

}
export default useCart