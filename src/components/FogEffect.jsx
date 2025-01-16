import React, { useEffect } from 'react';

const FogEffect = () => {
  useEffect(() => {
    // Import Vanta and Three.js scripts when the component mounts
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.r134.min.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://cdn.jsdelivr.net/npm/vanta@0.5.0/dist/vanta.fog.min.js';
    script2.async = true;
    document.body.appendChild(script2);

    // Initialize the VANTA.FOG effect when the scripts are loaded
    script2.onload = () => {
      window.VANTA.FOG({
        el: "#vanta-fog-container",  // Set the ID of the container element
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x20203d,
        midtoneColor: 0x3031d,
        lowlightColor: 0x181833,
        baseColor: 0x0,
      });
    };

    // Cleanup the scripts when the component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div id="vanta-fog-container" style={{ width: '100%', height: '100vh' }}>
      {/* Content goes here */}
      <h1 style={{ color: 'white', zIndex: 10, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        Welcome to My Portfolio
      </h1>
    </div>
  );
}

export default FogEffect;
