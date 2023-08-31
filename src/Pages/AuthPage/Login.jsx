import { useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const [disable,setDisable]=useState(true)
    const [block,setBlock]=useState(true)
    const captchaRef= useRef('')
    useEffect(() => {
        loadCaptchaEnginge(7)
    }, [])
 const handleCaptcha=()=>{
    
    const user_captcha_value= captchaRef.current.value 

    if (validateCaptcha(user_captcha_value)) {
        setDisable(false)
        setBlock(false)
    }

    else {
        alert('Captcha Does Not Match');
    }
    console.log(user_captcha_value)
 }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)

    }
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
                                <input type="text" placeholder="password" className="input input-bordered" name='password' />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            {/* Captcha verify part */}
                          <div style={{display:block ? 'block':'none'}} className=" form-control" >
                                <label className=" label  p-2 rounded-lg my-2 border-2">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" placeholder="type above captcha" ref={captchaRef} className="input input-bordered"
                                />
                                <button onClick={handleCaptcha} className="btn btn-outline btn-xs my-2"> Verify Captcha</button>

                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;