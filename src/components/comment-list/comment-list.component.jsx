import React from 'react';

import CommentItem from '../comment-item/comment-item.component';

const CommentList = ({ comments }) => {

  const numOfComments = !comments.length ? '' :
    comments.length > 1 ? `${comments.length} comments` : `${comments.length} comment`;

  return (
    <section className="post-comments">
      <div className="post-comments-stats">
        <span><a>{numOfComments}</a></span>
      </div>

      <div className="separator"></div>

      <div>

        <div className="comment__list">
          {comments.map(({ sid, userId, body, createdAt }) => <CommentItem key={sid} userId={userId} body={body} createdAt={createdAt}  />)}
        </div>

        <div className="user-comment">
          <div className="user-comment__avatar-box">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/olaolusoga/128.jpg" />
          </div>
          <form className="user-comment__input">
            <input type="text" placeholder="Write a comment" />
          </form>
        </div>

      </div>
    </section>
  );
};

export default CommentList;