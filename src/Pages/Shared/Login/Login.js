import React, { useContext, useState } from 'react'
import beg from '../../../asset/beg.jpg'
import { AuthContext } from '../../../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from './../../../hooks/useToken';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
function Login() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn,providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }

    //google
    const handleGoogleSignIn=()=>{
      providerLogin(googleProvider)
      .then(result=>{
          const user = result.user;
          console.log(user);
      })
      .catch(error=>console.error(error));

  }
  return (
    <div className=' relative lg:pt-24 py-8 min-h-screen' style={{backgroundImage:(`url(${beg})`), backgroundSize:'cover', }}  >
       <div className="absolute inset-0  bg-[#020B0D] opacity-30"></div>
       <div className='p-12 lg:p-8'></div>
      <div className='lg:w-[50%] md:w-[60%] grid content-center m-auto border-double border-[5px] border-accent md:p-10 w-[90%]' data-aos="zoom-in-up">
      <div className='text-white  scale-75 text-xl '>
       <form  onSubmit={handleSubmit(handleLogin)}  >
                    <div className="form-control  ">
                        <label className="label"> <span className="label-text text-white text-xl">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full rounded-none border-primary bg-transparent" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full rounded-none">
                        <label className="label"> <span className="label-text text-white text-xl">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full rounded-none border-primary bg-transparent" />
                        <label className="label"> <span className="label-text  text-xl text-primary">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-primary text-white  w-full rounded-none border-primary text-xl tracking-wider' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='mt-2'>New to Xanthous ? <Link className='text-secondary' to="/register">Please <span className='text-primary font-bold'>Create new Account</span></Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full rounded-none border-primary text-xl tracking-wider text-white hover:bg-primary hover:border-none gap-2' onClick={handleGoogleSignIn}><FaGoogle></FaGoogle>CONTINUE WITH GOOGLE</button>
       </div>
      </div>
      <div className='p-5 lg:p-12'></div>
    </div>
  )
}

export default Login
