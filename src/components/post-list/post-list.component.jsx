import React, { Component } from 'react';

import { posts } from '../../data/posts';
import { comments } from '../../data/comments';

import PostItem from '../post-item/post-item.component';

import './post-list.styles.scss';


const fetchComments = (postId, commentsList) => {
  return commentsList.filter(comment => comment.postId === postId);
};

const postsWithComments = (postsList, commentsList) => {
  return postsList.map(post => {
    post.comments = fetchComments(post.id, commentsList);
    return post;
  });
}


class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  fetchPostsAndComments = () => {
    this.setState({ posts: postsWithComments(posts, comments) });
  }

  componentDidMount() {
    this.fetchPostsAndComments();
  }

  render() {
    const { posts } = this.state;

    if (!posts.length) {
      return <div className="post-list__content">Nothing in feed</div>;
    }

    return (
      <div className="post-list__content">
        {posts.map(post => <PostItem key={post.sid} post={post} />)}
      </div>
    );
  }
}

export default PostList;