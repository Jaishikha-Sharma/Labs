import React from 'react';
import './Feedback.css';

const FeedbackForm = () => {
  return (
    <div className="feedback-form-container">
      <h3 style={{ fontSize: "20px", textAlign: "left" }}><b>Feedback Form</b></h3>
      <form>
        <div className="form-row mt-5">
          <div className="form-group">
            <label>Name of Customer:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Mobile Number:</label>
            <input type="text" />
          </div>
        </div>
        
        <div className="form-group">
          <label>Address:</label>
          <textarea rows="2" style={{width:"208%"}}></textarea>
        </div>
        
        <p>Please tick mark the appropriate statement:</p>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
