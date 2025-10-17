import { SyncLoader } from "react-spinners";

const Loader = ({ text }) => {
    return (
        <div className="flex justify-center items-center w-full h-[450px]">  
            <div className="flex flex-col items-center gap-1">
                <SyncLoader
                    color="#2ca97b"
                    speedMultiplier={1}
                />
                <p className="text-slate-700">
                    {text ? text : "Please wait..."}
                </p>
            </div>  
        </div>
    )
}

export default Loader;
