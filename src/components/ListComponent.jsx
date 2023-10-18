import React, { useState, useEffect } from "react";
import CitiesListComponent from "./CitiesListComponent";

function ListComponent() {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    fetch("/api/v1/states")
      .then((response) => response.json())
      .then((data) => setStates(data))
      .catch((error) => {
        console.error("Error fetching states:", error);
      });
  }, []);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div>
      <select value={selectedState} onChange={handleStateChange}>
        <option key="default" value="">
          Select a state
        </option>
        {states && states.length > 0 ? (
          states.map((state) => (
            <option key={state.stateId} value={state.id}>
              {state.stateName}
            </option>
          ))
        ) : (
          <option key="no-states" value="" disabled>
            No states available
          </option>
        )}
      </select>
      <CitiesListComponent
        stateId={states.stateId}
        selectedState={selectedState.city}
      />
    </div>
  );
}

export default ListComponent;
