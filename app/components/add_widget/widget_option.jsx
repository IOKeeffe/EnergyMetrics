import React from 'react';


export default ({ type }) => {
  const widgetTypes = {
    "table": {
      title: "Table",
      img: "./public/images/widgettype-table.svg"
    },
    "donut": {
      title: "Donut Chart",
      img: "./public/images/widgettype-donutchart.svg"
    },
    "bar": {
      title: "Bar Chart",
      img: "./public/images/widgettype-barchart.svg"
    },
    "line": {
      title: "Bar Graph",
      img: "./public/images/widgettype-linegraph.svg"
    }
  };
  
  return(
    <div className="widget-option"> 
      <div className="widget-option-header">
        {widgetTypes[type].title}
      </div>
      <div className="widget-option-graphic">
        <img src={widgetTypes[type].img}></img>
      </div>
      <div className="widget-option-size-list">
        <ul>
          <li>1/3 Width</li>
          <li>2/3 Width</li>
          <li>Full Width</li>
        </ul>
      </div>
    </div>
  );
};