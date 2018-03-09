import React, { Component } from 'react';

class LyricList extends Component {
  onLike(id) {
    console.log(id);
  }
  
  render() {
    return (
      <ul className="collection">
        {
          this.props.lyrics.map(({content, id}) => {
            return (
              <li key={id} className="collection-item">
                {content}
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

export default LyricList;