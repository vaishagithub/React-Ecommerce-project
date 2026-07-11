import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/Images/logo2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars, faCartShopping, faCircle, faHeart, faMagnifyingGlass, faPlus, faStore, faTruckMoving, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import {useCart} from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import Categories from "./Categories";


const Navbar = () => {
  const [banner, setBanner] = useState("0% Making Charges on Gold Jewellery");
  const [currenIndex, setCurrentIndex] = useState(0);
  const [isSidebarOPen, setIsSidebarOpen] = useState(false);
  const [active, setActive] = useState("silver");
  const [search, setSearch] = useState("");
  const [showDrop,setShowDrop] = useState(false);

  const { user, logout } = useAuth();
  
  const navigate = useNavigate();
  const {cart} = useCart();
  console.log(cart);
  const products = [
    { name: "Silver Ring", path: "/rings" },
    { name: "Gold pendants", path: "/pendents" },
    { name: "Diamond earrings", path:"/earrings" },
    { name: "Silver bracelets", path : "/bracelets" },
    { name: "Silver necklaces", path : "/necklaces" },
    { name: "Silver nosepins", path : "/nosepins" },
  ];
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );
  const placeholder = [
    "Search 'Ring'",
    "Search 'Pendants'",
    "search 'Bracelets'",
    "Search 'Necklaces'",
    "Search 'NosePins '",
  ]
  
  

  
  
  useEffect(()=>{
    const interval = setInterval(()=>{
setCurrentIndex((prev)=> prev === placeholder.length-1 ? 0 : prev + 1)
    },3000);
    return(()=>clearInterval(interval));
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      setBanner((prev) =>
        prev === "0% Making Charges on Gold Jewellery"
          ? "Pan India Free Shipping!"
          : "0% Making Charges on Gold Jewellery",
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    //sidebar
    <div>
      <button onClick={() => setIsSidebarOpen(true)} className="threebar">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`sidebar ${isSidebarOPen ? "open" : ""}`}>
        <button onClick={() => setIsSidebarOpen(false)} className="wrong">
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <ul className="sidebarli">
          <li>
            <FontAwesomeIcon icon={faPlus} />
            <Link to="/rings" className="navlink">
              Shop by Category
            </Link>
          </li>
          <hr></hr>
          <li>
            <Link to="/bracelets" className="navlink">
              Gifts for Him
            </Link>
          </li>
          <hr></hr>
          <li>
            <Link to="/pendents" className="navlink">
              Gifts for Her
            </Link>
          </li>
          <hr></hr>
          <li>
            <Link to="/giftcard" className="navlink">
              Gifts Cards
            </Link>
          </li>
          <hr></hr>

          <li>
            <Link to="/Earrings" className="navlink">
              Exclusive Collections
            </Link>
          </li>
          <hr></hr>
          <li>
            <Link to="/necklaces" className="navlink">
              More at Crystals
            </Link>
          </li>
          <hr></hr>
        </ul>
      </div>
      <div className="top-banner">
        <p>{banner}</p>
      </div>
      <div className="Navbar">
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>
        {/* <div className="deliver">
          

         
        </div> */}
        {/* //Search container */}

        <div className="search-container">
          <input
            type="text"
            placeholder={placeholder[currenIndex]}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />

          {search && (
            <div className="search-results">
              {filteredProducts.map((product, index) => (
                <p
                  key={index}
                  onClick={() => {
                    navigate(product.path);
                    setSearch("");
                  }}
                >
                  {product.name}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="nav-item" onClick={() => navigate("/stores")}>
          <FontAwesomeIcon icon={faStore} />
          <p className="stores">STORES</p>
        </div>
        <div className="nav-item" onClick={() => navigate("/login")}>
          <FontAwesomeIcon icon={faUser} />
          {user ? (
            <div className="user-section">
              <p className="stores">Hi, {user.email.split("@")[0]}</p>

              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <p className="stores">ACCOUNT</p>
          )}
          {/* <p className="stores">ACCOUNT</p> */}
        </div>

        <div className="nav-item" onClick={() => navigate("/cart")}>
          <FontAwesomeIcon icon={faCartShopping} />
          <p className="stores">CART({cart.length})</p>
        </div>
      </div>
      <ul
        className="menu-item"
        style={{ overflow: "visible", position: "relative" }}
      >
        {/* Replace your <li className="one"> with this */}
        <li className="one">
          <Link to="/rings" className="navlink">
            Shop by Category
          </Link>
          {/* <FontAwesomeIcon icon={faAngleDown} /> */}

          {/* <div className="dropdown">
              <p>
                <Link to="/rings" className="navlink">
                  Rings
                </Link>
              </p>
              <p>
                <Link to="/necklaces" className="navlink">
                  Necklaces&Pendant
                </Link>
              </p>
              <p>
                <Link to="/bracelets" className="navlink">
                  Bracelets
                </Link>
              </p>
              <p>
                <Link to="/earrings" className="navlink">
                  Earrings
                </Link>
              </p>
              <p>
                <Link to="/nosepins" className="navlink">
                  Nosepins
                </Link>
              </p>
            </div> */}
        </li>
        <li className="two">
          <Link to="/bracelets" className="navlink">
            Gifts for Him
          </Link>
        </li>
        <li className="three">
          <Link to="/pendents" className="navlink">
            Gift for Her
          </Link>
        </li>
        <li className="four">
          <Link to="/giftcard" className="navlink">
            Gifts Card
          </Link>
        </li>

        <li>
          <Link to="/nosepins" className="navlink">
            Exclusive Collections
          </Link>
        </li>
        <li>
          <Link to="/necklaces" className="navlink">
            More Crystals
          </Link>
        </li>
      </ul>
      <Categories />
    </div>
  );
};

export default Navbar;
