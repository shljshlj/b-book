import React, { Component } from 'react';

import PostList from '../../components/post-list/post-list.component';

import './feedpage.styles.scss';

class FeedPage extends Component {
  render() {
    return (
      <div className="feed-page-container">
        <PostList />
      </div>
    );
  }
}

export default FeedPage;