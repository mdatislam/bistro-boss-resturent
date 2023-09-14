import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUser = () => {
    const [axiosSecure]=useAxiosSecure()
    const { refetch, data: users = [] } = useQuery(
        ['user'], async () => {
            const res = await axiosSecure.get('/users')
            return res.data

        }
    )
    //console.log(users)
    return [ refetch,users]
   
};

export default useUser;