import Link from 'next/link';
import React from 'react';

const Signin = () => {
    return (
        <div className="py-28">
            <h2 className="text-center text-2xl font-bold">Register</h2>


            <div className="card flex justify-center items-center max-w-xl bg-base-100 shadow-xl mx-auto my-10 px-6">

                <div className="card-body">
                    <form className="my-20  flex flex-col gap-5">

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
                            <input type="text" name='password' required placeholder="Confirm Password" className="input input-bordered  w-96" />
                        </div>


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