import React, { Component } from 'react';

class CommentEditMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    }
  }

  handleButtonClick = () => {
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  }

  render() {
    const { isActive } = this.state;
    return (
      <div className="comment-edit">
        <button onClick={this.handleButtonClick}>
          <span>&#8230;</span>
        </button>
        <div className={`comment-edit__container ${isActive ? 'comment-edit__container--active' : ''}`}>
          <div className="comment-edit__arrow"></div>
          <ul className="comment-edit__list">
            <li><a>Edit post</a></li>
            <li><a>Delete post</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CommentEditMenu;