import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoMdAppstore } from "react-icons/io";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const { cartItems } = useShoppingCart();
  const total = cartItems.length;
  return (
    <div className="my-4  px-4 py-4  bg-[#f8f9fa] flex items-center justify-between w-full">
      <div className="flex items-center space-x-8 text-xl uppercase  ">
        <NavLink to="/">
          <AiFillHome size={40} />
        </NavLink>
        <NavLink to="/store">
          <IoMdAppstore size={40} />
        </NavLink>
        <NavLink to="/about">
          <FaUserAlt size={35} />
        </NavLink>
      </div>
      <div className="relative px-6 py-5 cursor-pointer">
        <NavLink to="/cart">
          <FaShoppingCart size={35} />
          <span className=" absolute top-2 left-12 px-3 py-1 text-white bg-black rounded-full">
            {total}
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
