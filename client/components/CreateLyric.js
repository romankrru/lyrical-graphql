import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class CreateLyric extends Component {
  constructor() {
    super();

    this.state = {
      content: '',
    }
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId,
      },
    }).then(() => console.log('Lyric added'));

    this.setState({
      content: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a lyric</label>
        <input
          value={this.state.content}
          onChange={(e) => {
            this.setState({
              content: e.target.value,
            })
          }}
        />
      </form>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`;

export default graphql(mutation)(CreateLyric);