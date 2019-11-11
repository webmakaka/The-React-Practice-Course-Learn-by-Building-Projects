import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.7329733187676!2d-98.16051859966059!3d26.399813238255437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665bd157e3ec285%3A0x1c88aed9952c5e2b!2s9602%20N%20Seminary%20Rd%2C%20Edinburg%2C%20TX%2078541%2C%20USA!5e0!3m2!1sen!2sru!4v1573484097999!5m2!1sen!2sru"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen=""
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
