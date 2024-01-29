import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Home.css';

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
      <h2>Yoga for Mind</h2>
      <p>Watch Our Lead Yoga Therapist, Ms Uma Subramaniam explain Yoga for Mind</p>
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

      {/* Program Information */}
      <div className="program-info">
        <h3>Is this for you?</h3>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <button className="book-trial-btn" onClick={handleBookTrial}>
          Book Trial @99
        </button>
        <button className="buy-package-btn" onClick={handleBuyPackage}>
          I want to buy
        </button>
        <p className="a">I Have a question</p>
      </div>
    </div>
  );
};

export default Home;