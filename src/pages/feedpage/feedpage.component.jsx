import React, { Component } from 'react';

import PostItem from '../../components/post-item/post-item.component';

import './feedpage.styles.scss';

class FeedPage extends Component {
  constructor(props) {
    super(props);

    this.state = [];
  }

  render() {
    return (
      <div className="feed-container">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    );
  }
}

export default FeedPage;