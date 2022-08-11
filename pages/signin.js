import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Signin = () => {
    const [message , setMessage] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();


    const createUser = async(user) => {

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        };

        const res = await fetch('http://localhost:3000/api/signup',settings);
        const data = await res.json();


        if(data.success){
            alert('User created successfully');
            router.push('/')

        }


    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if(e.target.password.value !== e.target.confirmpass.value){

            setError('Passwords do not match');
            return;
        }

        const user = { 
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        };

        createUser(user);

        
    };


   

   






    return (
        <div className="py-28">
            <h2 className="text-center text-2xl font-bold">Register</h2>


            <div className="card flex justify-center items-center max-w-xl bg-base-100 shadow-xl mx-auto my-10 px-6">

                <div className="card-body">
                    <form onSubmit={handleSubmit} className="my-20  flex flex-col gap-5">

                        <div className="">
                            <input type="email" name='email' required placeholder="Email" className="input input-bordered  w-96" />
                        </div>

                        <div className="">
                            <input type="text" name='username' required placeholder="Username" className="input input-bordered  w-96" />
                        </div>

                        <div className=" ">
                            <input type="text" name='password' required placeholder="Password" className="input input-bordered  w-96" />
                        </div>

                        <div className=" ">
                            <input type="text" name='confirmpass'  required placeholder="Confirm Password" className="input input-bordered  w-96" />
                        </div>

                        <p className='text-green-500'>{message}</p>
                        <p className='text-red-500'>{error}</p>


                        <div className=" ">
                            <input type="submit" value='SIGN UP' required className="btn text-start" />
                        </div>

                        <div>
                            Already Have a Account ?

                            <Link href={'/login'}><span className="text-emerald-500 font-bold cursor-pointer"> Login</span></Link>
                        </div>









                    </form>
                </div>
            </div>


        </div>
    );
};

export default Signin;