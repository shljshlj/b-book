import React, { Component } from 'react';

import PostList from '../../components/post-list/post-list.component';

import './feedpage.styles.scss';

class FeedPage extends Component {
  render() {
    return (
      <div className="feed-page-container">
        <div className="post-list-container">
          <PostList />
        </div>
      </div>
    );
  }
}

export default FeedPage;