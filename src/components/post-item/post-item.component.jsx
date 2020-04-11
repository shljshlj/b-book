import React from 'react';

import './post-item.styles.scss';

const PostItem = () => (
  <article className="post-container">
    <header className="post-header">
      <div className="post-header__avatar-box">
        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/olaolusoga/128.jpg" />
      </div>
      <div className="post-stats">
        <div className="post-author">
          <h2>
            <a>
              <span>Helene Kerleuke</span>
            </a>
          </h2>
        </div>
        <div className="post-date">
          <a>
            <span>April 6th, 12:25pm</span>
          </a>
          {/* <p><time itemprop="datePublished" datetime="2009-10-09">3 days ago</time></p> */}
        </div>
      </div>
    </header>

    <section className="post-content">
      <p>
        Exercitationem dignissimos iure accusamus error autem necessitatibus sunt est autem. Id doloribus quis ipsam est nam libero ipsa repellendus qui. Dicta reiciendis esse accusantium placeat sed eos et omnis. Maxime rerum non deserunt quasi libero libero. Numquam et ut. Aut non sequi sed illo quis illum earum labore.
      </p>
    </section>

    <section className="post-comments">
      <div className="post-comments-stats">
        <span><a>5 comments</a></span>
      </div>

      <div className="separator"></div>

      <div>
        <div className="comment__list">
          <article className="comment">
            <div className="comment__avatar-box">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/olaolusoga/128.jpg" />
            </div>
            <div className="comment__body">
              <div className="comment__main">
                <div className="comment-box">
                  <div className="comment__author">
                    <a>Nenad Petrovic</a>
                  </div>
                  <div className="comment__content">
                    Bilo koji Zandarm sa neprevazidjenim Luj de Finesom
                  </div>
                </div>
                <div className="comment-edit">
                  <span>&#8230;</span>
                  <ul className="comment-edit__list">
                    <li>Edit post</li>
                    <li>Delete post</li>
                  </ul>
                </div>
              </div>

              <time className="comment__stats" itemprop="datePublished" datetime="2009-10-09">3 days ago</time>
            </div>
          </article>

          <article className="comment">
            <div className="comment__avatar-box">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/olaolusoga/128.jpg" />
            </div>
            <div className="comment__body">
              <div className="comment__main">
                <div className="comment-box">
                  <div className="comment__author">
                    <a>Nenad Petrovic</a>
                  </div>
                  <div className="comment__content">
                    Bilo koji Zandarm
                  </div>
                </div>
                <div className="comment-edit">
                  <span>&#8230;</span>
                  <ul className="comment-edit__list">
                    <li>Edit post</li>
                    <li>Delete post</li>
                  </ul>
                </div>
              </div>

              <time className="comment__stats" itemprop="datePublished" datetime="2009-10-09">3 days ago</time>
            </div>
          </article>

          <article className="comment">
            <div className="comment__avatar-box">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/olaolusoga/128.jpg" />
            </div>
            <div className="comment__body">
              <div className="comment__main">
                <div className="comment-box">
                  <div className="comment__author">
                    <a>Nenad Petrovic</a>
                  </div>
                  <div className="comment__content">
                    Bilo koji Zandarm sa neprevazidjenim Luj de Finesom svakako govnar najveci ne znam sta bih vam vise rekla to je baraba neprevazidjena ova gore gluperda bez trunka mozga i saosecanja
                  </div>
                </div>
                <div className="comment-edit">
                  <span>&#8230;</span>
                  <ul className="comment-edit__list">
                    <li>Edit post</li>
                    <li>Delete post</li>
                  </ul>
                </div>
              </div>

              <time className="comment__stats" itemprop="datePublished" datetime="2009-10-09">3 days ago</time>
            </div>
          </article>
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
  </article>
);

export default PostItem;