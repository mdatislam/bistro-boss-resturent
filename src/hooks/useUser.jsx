import { useQuery } from "@tanstack/react-query";


const useUser = () => {
    const { refetch, data: users = [] } = useQuery(
        ['users'], async () => {
            const res = await fetch('http://localhost:5000/users',{
                headers:{
                    authentication: `Bearer ${localStorage.getItem('token')}`
                }
            })
            return res.json()

        }
    )
    //console.log(users)
    return [ refetch,users]
   
};

export default useUser;