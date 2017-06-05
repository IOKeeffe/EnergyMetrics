import React from 'react';
import Header from './header/header';
import TitleBar from './title_bar/title_bar';

export default (props) => {
  let title = "WHOA~!"
  return (
    
    <div className="content-holder">
      <Header />
      <TitleBar title={title} />
    </div>
  );
}