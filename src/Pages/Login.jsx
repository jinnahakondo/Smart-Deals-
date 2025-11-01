import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContex } from '../Auth/AuthContex';

const Login = () => {
    const { googleSingIn, signIn, setLoading } = use(AuthContex)


    // login
    const handelLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        signIn(email, password)
            .then(res => {
                console.log(res.user);
                setLoading(false)
            })
            .catch(error => console.log(error.code))
        console.log("clicked");
    }

    // googleSingIn
    const handelGoogleLogin = () => {
        googleSingIn()
            .then(res => {
                console.log(res.user);
                const newUser = {
                    name: res.user.displayName,
                    email: res.user.email,
                    image: res.user.photoURL
                }
                // save user to database 
                fetch("http://localhost:3000/users", {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => console.log("data after save to database:", data))

                setLoading(false)
            })
            .catch(error => console.log(error.code))
        console.log("clicked");
    }
    return (
        <div className="card bg-base-100 w-full max-w-md mx-auto shrink-0 shadow-2xl">
            <div className="card-body">
                <h2 className='text-3xl font-bold text-center '>Login</h2>
                <p className='text-center text-lg'>Don't have an account? <Link to={'/auth/register'} className='gradient bg-clip-text text-transparent '> Register Now</Link></p>
                <form onSubmit={handelLogin}>
                    <fieldset className="fieldset">
                        {/* Email  */}
                        <div>
                            <label className="label text-base">Email</label>
                            <input type="email" name='email' className="input  w-full  text-base" placeholder="Email" />
                        </div>
                        {/* password  */}
                        <div>
                            <label className="label text-base">Password</label>
                            <input type="password" name='password' className=" w-full input text-base" placeholder="Password" />
                        </div>
                        <div><a className="link link-hover text-base">Forgot password?</a></div>
                        <button className="btn text-white gradient mt-4 text-base">Login</button>
                    </fieldset>
                </form>
                <div className='flex justify-center items-center gap-1.5'>
                    <div className='h-0.5 bg-gray-400 w-full '></div>
                    <p className='text-base'>OR</p>
                    <div className='h-0.5 bg-gray-400 w-full'></div>
                </div>
                {/* Google */}
                <button
                    onClick={handelGoogleLogin}
                    className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Login;