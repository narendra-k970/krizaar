import React, { useState, useEffect } from "react";

function MyLocation() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [address, setAddress] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        function (position) {
          const { latitude, longitude } = position.coords;
          setPosition({ latitude, longitude });
          fetchAddress(latitude, longitude);
        },
        function (error) {
          console.log("Error: ", error);
        }
      );

      // Cleanup function to clear the watch when the component is unmounted
      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  const fetchAddress = (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.address) {
          const { city, state, country } = data.address;
          setAddress(`${city}, ${state}, ${country}`);
        } else {
          console.log("No results found");
        }
      })
      .catch((error) => console.log("Error fetching address: ", error));
  };

  return (
    <div>
      {position.latitude !== null && position.longitude !== null ? (
        <div>
          {/* <img src={map} alt="map" /> */}
          <p>Address: {address}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MyLocation;
