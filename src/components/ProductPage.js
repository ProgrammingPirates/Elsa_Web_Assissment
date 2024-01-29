import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProductPage.css'; 
import yoga from '../images/yoga.jpg'
const ProductPage = () => {
  const packages = [
    { duration: '6 Months', price: '2999', originalPrice: '5499' },
    { duration: '3 Months', price: '999', originalPrice: '' },
    { duration: '1 Month', price: '4499', originalPrice: '9999' },
  ];

  const navigate = useNavigate();

  const handleBuyPackage = (packageInfo) => {
    navigate(`/slot-selection?package=${packageInfo.duration}`);
  };

  return (
    <div className="product-page-container">
    <div className="left-container">
    <h2>Yoga for Mind</h2>
    <div className="image">
      <img className="product-img" src={yoga} alt="Yoga for Mind" style={{ width: '100%', height: '100%', borderRadius: '4px' }} />
    </div>
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
              <span className="discounted-price">₹{packageInfo.price}</span>
              {packageInfo.originalPrice && (
                <span className="original-price">₹{packageInfo.originalPrice}</span>
              )}
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
        <ul>
          <li>A chat group on the Elda app where you can connect with your trainer and the rest of the Elda Yoga Community</li>
          <li>Ability to reschedule your class if you miss your session</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default ProductPage;
