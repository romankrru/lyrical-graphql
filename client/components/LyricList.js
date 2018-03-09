import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricList extends Component {
  onLike(id) {
    this.props.mutate({
      variables: {
        id: id,
      }
    });
  }
  
  render() {
    return (
      <ul className="collection">
        {
          this.props.lyrics.map(({content, id, likes}) => {
            return (
              <li key={id} className="collection-item">
                {content} ({likes})
                <span className="secondary-content">
                  <i
                    className="material-icons"
                    onClick={() => this.onLike(id)}
                  >
                    thumb_up
                  </i>
                </span>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
      content
    }
  }
`;

export default graphql(mutation)(LyricList);