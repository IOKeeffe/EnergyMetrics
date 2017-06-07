import React from 'react';
import Widget from '../widget/widget';


export default class Dasboard extends React.Component {

  constructor(props) {
    super(props);
    this.renderWidgets = this.renderWidgets.bind(this);

    // this.state = {widgets: widgets}
  }

  renderWidgets() {
    return (
      this.props.widgets.map((widget, i) => {
        return (
          <Widget key={i} widget={widget} />
        );
      })
    );
  }

  render() {
    return (
      <div>
        {this.renderWidgets()}
      </div>
    );
  }
}
