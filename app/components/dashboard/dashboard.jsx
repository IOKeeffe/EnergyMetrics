import React from 'react';

export default class Dasboard extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  renderWidgets() {
    let returnArray = [];
    props.widgets.map((widget, i) => {
      return(
        <Widget data={props.widgets[i].data} />
      );
    });
    return returnArray;
  }

  render() {
    return (
      {renderWidgets()}
    );
  }
}