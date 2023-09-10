import Items from "../data/items.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

type CartItemType = {
  id: number;
  quantity: number;
};

const CartItem = ({ item }: { item: CartItemType }) => {
  const {
    increaseItemQuantity,
    decreaseItemQuantity,
    getItemQuantity,
    removeFromCart,
  } = useShoppingCart();
  const Item = Items.find((element) => element.id === item.id);
  const quantity = getItemQuantity(item.id);
  console.log(Item);
  return (
    <div className="w-[40%] flex justify-start items-center space-x-4  my-4">
      <div className="flex-1 h-[200px]">
        <img
          src={Item?.imgUrl}
          className="w-full h-full object-cover"
          alt={Item?.name}
        />
      </div>
      <div className="flex-2">
        <div className="mb-4 flex  space-x-4 justify-between items-center ">
          <h1 className="text-2xl">{Item?.name}</h1>
          <p>₹ {Item?.price}</p>
        </div>

        <div className="flex items-center  space-x-4">
          <button
            className="p-2 bg-[#252422] text-white "
            onClick={() => increaseItemQuantity(item.id)}
          >
            <AiOutlinePlus size={30} />
          </button>
          <p className="w-full">{quantity} In Cart</p>
          <button
            className="p-2 bg-[#252422] text-white "
            onClick={() => decreaseItemQuantity(item.id)}
          >
            <AiOutlineMinus size={30} />
          </button>
        </div>
        <h1 className="text-center font-bold">
          ₹ {(Item?.price || 0) * item.quantity}
        </h1>
        <div
          className="px-12 py-2 bg-[#ff0a54] text-white flex justify-center items-center space-x-2 uppercase font-bold my-3 cursor-pointer"
          onClick={() => removeFromCart(item.id)}
        >
          <MdDelete size={30} />
          <span>Remove</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
