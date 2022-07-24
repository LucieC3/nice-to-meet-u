import "./styles/Wishlist.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Wish from "../components/wishlist/Wish";
import Header from "../components/header/Header";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/wishlist`)
      .then((response) => response.data)
      .then((data) => {
        setWishlist(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="global-wishlist">
      <Header />
      <div className="wish-list-container">
        <div className="wish-list">
          {wishlist &&
            wishlist.map((wish) => (
              <li key={wish.id}>
                <Wish wish={wish} />
              </li>
            ))}
        </div>
      </div>
    </div>
  );
}
