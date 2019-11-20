import React, { Component } from 'react';

class MatchesList extends Component {
  state = {
    matchesList: []
  };

  static getDerivedStateFromProps(props, state) {
    return (state = {
      matchesList: props.matches
    });
  }

  render() {
    return <div>list</div>;
  }
}

export default MatchesList;
