import React from 'react'
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

function MapComponent() {
    // const { isLoaded } = useLoadScript({
    //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    //   });
    //   const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
    
    

  return (
    <div className="mapComponent">
    
    <div id="homeline1"></div>
    <div className="map-container">
        <div>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.49456692266!2d30.09397347390511!3d-1.9555871367216755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca78d5fb09e7f%3A0xd780d5ab6a2908a2!2sThe%20Artemis%20AI!5e0!3m2!1sen!2srw!4v1689422000973!5m2!1sen!2srw"
        width="100%"
        height="400"
        style={{ border: '0',borderRadius:'7px 0 0 7px'}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Embedded Map"
      id="map1"
      ></iframe>

      
         </div>
</div>
  </div>
  )
}

export default MapComponent