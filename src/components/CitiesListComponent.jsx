import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CitiesListComponent({ selectedState, stateId }) {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();
  useEffect(
    (stateId) => {
      fetch(`/api/v1/states/cities/${stateId}`)
        .then((response) => response.json())
        .then((data) => setCities(data))
        .catch((error) => {
          console.error("Error fetching states:", error);
        });
    },
    [stateId]
  );

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedState) {
      navigate("/result", {
        state: {
          selectedStateName: selectedState,
          selectedCityName: selectedCity,
        },
      });
    }
  };
  return (
    <div>
      <select value={selectedCity} onChange={handleCityChange}>
        <option key="default" value="">
          Select a city
        </option>
        {cities && cities.length > 0 ? (
          cities.map((items) => (
            <option key={items.cityId} value={items.cityId}>
              {items.cityName}
            </option>
          ))
        ) : (
          <option key="no-states" value="" disabled>
            No city available
          </option>
        )}
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CitiesListComponent;
