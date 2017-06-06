import React from 'react';

export default ({data, isHeader}) => {
  
  const renderRow = (data) => {
    return (
      Object.keys(data).map((title, i) =>{
        return (
          <li key={i}>{data[title]}</li>
        );})
    );
  }
    
  return (
    <ul>
      {renderRow(data)}
    </ul>
  );
};