import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SlotSelection from './SlotSelection';
import yogaImage from '../images/yoga.jpg';
import './YogaForMind.css';

const YogaForMind = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const handleBuyPackage = () => {
    console.log('Buying the Yoga for Mind package');
  };

  return (
    <div>
      <h2>Yoga for Mind</h2>

      <div>
        <img src={yogaImage} alt="Yoga for Mind" />
      </div>

      <div>
        <h3>What is Yoga for Mind?</h3>
        <p>
          The Yoga for Mind program is designed to address concerns such as stress, anxiety, low mood, etc. It involves minimal physical movement and focuses on techniques like pranayama and meditation.
        </p>
      </div>

      <div>
        <h3>Yoga for Mind - Package</h3>
        <p>
          1 Month Yoga for Mind
          <br />
          5 days a week
          <br />
          Change plan
          <br />
          Pick a start date
          <br />
          Dates are available only for the next 2 weeks
          <br />
          ₹1199
          <br />
          ₹1999
        </p>

        <h3>Select Time Slot</h3>
        <select
          value={selectedTimeSlot}
          onChange={(e) => setSelectedTimeSlot(e.target.value)}
        >
          <option value="">Select Time Slot</option>
          <option value="5:00 PM-5:40 PM">5:00 PM - 5:40 PM (Tue, Wed, Thu)</option>
          {/* Add the new time slot option as requested */}
          <option value="8:00 AM-8:40 AM">8:00 AM - 8:40 AM (Mon, Tue, Wed, Thu, Fri)</option>
        </select>

        {/* Link to SlotSelection with query parameter */}
        <Link to={`/slot-selection?timeSlot=${selectedTimeSlot}`}>
          <button onClick={handleBuyPackage}>Buy Package</button>
        </Link>
      </div>

      {/* Include the SlotSelection component if needed */}
      {/* <SlotSelection /> */}
    </div>
  );
};

export default YogaForMind;