import React from 'react';
import Row from './Row';

export default ({widget}) => {
  let data = widget.data;
  let size = widget.size;
  let title = widget.title;
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
    <div className={`widget-${size}`}>
      <h3>{title}</h3>
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
