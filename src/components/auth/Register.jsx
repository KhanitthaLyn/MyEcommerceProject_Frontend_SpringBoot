import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FiUserPlus } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../shared/inputField';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import Spinners from '../shared/Spinners';
import { registerNewUser } from '../../store/actions';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
        mode: "onTouched",
    });

    const registerHandler = async (data) => {
        console.log("Register Click");
        dispatch(registerNewUser(data, toast, reset, navigate, setLoader));
     };

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center bg-gray-50">
            <form
                onSubmit={handleSubmit(registerHandler)}
                className="sm:w-[450px] w-[360px] shadow-lg py-8 sm:px-8 px-4 rounded-xl bg-white border border-gray-200">
                    {/* Icon & Title */}
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <FiUserPlus 
                            className="text-purple-600 text-6xl shadow-lg p-3 rounded-full hover:text-purple-800 hover:scale-110 transition-transform duration-300"
                        />
                        <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                            Register
                        </h1>
                    </div>

                    <hr className="mt-4 mb-5 border-gray-300" />

                    {/* Input Fields */}
                    <div className="flex flex-col gap-4">
                        <InputField
                            label="UserName"
                            required
                            id="username"
                            type="text"
                            message="*UserName is required"
                            placeholder="Enter your username"
                            register={register}
                            errors={errors}
                            className="p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full"
                        />

                        <InputField
                            label="Email"
                            required
                            id="email"
                            type="email"
                            message="*Email is required"
                            placeholder="Enter your email"
                            register={register}
                            errors={errors}
                            className="p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full"
                        />

                        <InputField
                            label="Password"
                            required
                            id="password"
                            min={6}
                            type="password"
                            message="*Password is required"
                            placeholder="Enter your password"
                            register={register}
                            errors={errors}
                            className="p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full"
                        />
                    </div>

                    {/* Register Button */}
                    <button
                        disabled={loader}
                        className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 flex gap-2 items-center justify-center font-semibold text-white w-full py-2 hover:from-pink-300 hover:via-purple-300 hover:to-blue-300 transition-all duration-200 rounded-md my-4"
                        type="submit">
                        {loader ? (
                            <>
                            <Spinners /> Loading...
                            </>
                        ) : (
                            <>Register</>
                        )}
                    </button>

                    {/* Link to Login */}
                    <p className="text-center text-sm text-slate-700 mt-6">
                      Already have an account?
                      <Link
                        className="font-semibold underline hover:text-black ml-1"
                        to="/login">
                      <span> Login</span></Link>  
                    </p>
            </form>
        </div>
    );
}

export default Register;
