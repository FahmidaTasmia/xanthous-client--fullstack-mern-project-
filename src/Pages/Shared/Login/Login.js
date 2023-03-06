import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from '../../../asset/Log.png'


const Login = () => {


    //form
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn,providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

  

    const handleLogin = data => {
      console.log(data);
      setLoginError('');
      signIn(data.email, data.password)
          .then(result => {
              const user = result.user;
              console.log(user);
              navigate(from, {replace: true});
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
       <div className=''>
         <div className='hero w-full my-20 ' >
            <div className='hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row'>

            <div className="w-[100vh]">
             <img src={logo} alt="" />
            </div>
            <div className='w-96 p-7'>
                <div className='grid justify-items-center'>
                <h2>LOG IN</h2>
                </div>
               
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-primary text-white font-bold w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Cmart ?<Link className='text-secondary' to="/register">Please <span className='text-primary font-bold'>Create new Account</span></Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full hover:bg-primary hover:border-none gap-2' onClick={handleGoogleSignIn}><FaGoogle></FaGoogle>CONTINUE WITH GOOGLE</button>

              
            </div>
            </div>
           
        </div>
       </div>
    );
};

export default Login;