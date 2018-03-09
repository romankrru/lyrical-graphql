import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricList extends Component {
  onLike(id, likes) {
    this.props.mutate({
      variables: {
        id: id,
      },
      optimisticResponse: {
        __typeName: 'Mutation',
        likeLyric: {
          id: id,
          __typeName: 'LyricType',
          likes: likes + 1,
        }
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
                {content} (likes: {likes})
                <span className="secondary-content">
                  <i
                    className="material-icons"
                    onClick={() => this.onLike(id, likes)}
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