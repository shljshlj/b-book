import React from 'react';
import CommentEditMenu from '../comment-edit/comment-edit.component';

const CommentItem = ({ userId, body, createdAt }) => (
  <article className="comment">
    <div className="comment__avatar-box">
      <img src="https://s3.amazonaws.com/uifaces/faces/twitter/olaolusoga/128.jpg" />
    </div>
    <div className="comment__body">
      <div className="comment__main">
        <div className="comment-box">
          <div className="comment__author">
            <a>Marko Markovic</a>
          </div>
          <div className="comment__content">{body}</div>
        </div>
        <CommentEditMenu />
      </div>

      <time className="comment__stats" itemProp="datePublished" dateTime="2009-10-09">{createdAt}</time>
    </div>
  </article>
);

export default CommentItem;