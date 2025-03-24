import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const navigate = useNavigate();
  const currency = "PKR ";
  const delivery_fee = 200;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  const [cartItems, setCartItems] = useState(() => {
    // Load cart from localStorage on initial render
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  // **Persist cart changes to localStorage**
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // **Add to Cart Function**
  const addToCart = (itemId, size, sizes) => {
    if (!itemId) {
      toast.error("Invalid product");
      return;
    }
    if (sizes.length > 0 && !size) {
      toast.error("Please select a size");
      return;
    }

    setCartItems((prevCart) => {
      let cartData = { ...prevCart };

      if (cartData[itemId]) {
        if (cartData[itemId][size]) {
          cartData[itemId][size] += 1;
        } else {
          cartData[itemId][size] = 1;
        }
      } else {
        cartData[itemId] = { [size]: 1 };
      }

      toast.success("Added to cart!");
      return cartData;
    });
  };
  // **Add To Wishlist**
  const addToWishlist = (e, product) => {
    if (!product || !product.id) {
      toast.error("Invalid product!");
      return;
    }

    const exists = wishlist.find((item) => item.id === product.id);

    if (exists) {
      toast.info("Item is already in the wishlist!");
    } else {
      setWishlist([...wishlist, product]);
      toast.success(`${product.name} added to wishlist!`);
      navigate(`/wishlist`);
      e.preventDefault();
      e.stopPropagation();
    }
  };
  // **Update Quantity**
  const updateQuantity = (itemId, size, newQuantity) => {
    if (newQuantity < 1) return; // Minimum quantity is 1

    setCartItems((prevCart) => {
      let updatedCart = { ...prevCart };
      updatedCart[itemId][size] = newQuantity;
      return updatedCart;
    });
  };

  // **Remove from Cart**
  const removeFromCart = (itemId, size) => {
    setCartItems((prevCart) => {
      let updatedCart = { ...prevCart };

      if (updatedCart[itemId] && updatedCart[itemId][size]) {
        delete updatedCart[itemId][size];

        if (Object.keys(updatedCart[itemId]).length === 0) {
          delete updatedCart[itemId]; // Remove item completely if no sizes left
        }
      }

      toast.info("Item removed from cart!");
      return updatedCart;
    });
  };

  // **Get Total Cart Count**
  const getCartCount = () => {
    return Object.values(cartItems).reduce(
      (total, sizes) =>
        total + Object.values(sizes).reduce((sum, qty) => sum + qty, 0),
      0
    );
  };
  // **Remove from Wishlist**
  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );
    toast.error("Item removed from Wishlist.");
  };
  const getWishlistCount = () => {
    return wishlist.length;
  };

  // **Context Value**
  const value = {
    removeFromWishlist,
    getWishlistCount,
    addToCart,
    navigate,
    updateQuantity,
    removeFromCart,
    getCartCount,
    cartItems,
    products,
    currency,
    delivery_fee,
    search,
    addToWishlist,
    wishlist,
    showSearch,
    setSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
