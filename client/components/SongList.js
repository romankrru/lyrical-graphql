import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import gql from 'graphql-tag';
import flowRight from 'lodash.flowright';

import fetchSongs from '../queries/fetchSongs';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(({id, title}) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`songs/${id}`}>
            {title}
          </Link>
          <span
            onClick={() => this.onSongDelete(id)}
            className="secondary-content"
          >
            <i className="material-icons red-text SongList-delete-icon">delete</i>
          </span>
        </li>
      );
    });
  }

  onSongDelete(id) {
    this.props.mutate({
      variables: {id: id},
    }).then(() => this.props.data.refetch());
  }

  render() {
    if (this.props.data.loading) {
      return <div>loading...</div>;
    }

    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          to="songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default flowRight([
  graphql(mutation),
  graphql(fetchSongs),
])(SongList);