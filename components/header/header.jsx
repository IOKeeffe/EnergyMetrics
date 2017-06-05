import React from 'react';

export default (props) => {
  
  const dashboardClick = () => {
      console.log("OK");
  }
  
  return (
    <div>
      <ul>
        <li className="FoodIq">
        </li>
        <li>Nav One</li>
        <li>Nav Two</li>
        <li onClick={dashboardClick}>Dashboards</li>
      </ul>
      <ul>
        <li>Help</li>
        <li>Contact</li>
        <li>John Jones</li>
      </ul>
    </div>
  );
};
