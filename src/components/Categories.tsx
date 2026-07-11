import { Link } from "react-router-dom";
import ring from "../assets/Images/rings.png";
import bracelet from "../assets/Images/bracelets.png";
import pendents from "../assets/Images/pendant.png";
import earrings from "../assets/Images/earrings.png";

import necklace from "../assets/Images/necklace.png";
import nosepins from "../assets/Images/nosepins.png";

import "./Categories.css";

const Categories = () => {
  const categories = [
    { name: "Rings", path: "/rings", image: ring },
    { name: "Bracelets", path: "/bracelets", image: bracelet },
    { name: "Pendants", path: "/pendents", image: pendents },
    { name: "Earrings", path: "/earrings", image: earrings },
    { name: "Necklaces", path: "/necklaces", image: necklace },
    { name: "Nosepins", path: "/nosepins", image: nosepins },
   
  ];
  return (
    <div className="categories">
      {categories.map((category) => (
        <Link to={category.path} key={category.name}>
          <div className="category-card">
            <img src={category.image} alt={category.name} className="ring" />
            <h1 className="orn">{category.name}</h1>
          </div>
         
        </Link>
      ))}
    </div>
  );
};

export default Categories;
