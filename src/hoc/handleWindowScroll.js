import React, { Component } from "react";

const handleWindowScroll = (WrappedComponent) => {
  return class handleWindowScroll extends Component {
    state = {
      pageCounter: 1,
    };

    toggleIsHover = (isTrue) => {
      this.setState({
        isHover: !isTrue,
      });
    };
    render() {
      return <WrappedComponent />;
    }
  };
};

export default handleWindowScroll;
