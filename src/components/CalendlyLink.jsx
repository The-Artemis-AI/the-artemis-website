import React from 'react';

const CalendlyLink = () => {
  const handleScheduleClick = (e) => {
    e.preventDefault();
    Calendly.initPopupWidget({ url: 'https://calendly.com/ishgatetechristian/30min' });
  };

  return (
    <div>
      {/* Replace the href attribute with a # to avoid navigating away from the page */}
      <a href="#" onClick={handleScheduleClick}>LET'S DISCUSS YOUR AI PROJECTS</a>
    </div>
  );
};

export default CalendlyLink;
