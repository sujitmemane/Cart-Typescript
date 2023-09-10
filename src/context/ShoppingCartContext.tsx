import { createContext, useContext, useState } from "react";

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: CartItemType[];
};

type CartItemType = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function ShoppingCartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const getItemQuantity = (id: number) => {
    return cartItems?.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseItemQuantity = (id: number) => {
    const newCart = cartItems?.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    const itemExists = newCart.some((item) => item.id === id);
    if (!itemExists) {
      newCart.push({ id, quantity: 1 });
    }
    setCartItems(newCart);
  };

  const decreaseItemQuantity = (id: number) => {
    let newCart = cartItems?.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    newCart = newCart?.filter((item) => item.quantity !== 1);

    setCartItems(newCart);
  };

  const removeFromCart = (id: number) => {
    const newCart = cartItems?.filter((item) => item.id !== id);
    setCartItems(newCart);
  };

  console.log(cartItems);

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,

        cartItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
