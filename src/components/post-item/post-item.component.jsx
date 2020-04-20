import React, { Component } from 'react';

import PostContent from '../post-content/post-content.component';

import CommentList from '../comment-list/comment-list.component';

import './post-item.styles.scss';

class PostItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: this.props.post,
    }
  }

  render() {
    const { post } = this.state;
    
    return (
      <article className="post-container">
        <header className="post-header">
          <div className="post-header__avatar-box">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/olaolusoga/128.jpg" />
          </div>
          <div className="post-stats">
            <div className="post-author">
              <h2><a><span>Helene Kerleuke</span></a></h2>
            </div>
            <div className="post-date">
              <a>
                <span>April 6th, 12:25pm</span>
              </a>
              {/* <p><time itemProp="datePublished" dateTime="2009-10-09">3 days ago</time></p> */}
            </div>
          </div>
        </header>

        <PostContent type={post.type} content={post.text || post.videoUrl || post.imageUrl} />

        <CommentList comments={post.comments} />
      </article>
    );
  }
}

export default PostItem;