import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { json } from "react-router-dom";

const Login = ({ onComplete }) => {
    const [uname, setUname] = useState('');
    const [pswd, setPswd] = useState('');
    // onComplete()
    function showPassword() {
        const pswdEl = document.getElementById('pswd');
        if (pswdEl.type == 'password') {
            pswdEl.type = 'text'
        } else {
            pswdEl.type = 'password'
        }
    }

    const handleForm = async (e) => {
        e.preventDefault();
        const toastId = toast.loading('Verifying...');

        const options = {
            method: "POST",
            body: JSON.stringify({
                username: uname,
                pswd: pswd
            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };

        try {
            const result = await fetch(import.meta.env.VITE_HOST_ADDRESS + '/users/login', options)
                .then(d => {
                    const result = d.json()
                        .then(data => {
                            if (data.status == 403) {
                                toast.error("Access denied. Incorrect credentials", {
                                    id: toastId,
                                });
                            }
                            if (data.status == 202) {
                                toast.success("Authenticating " + uname, {
                                    id: toastId
                                });
                                // console.log(data.key)
                                localStorage.setItem('key', data.key)
                                onComplete();
                            }
                            // console.log(data);
                        })
                })
        }
        catch (err) {
            toast.dismiss();
            toast.error("Server down");
        }

        e.target.reset();
    }
    return (
        <>
            <Toaster />

            <div className="font-[sans-serif]">
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                        <div className="w-full px-4 py-4 md:max-w-md">
                            <form method="POST" action="#" onSubmit={handleForm}>
                                <div className="mb-12">
                                    <h3 className="text-3xl font-extrabold text-gray-800">Sign in</h3>
                                    <p className="mt-4 text-sm text-gray-800">Monitor your livestock with ease</p>
                                </div>

                                <div>
                                    <label className="block mb-2 text-xs text-gray-800">Username</label>
                                    <div className="relative flex items-center">
                                        <input onChange={(e) => setUname(e.target.value)} name="username" type="text" required className="w-full px-2 py-3 text-sm text-gray-800 border-b border-gray-300 outline-none focus:border-blue-600" placeholder="Enter Username" />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                                            <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                                <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                                                <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <label className="block mb-2 text-xs text-gray-800">Password</label>
                                    <div className="relative flex items-center">
                                        <input onChange={(e) => setPswd(e.target.value)} id="pswd" name="password" type="password" required className="w-full px-2 py-3 text-sm text-gray-800 border-b border-gray-300 outline-none focus:border-blue-600" placeholder="Enter password" />
                                        <svg onClick={() => showPassword()} xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                                            <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded shrink-0 focus:ring-blue-500" />
                                        <label htmlFor="remember-me" className="block ml-3 text-sm text-gray-800">
                                            Remember me
                                        </label>
                                    </div>
                                    {/* <div>
                                        <a href="jajvascript:void(0);" className="text-sm font-semibold text-blue-600 hover:underline">
                                            Forgot Password?
                                        </a>
                                    </div> */}
                                </div>

                                <div className="mt-12">
                                    <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                        Sign in
                                    </button>
                                </div>

                            </form>
                        </div>

                        <div className="md:h-full bg-[#000842] rounded-xl lg:p-12 p-8">
                            <img src="/login.webp" className="object-contain w-full h-full" alt="login-image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
