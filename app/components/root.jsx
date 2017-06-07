import React from 'react';
import Header from './header/header';
import TitleBar from './title_bar/title_bar';
import Widget from './widget/widget';
import AddWidget from './add_widget/add_widget';

export default (props) => {
  let title = "Dashboard";
  let name = "Foods";
  let size = 1;
  let description = "All the foods";
  let data = [{name: 'banana', country: 'Brazil'}, {name: 'peach', country: 'Georgia'}];
  
  return (
    
    <div className="content-holder">
      <Header />
      <TitleBar title={title} />
      <Widget name={name} size={size} description={description} data={data} />
      <AddWidget />
    </div>
  );
}