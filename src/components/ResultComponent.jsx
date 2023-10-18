// ResultComponent.js
import React from "react";
import { useLocation } from "react-router-dom";

function ResultComponent() {
  const location = useLocation();
  const { selectedCityName, selectedStateName } = location.state;

  return (
    <div>
      <h1>
        You Have selected {selectedCityName}, {selectedStateName}
      </h1>
    </div>
  );
}

export default ResultComponent;
