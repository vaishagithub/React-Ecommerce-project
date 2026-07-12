import  { useEffect, useState } from 'react'
import img1 from "../assets/Images/Banner1.webp";
import img2 from "../assets/Images/Banner2.webp";
import img3 from "../assets/Images/banner3.webp";

const HeroBanner = () => {
    const images = [img1,img2,img3];
    const[currentIndex,setCurrentIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 3000);
      return () => clearInterval(interval);
    },[]);
  return (
    <div className="img-con">
      <img src={images[currentIndex]} alt="banner" className="image1" />
      <div className="img-contwo">
        <button onClick={() => setCurrentIndex(0)} className="dot">1</button>
        <button onClick={() => setCurrentIndex(1)} className="dot">2</button>
        <button onClick={() => setCurrentIndex(2)} className="dot">3</button>
      </div>
    </div>
  );
}

export default HeroBanner
