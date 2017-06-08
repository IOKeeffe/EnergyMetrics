import React from 'react';
import Row from './Row';

export default ({widget}) => {
  let data = widget.data;
  let size = widget.size;
  let name = widget.name;
  let description = widget.description;

  const renderData = (data) => {
    return (
        data.map((rowObject, i) => {
          return (
            <Row data={rowObject} key={i}/>
          );
        })
    );
  }

  const renderTitles = (data) => {
    return (
        Object.keys(data[0]).map((columnTitle, i) => {
          return (
            <li key={i}>{columnTitle}</li>
          )
        })
    );
  }

  return (
    <div className={`widget-size-${size}`}>
      <div className="widget-content">
        <div className="widget-header">
          <div className="widget-title-section">
            <h3>{name}</h3>
            <div className="icon-section">
              <img src="./public/images/icon-settings-copy.svg"></img>
              <img src="./public/images/icon-move.svg"></img>
            </div>
          </div>
          <p className="widget-description">{description}</p>
        </div>

        <ul className="rows">
          <ul className="title-row">
            {renderTitles(data)}
          </ul>
          {renderData(data)}
        </ul>
      </div>
    </div>
  );
};
