// src/components/SlotSelection.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SlotSelection.css'; // Import the CSS file for styling

const SlotSelection = () => {
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate('/order-success');
  };

  return (
    <div className="slot-selection-container">
      <h2>Yoga for Mind - Yoga Batch & Slot</h2>
      <div className="program-info">
        <p>
          <strong>What is Yoga for Mind?</strong>
          The Yoga for Mind sessions involve minimal physical movement and rely on techniques such as pranayama and meditation. Suited for women who cannot perform more physical forms of yoga and are looking for relief from concerns such as stress, anxiety, low mood, etc.
        </p>
        <p>
          <strong>1 Month Yoga for Mind</strong>
          <br />
          - 5 days a week
          <br />
          - Choose 4:00 PM slot
          <br />
          - Start date: [Add a dynamic start date]
          <br />
          - Cost: $119.99
        </p>
      </div>
      <div className="selection-section">
        <label>Select Batch:</label>
        <select
          value={selectedBatch}
          onChange={(e) => setSelectedBatch(e.target.value)}
        >
          <option value="">Select Batch</option>
          <option value="morning">Morning Batch</option>
          <option value="afternoon">Afternoon Batch</option>
          <option value="evening">Evening Batch</option>
        </select>

        <label>Select Slot:</label>
        <select
          value={selectedSlot}
          onChange={(e) => setSelectedSlot(e.target.value)}
        >
          <option value="">Select Slot</option>
          <option value="4:00 PM">4:00 PM</option>
          {/* Add more slot options as needed */}
        </select>
      </div>

      {/* Place Order Button */}
      <button onClick={handlePlaceOrder}>Place Order</button>

      {/* No Payment UI, flows required, as mentioned */}
    </div>
  );
};

export default SlotSelection;
