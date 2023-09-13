import { useContext } from 'react';
import loginImg from '../../assets/others/authentication1.png'
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const name = event.target.name.value
        const PhotoURL = event.target.PhotoURL.value /* "https://lh3.googleusercontent.com/a/AAcHTtfxoDz7-XRhvHrfhyJK9H0ChlVZrOA-oHC33Z7YIEYG28o=s96-c" */
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log("From signUp", user)
                updateUser(name, PhotoURL)
                    .then(() => {
                        console.log('User Name update')
                        // userInfo send to database

                        const userInfo = { name, email, role: 'general' }

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
                            })


                        navigate(from, { replace: true })
                    })
            })
            .catch(error => console.log(error.message))


    }
    return (
        <div className="card bg-base-300 shadow-xl  border-2 ">
            <div className="hero  bg-base-200 mt-5">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center hidden lg:block">
                        <img src={loginImg} alt="logimg" />
                    </div>
                    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5" onSubmit={handleSubmit}>
                        <div className="card-body mt-3">
                            <div className="text-center">
                                <h1 className="text-xl font-bold">Register now!</h1>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" name='name' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered" name='PhotoURL' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </div>
                        <SocialLogin />
                    </form>

                </div>
            </div>


        </div>
    );
};

export default SignUp;