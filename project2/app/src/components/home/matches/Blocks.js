import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import { firebaseMatches } from 'myFirebase';
import { firebaseLooper, reverseArray } from 'components/ui/misc';
import MatchesBlock from 'components/home/matches/MatchesBlock';

class Blocks extends Component {
  state = {
    matches: []
  };

  componentDidMount() {
    firebaseMatches
      .limitToLast(6)
      .once('value')
      .then(snapshot => {
        const matches = firebaseLooper(snapshot);
        this.setState({
          matches: reverseArray(matches)
        });
      });
  }

  showMatches = matches =>
    matches
      ? matches.map(match => (
          <Slide bottom key={match.id}>
            <div className="item">
              <div className="wrapper">
                <MatchesBlock match={match} />
              </div>
            </div>
          </Slide>
        ))
      : null;

  render() {
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}

export default Blocks;
