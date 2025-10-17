import { MdArrowBack } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemContent from "./ItemContent";
import CartEmpty from "./CartEmpty";
import { formatPrice } from "../../utils/formatPrice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.carts);
  const newCart = { ...cart };

  newCart.totalPrice = cart?.reduce(
    (acc, cur) => acc + Number(cur?.specialPrice) * Number(cur?.quantity),
    0
  );

  if (!cart || cart.length === 0) return <CartEmpty />;

  return (
    <div className="lg:px-20 sm:px-10 px-5 py-12 bg-gradient-to-b from-slate-50 to-white min-h-screen transition-all duration-300">
      {/* Header */}
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 flex items-center gap-3">
          <FiShoppingCart size={38} className="text-custom-blue" />
          Your Cart
        </h1>
        <p className="text-base text-gray-500 mt-2 tracking-wide">
          Review all your selected products
        </p>
      </div>

      {/* Cart Header */}
      <div className="grid md:grid-cols-5 grid-cols-4 gap-4 pb-3 border-b border-gray-200 font-semibold text-gray-700 uppercase text-sm">
        <div className="md:col-span-2 justify-self-start lg:ps-4">Product</div>
        <div className="justify-self-center">Price</div>
        <div className="justify-self-center">Quantity</div>
        <div className="justify-self-center">Total</div>
      </div>

      {/* Item List */}
      <div className="divide-y divide-gray-100 mt-2">
        {cart &&
          cart.length > 0 &&
          cart.map((item, i) => <ItemContent key={i} {...item} />)}
      </div>

      {/* Summary */}
      <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-8">
        <div></div>
        <div className="flex flex-col gap-3 sm:w-[350px] w-full bg-white rounded-2xl border border-slate-100 shadow-md p-6 transition-all duration-300 hover:shadow-lg">
          <div className="flex justify-between text-lg font-semibold text-gray-800">
            <span>Subtotal</span>
            <span>{formatPrice(newCart?.totalPrice)}</span>
          </div>

          <p className="text-sm text-gray-500">
            Taxes and shipping will be calculated at checkout.
          </p>

          <Link className="w-full" to="/checkout">
            <button
              onClick={() => {}}
              className="w-full py-3 mt-1 rounded-lg bg-custom-blue text-white font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 active:scale-[0.97] transition-all duration-300 shadow-sm"
            >
              <FiShoppingCart size={20} />
              Proceed to Checkout
            </button>
          </Link>

          <Link
            className="flex gap-2 items-center justify-center text-gray-500 hover:text-custom-blue transition duration-300 mt-3 text-sm"
            to="/products"
          >
            <MdArrowBack size={18} />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
