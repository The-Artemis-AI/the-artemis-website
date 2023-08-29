import React, { useEffect, useRef } from 'react';

function HubSpotForm() {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      window.hbspt.forms.create({
        region: "eu1",
        portalId: "140328411",
        formId: "df521329-6743-4062-bfed-d13a4fec684f",
        target: '#hubspot-form-container' // Provide a target container for the form
      });
    }
  }, []);

  return (
    <div id="hubspot-form-container" ref={formRef}>
      {/* The HubSpot form will be rendered here */}
    </div>
  );
}

export default HubSpotForm;
