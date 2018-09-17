import React, { Component } from 'react';
import HeaderComponent from '../header/Header.component'
import ContainerFluidComponent from '../containerfluid/ContainerFluid.component'

class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        HOME
        <HeaderComponent/>
        <ContainerFluidComponent/>
      </div>
    );
  }
}

export default HomeComponent;