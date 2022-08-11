import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const Login = ({setKey}) => {







    const router = useRouter();


    const loginUser = async(user) => {

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        };

        const res = await fetch('http://localhost:3000/api/login',settings);
        const data = await res.json();

        console.log(data.token);

        if(data.success){
            alert('sucessfully logged in');
            localStorage.setItem('token',data.token);
            router.push('/');
          

        }else{
            alert(data.message);
        }


    }


    const handleSubmit = (e) => {
        e.preventDefault();

    

        const user = { 
            email: e.target.email.value,
            password: e.target.password.value
        };

        loginUser(user);

        
    };










    return (
        <div className="py-28">
            <h2 className="text-center text-2xl font-bold">Login</h2>


            <div className="card flex justify-center items-center max-w-xl bg-base-100 shadow-xl mx-auto my-10 px-6">

                <div className="card-body">
                    <form onSubmit={handleSubmit} className="my-20  flex flex-col gap-5">

                        <div className="">
                            <input type="email" name='email' required placeholder="Email" className="input input-bordered  w-96" />
                        </div>

                        <div className=" ">
                            <input type="text" name='password' required placeholder="Password" className="input input-bordered  w-96" />
                        </div>

                        <div>
                            Forgotten Password ?
                        </div>

                        <div className=" ">
                            <input type="submit" value='Login' required className="btn text-start" />
                        </div>

                        <div>

                            <Link href={'/signin'}><span className="text-emerald-500 font-bold cursor-pointer"> Create a Account</span></Link>
                        </div>









                    </form>
                </div>
            </div>


        </div>
    );
};

export default Login;