import { React, useState } from 'react';
import Link from 'next/link'

const ForgotPassword = ({ forgot }) => {

    if (forgot) {
        return (
            <div className="flex h-[88%] w-72 justify-items-center justify-between">
                <p className="text-sm text-gray-200">
                    Please contact 
                    <button onClick={() => { window.open('mailto:e-mediate-admin@e-court.gov','_self')}}>
                        <u>e-mediate-admin@e-court.gov</u></button> to reset your password. Attach your previous
                    Arbitration details and send out your new password. Your request will be processed within 24 hours.
                </p>
            </div>
        )
    } else {
        return null
    }
}

const Login = () => {
    const [forgot, setForgot] = useState(false)
    const [signIn, setSignIn] = useState(false)

    const handleSignIn = () => {
        setSignIn(true)
    }


    if (!signIn){
    return (
        <section className="flex h-[88%] items-center justify-center">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p bg-gray-800 border-gray-800">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Admin Login for Mediators
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                                <label
                                    className="block mb-2 text-sm font-medium text-white"
                                >
                                    E-mail ID
                                </label>
                                <input
                                    type="email"
                                    className="border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••••••••"
                                    className="border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="text-sm font-medium text-blue-600 hover:underline" onClick={()=>setForgot(true)}>Forgot password?</button>
                            </div>
                            < ForgotPassword forgot={forgot} />
                            <button
                                onClick={handleSignIn}
                                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Sign in
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{" "}
                                <Link
                                    href="#"
                                    className="font-medium text-gray-400 hover:underline"
                                >
                                    Register here
                                </Link>
                            </p>
                    </div>
                </div>
            </div>
        </section>

    )
    }
}

export default Login