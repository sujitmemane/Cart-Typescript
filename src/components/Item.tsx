import { ItemType } from "../types/types";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { MdDelete } from "react-icons/md";

const Item = ({ item }: { item: ItemType }) => {
  const {
    increaseItemQuantity,
    getItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(item.id);

  return (
    <div className="bg-[#f8f9fa] p-1">
      <div className="w-full h-[200px]">
        <img
          src={item.imgUrl}
          className="w-full h-full object-cover"
          alt={item.name}
        />
      </div>

      <div className="flex my-2 items-center justify-between">
        <h1 className="text-2xl">{item.name}</h1>
        <p className="text-md">₹ {item.price}</p>
      </div>
      {quantity === 0 ? (
        <button
          className="w-full py-4 flex items-center justify-center space-x-2 uppercase bg-[#252422] text-white font-bold"
          onClick={() => {
            console.log("Button Clicked");
            increaseItemQuantity(item.id);
          }}
        >
          <AiOutlinePlus size={30} />
          <p>Add To Cart </p>
        </button>
      ) : (
        <div>
          <div className="flex justify-center items-center space-x-3">
            <button
              className="p-2 bg-[#252422] text-white "
              onClick={() => increaseItemQuantity(item.id)}
            >
              <AiOutlinePlus size={30} />
            </button>
            <span>{quantity} In Cart</span>
            <button
              className="p-2 bg-[#252422] text-white "
              onClick={() => decreaseItemQuantity(item.id)}
            >
              <AiOutlineMinus size={30} />
            </button>
          </div>

          <div
            className="px-12 py-2 bg-[#ff0a54] text-white flex justify-center items-center space-x-2 uppercase font-bold my-3 cursor-pointer"
            onClick={() => removeFromCart(item.id)}
          >
            <MdDelete size={30} />
            <span>Remove</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
