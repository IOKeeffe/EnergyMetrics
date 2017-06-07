import React from 'react';


export default class WidgetOption extends React.Component {

  constructor(props) {
    super(props);
    this.widgetTypes = {
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
    }
  }

  render() {
    return(
      <div className="widget-option">
        <div className="widget-option-header">
          {this.widgetTypes[this.props.type].title}
        </div>
        <div className="widget-option-graphic">
          <img src={this.widgetTypes[this.props.type].img}></img>
        </div>
        <div className="widget-option-size-list">
          <ul>
            <li onClick={(e) => {this.props.selectSize(1)}}>1/3 Width</li>
            <li onClick={(e) => {this.props.selectSize(2)}}>2/3 Width</li>
            <li onClick={(e) => {this.props.selectSize(3)}}>Full Width</li>
          </ul>
        </div>
      </div>
    );
  }
};
