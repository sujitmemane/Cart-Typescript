import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";

const CartComponent = () => {
  const { cartItems } = useShoppingCart();

  console.log(cartItems);
  return (
    <div className="">
      {cartItems.length === 0 ? (
        <div>
          <h1>No Items in Cart</h1> <button>Back To Store</button>
        </div>
      ) : (
        <div>
          {cartItems.map((element) => (
            <CartItem item={element} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartComponent;
