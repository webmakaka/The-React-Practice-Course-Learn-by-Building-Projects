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
    playedFilter: 'All',
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

  showPlayed = played => {
    const list = this.state.matches.filter(match => {
      return match.final === played;
    });
    this.setState({
      filterMatches: played === 'All' ? this.state.matches : list,
      playedFilter: played,
      resultFilter: 'All'
    });
  };

  showResult = result => {
    const list = this.state.matches.filter(match => {
      return match.result === result;
    });
    this.setState({
      filterMatches: result === 'All' ? this.state.matches : list,
      playedFilter: 'All',
      resultFilter: result
    });
  };

  render() {
    return (
      <div className="the_matches_container">
        <div className="the_matches_wrapper">
          <div className="left">
            <div className="match_filters">
              <div className="match_filters_box">
                <div className="tag">Show Match</div>
                <div className="cont">
                  <div
                    className={`option ${
                      this.state.playedFilter === 'All' ? 'active' : ''
                    }`}
                    onClick={() => this.showPlayed('All')}
                  >
                    All
                  </div>
                  <div
                    className={`option ${
                      this.state.playedFilter === 'Yes' ? 'active' : ''
                    }`}
                    onClick={() => this.showPlayed('Yes')}
                  >
                    Played
                  </div>
                  <div
                    className={`option ${
                      this.state.playedFilter === 'No' ? 'active' : ''
                    }`}
                    onClick={() => this.showPlayed('No')}
                  >
                    Not Played
                  </div>
                </div>
              </div>

              <div className="match_filters_box">
                <div className="tag">Result game</div>
                <div className="cont">
                  <div
                    className={`option ${
                      this.state.resultFilter === 'All' ? 'active' : ''
                    }`}
                    onClick={() => this.showResult('All')}
                  >
                    All
                  </div>
                  <div
                    className={`option ${
                      this.state.resultFilter === 'W' ? 'active' : ''
                    }`}
                    onClick={() => this.showResult('W')}
                  >
                    W
                  </div>
                  <div
                    className={`option ${
                      this.state.resultFilter === 'L' ? 'active' : ''
                    }`}
                    onClick={() => this.showResult('L')}
                  >
                    L
                  </div>
                  <div
                    className={`option ${
                      this.state.resultFilter === 'D' ? 'active' : ''
                    }`}
                    onClick={() => this.showResult('D')}
                  >
                    D
                  </div>
                </div>
              </div>
            </div>
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
