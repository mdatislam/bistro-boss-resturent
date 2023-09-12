import { useContext, useEffect,  useState } from 'react';
import loginImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2'
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    //const [disable, setDisable] = useState(true)
    const [block, setBlock] = useState(true)
    const navigate = useNavigate()
    const location= useLocation()
   
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        loadCaptchaEnginge(7)
    }, [])
    const handleCaptcha = (e) => {

        const user_captcha_value = e.target.value

        if (validateCaptcha(user_captcha_value)) {
            //setDisable(false)
            setBlock(false)
        }

        else {
            alert('Captcha Does Not Match');
        }
        //console.log(user_captcha_value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        //console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log('login', user)
                Swal.fire({
                    position: '',
                    icon: 'success',
                    title: 'login success ',
                    showConfirmButton: false,
                    timer: 15000
                })
                navigate(from,{replace:true})
            })

    }

    
   /*  const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)

            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                console.log(errorMessage)

            });
    } */



    return (
        <div className="card bg-base-300 shadow-xl  border-2 ">
            <div className="hero  bg-base-200 mt-5">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center hidden lg:block">
                        <img src={loginImg} alt="logimg" />
                    </div>
                    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5" onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="text-center">
                                <h1 className="text-xl font-bold">Login now!</h1>
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

                            {/* Captcha verify part */}
                            <div style={{ display: block ? 'block' : 'none' }} className=" form-control" >
                                <label className=" label  p-2 rounded-lg my-2 border-2">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" onBlur={handleCaptcha} placeholder="type above captcha" className="input input-bordered"
                                />
                                {/* <button className="btn btn-outline btn-xs my-2"> Verify Captcha</button> */}

                            </div>

                            {/* to do button disable write {disable} instead of {false} */}
                            <p>New here?<Link to='/SignUp'>Create New account</Link></p>
                            <div className="form-control mt-6">
                                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </div>
                        <SocialLogin/>
                    </form>

                </div>
            </div>
            

        </div>
    );
};

export default Login;