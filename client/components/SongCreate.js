import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';

class SongCreate extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.title);
    this.props.mutate({
      variables: {
        title: this.state.title,
      }
    }).then(() => {
      console.log('Song Created');

      hashHistory.push('/');
    });
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a new song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song title:</label>
          <input
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </form>
      </div>
    );
  }
};

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
