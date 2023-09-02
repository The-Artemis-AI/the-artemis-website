import React, { useEffect } from 'react';

const CalendlyInlineWidget = () => {
  useEffect(() => {
    // Load the Calendly script asynchronously
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up by removing the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/theartemisai/online" style={{ }}></div>
  );
};

export default CalendlyInlineWidget;
