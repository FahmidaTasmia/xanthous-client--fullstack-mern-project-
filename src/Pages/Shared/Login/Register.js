import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../../hooks/useToken';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import beg from '../../../asset/beg.jpg'
import { FaGoogle } from 'react-icons/fa';
function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser,providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

   useEffect(()=>{
     if(token){
        navigate('/');
    }
   },[navigate, token])

    const handleSignUp = (data) => {
        
        console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                // const user = result.user;
                // // console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.select);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const saveUser = (name, email, role) =>{
   
        const user ={name, email,role};
        console.log(user);
        fetch('https://secondhand-seller-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setCreatedUserEmail(email);
        })
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
       <div className='p-5 md:p-16 lg:p-8'></div>
      <div className='lg:w-[50%] md:w-[60%] grid content-center m-auto border-double border-[5px] border-accent md:p-10 w-[90%]' data-aos="zoom-in-up">
      <div className='text-white  scale-75 text-xl '>
      <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full bg-transparent border-primary rounded-none">
                        <label className="label"> <span className="label-text text-xl text-white">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full bg-transparent border-primary rounded-none" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full bg-transparent border-primary rounded-none">
                        <label className="label"> <span className="label-text text-xl text-white">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full bg-transparent border-primary rounded-none" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full bg-transparent border-primary rounded-none">
                        <label className="label"> <span className="label-text text-xl text-white">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full bg-transparent border-primary rounded-none" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <div className='form-control grid self-center mt-5'>
                    <label className='bg-transparent' >before submit select who you are!</label>
                    <select {...register("select", { required: "required*" })} className="select select-bordered select-sm mt-2 bg-transparent border border-primary rounded-none text-xl tracking-wider my-3">
                            <option value="seller">Seller</option>
                            <option value="User">User</option>
            
                     </select>
                    </div>
                    <input className='btn btn-primary text-white  w-full mt-4 text-xl tracking-wider rounded-none mb-2 ' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}

                    


                </form>
                <p>Already have an account ?<Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full rounded-none border-primary text-xl tracking-wider text-white hover:bg-primary hover:border-none gap-2' onClick={handleGoogleSignIn}><FaGoogle></FaGoogle>CONTINUE WITH GOOGLE</button>
       </div>
      </div>
      <div className='p-5 lg:p-12'></div>
    </div>
  )
}

export default Register
