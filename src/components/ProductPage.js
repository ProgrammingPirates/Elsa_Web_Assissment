import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProductPage.css'; 
import yoga from '../images/yoga.jpg'
import yog from '../images/11.jpg'
import yo from '../images/22.jpg'
const ProductPage = () => {
  const packages = [
    { duration: '6 Months',originalPrice: '5499', price: '2999',newdur:'9 months' },
    { duration: '3 Months',originalPrice: '4874', price: '999',newdur:'5 months' },
    { duration: '1 Month',originalPrice: '9999',price: '4499',newdur:'3 months' },
  ];

  const navigate = useNavigate();

  const handleBuyPackage = (packageInfo) => {
    console.log('Navigating...', packageInfo);
    navigate(`/slot-selection?package=${packageInfo.duration}`);
    //navigate(`/slot-selection?duration=${packageInfo.duration}&price=${packageInfo.price}&newdur=${packageInfo.newdur}`);
  };

  return (
    <div className="product-page-container">
    <div className="left-container">
    <h2>👩‍⚕ Yoga for Mind</h2>
    <div className="image">
      <img className="product-img" src={yoga} alt="Yoga for Mind" style={{ width: '100%', height: '100%', borderRadius: '4px' }} />
    </div>
    <h2>What is Yoga for Mind</h2>
    <p className="text">
      The Yoga for Mind sessions involve minimal physical movement and rely on techniques such as pranayama and meditation. Suited for women who cannot perform more physical forms of yoga and are looking for relief from concerns such as stress, anxiety, low mood, etc.
    </p>
    </div>
    <div className="right-container">
      <h3>Choose your package</h3>
      <div className="packages-container">
        {packages.map((packageInfo, index) => (
          <div key={index} className="package-card">
          <div className="left-card">
            <h4>{packageInfo.duration}</h4>
            <div className="price-container">
              {packageInfo.originalPrice && (
                <span className="original-price">₹{packageInfo.originalPrice}</span>
              )}
              <span className="discounted-price">₹{packageInfo.price}</span>
            </div>
            </div>
            <div className="right-card">
            <button onClick={() => handleBuyPackage(packageInfo)}>BUY NOW</button>
          </div>
          </div>
        ))}
      </div>
      <div className="additional-benefits">
        <p>What you'll get:</p>
            <ul class="feature-list">
      <li>
        <img src={yo} alt="Chat Icon" /> A chat group on the Elda app where you can connect with your trainer and the rest of the Elda Yoga Community
      </li>
      <li>
        <img src={yog} alt="Calendar Icon" /> Ability to reschedule your class if you miss your session
      </li>
    </ul>


      </div>
    </div>
    </div>
  );
};

export default ProductPage;
