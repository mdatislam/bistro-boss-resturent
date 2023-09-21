
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useUser from "../../../hooks/useUser";


const AllUsers = () => {

        const [refetch,users]=useUser()
    //console.log(users)
    const handleDelete = (id) => {
       // console.log(id)
        const url = `http://localhost:5000/users/${id}`
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            width: 400,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                       // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your cart Item has been deleted.',
                                'success'
                            )
                        }
                        refetch()
                    })


            }
        })

    }

    const handleMakeAdmin = id => {
        console.log(id)
        const url = `http://localhost:5000/users/admin/${id}`
        fetch(url, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Modified!',
                        'User Role update successfully.',
                        'success'
                    )
                }
                refetch()
            })
    }

    return (
        <div className=" w-full">
            <Helmet>
                <title>Bistro Boss |All User</title>
            </Helmet>
            <div className="flex justify-around">
                <h2 className="uppercase"> Total Users:{users?.users?.length} </h2>

            </div>
            <div className="mt-5">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="cart-table">
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                users?.users?.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <h3>{user.name}</h3>
                                    </td>
                                    <td>{user.email}</td>
                                    <td >
                                        {
                                            user.role === 'admin' ? 'admin' :
                                                <>
                                                    <button onClick={()=>handleMakeAdmin(user._id)}><FaUserShield ></FaUserShield></button>
                                                </>
                                        }

                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(user._id)} className="btn bg-red-700 text-white btn-sm">
                                            <FaTrashAlt />
                                        </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>


        </div>
    );
};

export default AllUsers;