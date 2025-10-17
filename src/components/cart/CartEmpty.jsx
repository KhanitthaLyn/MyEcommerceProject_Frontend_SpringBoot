import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const CartEmpty = () => {
    return (
        <div className="min-h-[800px] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
                <MdShoppingCart size={80} className="text-slate-500 md:text-4xl" />
                <div className="text-3xl font-bold text-shadow-sky-700">
                    Your cart is empty
                </div>
                <div className="text-lg text-shadow-sky-700">
                    Add some products to get started
                </div>
            </div>
            <div className="mt-6">
                <Link
                    to="/"
                    className="flex gap-2 items-center text-blue-500 hover:text-blue-500 transition">
                        <MdArrowBack size={24} />
                        <span className="font-medium">Start Shopping</span>
                </Link>
            </div>
        </div>
    )
}

export default CartEmpty;
