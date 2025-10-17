import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"; 
import { BiLogIn } from "react-icons/bi";
import InputField from "../shared/inputField";
import { authenticateSignInUser } from "../../store/actions";
import { useDispatch } from "react-redux"; 
import { toast } from 'react-hot-toast';
import Spinners from "../shared/Spinners";

const LogIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const [loader, setLoader] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onTouched"
    });

    const loginHandler = async (data) => {
        console.log("LogIn Click");
        dispatch(authenticateSignInUser(data, toast, reset, navigate, setLoader));
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center bg-gray-50">
            <form
                onSubmit={handleSubmit(loginHandler)}
                className="sm:w-[500px] w-[420px] shadow-lg rounded-md py-8 sm:px-8 px-4 bg-white"
            >
                <div className="flex flex-col items-center justify-center space-y-4">
                    <BiLogIn 
                        className="
                            text-purple-600 text-6xl 
                            shadow-lg p-2 rounded-full 
                            hover:text-purple-800 hover:scale-110 
                            transition-transform duration-300
                        "
                    />
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                        LogIn
                    </h1>
                </div>
                <hr className="mt-2 mb-5 border-gray-300"/> 

                {/* Username Field */}
                <div className="flex flex-col mb-3">
                    <InputField
                        label="Username"
                        required
                        id="username"
                        type="text"
                        placeholder="Please enter your username"
                        register={register}
                        errors={errors}
                        className="p-3 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full bg-gray-100 rounded-md"
                    />
                    {errors.username && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.username?.message || "Username is required"}
                        </p>
                    )}
                </div>

                {/* Password Field */}
                <div className="flex flex-col mb-3">
                    <InputField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        placeholder="Please enter your password"
                        register={register}
                        errors={errors}
                        className="p-3 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full bg-gray-100 rounded-md"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.password?.message || "Password is required"}
                        </p>
                    )}
                </div>

                <button
                    disabled={loader}
                    className="bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 flex gap-2 items-center justify-center font-semibold text-white sm:w-[200px] w-[180px] py-2 hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 transition-all duration-200 rounded-md my-3 mx-auto block"
                    type="submit"
                >
                    {loader ? (
                        <>
                            <Spinners /> Loading...
                        </>
                    ) : (
                        <>Login</>
                    )}
                </button>

                <p className="text-center text-sm text-slate-700 mt-6">
                    Don't have an account?
                    <Link
                        className="font-semibold underline hover:text-black ml-1"
                        to="/register"
                    >
                       <span>Register Now</span> 
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default LogIn;
