import React, { Component } from "react";

const withHoverEffect = (WrappedComponent) => {
  return class withHoverEffect extends Component {
    state = {
      isHover: false,
    };
    toggleIsHover = (isTrue) => {
      this.setState({
        isHover: !isTrue,
      });
    };
    render() {
      return (
        <WrappedComponent
          toggleIsHover={this.toggleIsHover}
          isHover={this.state.isHover}
          {...this.props}
        />
      );
    }
  };
};

export default withHoverEffect;
