import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { firebaseMatches } from 'myFirebase';
import { firebaseLooper, reverseArray } from 'components/ui/misc';

import LeagueTable from 'components/the_matches/LeagueTable';
import MatchesList from 'components/the_matches/MatchesList';

class TheMatches extends Component {
  state = {
    loading: true,
    matches: [],
    filterMatches: [],
    playerFilter: 'All',
    resultFilter: 'All'
  };

  componentDidMount() {
    firebaseMatches.once('value').then(snapshot => {
      const matches = reverseArray(firebaseLooper(snapshot));

      this.setState({
        loading: false,
        matches,
        filterMatches: matches
      });
    });
  }

  render() {
    return (
      <div className="the_matches_container">
        <div className="the_matches_wrapper">
          <div className="left">
            <div className="match_filters"></div>
            <MatchesList matches={this.state.filterMatches} />
          </div>
          <div className="right">
            <LeagueTable />
          </div>
        </div>
      </div>
    );
  }
}

export default TheMatches;
