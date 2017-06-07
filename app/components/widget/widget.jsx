import React from 'react';
import Row from './Row';

export default ({size, data, name, description}) => {
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
        Object.keys(data[0]).map((title, i) => {
          return (
            <li key={i}>{title}</li>
          )
        })
    );
  }

  return (
    <div className={`widget-${size}`}>
      <h3>{name}</h3>
      <p>{description}</p>
      <ul>
        <ul>
          {renderTitles(data)}
        </ul>
        {renderData(data)}
      </ul>
    </div>
  );
};
