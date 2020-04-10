import React from 'react';

import PostItem from '../../components/post-item/post-item.component';

import './feedpage.styles.scss';

const FeedPage = () => (
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

export default FeedPage;