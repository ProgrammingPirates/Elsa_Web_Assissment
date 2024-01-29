import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Home.css';
import img from '../images/circle.jpg'

const Home = () => {
  const navigate = useNavigate();

  const handleBookTrial = () => {
    // Simulate booking a trial (static data)
    const trialData = {
      type: 'Trial',
      duration: '1 week',
      price: 99,
    };
    console.log('Booking a trial:', trialData);
    navigate('/product', { state: { packageData: trialData } });
  };

  const handleBuyPackage = () => {
    // Simulate buying a package (static data)
    const packageData = {
      type: 'Package',
      duration: '3 months',
      price: 499,
    };
    // Add logic to store or handle packageData as needed
    console.log('Buying a package:', packageData);

    // Forward to ProductPage with packageData
    navigate('/product', { state: { packageData } });
  };
  return (
     <div className="home-container">
     <div className="home-top">
     <div className="home-block">
      <h2>Yoga for Mind</h2>
      <p>Watch Our Lead Yoga Therapist, Ms Uma Subramaniam explain Yoga for Mind</p>
      </div>
      {/* Video Section */}
      <div className="video-section">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/your_youtube_video_id"
          title="Yoga for Mind Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      </div>

      {/* Program Information */}
      <div className="program-info">
        <h3>Is this for you?</h3>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
      <div className="last-card">
        <img className="home-img" src={img} alt="" />
        <p className="a">Hard to feel calm or slepp because of stress</p>
        <button className="book-trial-btn" onClick={handleBookTrial}>
          Book Trial @99
        </button>
        </div>
        <div className="last-card">
        <img className="home-img" src={img} alt="" />
        <p className="a">If you have palpitations and breathing trouble</p>
        <button className="buy-package-btn" onClick={handleBuyPackage}>
          I want to buy
        </button>
        </div>
        <div className="last-card">
        <img className="home-img" src={img} alt="" />
        <p className="a">You have been advised by doctors to avoid physical activity</p>
        <p className="a">I Have a question</p>
        </div>
      </div>
    </div>
  );
};

export default Home;