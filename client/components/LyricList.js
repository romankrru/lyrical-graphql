import React, { Component } from 'react';

class LyricList extends Component {
  render() {
    return (
      <ul className="collection">
        {
          this.props.lyrics.map(({content, id}) => {
            return (
              <li key={id} className="collection-item">
                {content}
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default LyricList;