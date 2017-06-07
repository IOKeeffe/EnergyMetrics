import React from 'react';

export default class Dasboard extends React.Component {

  constructor(props) {
    super(props);
    this.renderWidgets = this.renderWidgets.bind(this);
  }

  renderWidgets() {
    let returnArray = [];
    if(this.props.widgets) {
      this.props.widgets.map((widget, i) => {
        return(
          <Widget data={data} />
        );
      });
    }
    return returnArray;
  }

  render() {
    return (
      <div>
        {this.renderWidgets()}
      </div>
    );
  }
}
