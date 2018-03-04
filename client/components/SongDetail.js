import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import { Link } from 'react-router';

import CreateLyric from './CreateLyric';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) {
      return null;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <CreateLyric songId={this.props.params.id} />
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => ({
    variables: { id: props.params.id },
  })
})(SongDetail);