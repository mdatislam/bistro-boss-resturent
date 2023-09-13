

import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleLogIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    const handleGoogleSing = () => {
        googleLogIn()
            .then(result => {
                const googlUser = result.user
                // console.log(googlUser)
                /*  */
                const userInfo = { name: googlUser.displayName, email: googlUser.email, role: 'general' }

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            // for success popup msg
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 2500
                            });

                        }
                        else {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'LogIn successfully.',
                                showConfirmButton: false,
                                timer: 2500
                            });

                        }
                    })


                navigate(from, { replace: true })


                /*  */
            })
    }

    return (
        <div className=' text-center my-3'>
            <button onClick={handleGoogleSing} className="btn w-3/4 btn-outline btn-secondary">
                Register by <FaGoogle />
            </button>
        </div>
    );
};

export default SocialLogin;