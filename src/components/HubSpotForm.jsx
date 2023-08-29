import React, { useEffect } from 'react';

function HubSpotForm() {
  useEffect(() => {
    // This will create the HubSpot form when the component mounts
    window.hbspt.forms.create({
      region: "eu1",
      portalId: "140328411",
      formId: "df521329-6743-4062-bfed-d13a4fec684f"
    });
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div>
      {/* The HubSpot form will be rendered here */}
    </div>
  );
}

export default HubSpotForm;
