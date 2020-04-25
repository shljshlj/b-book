import React from 'react';

import ProfileImage from '../../components/profile-image/profile-image.component';
import PostList from '../../components/post-list/post-list.component';

import './profile.styles.scss';

const ProfilePage = () => (
  <div className="profile-page">
    <header className="profile-header">
      <div className="profile-header__container-top">
        <div className="profile-header__container">
          <div className="profile-header__background-pic">
            <img src="https://scontent.fbeg2-1.fna.fbcdn.net/v/t31.0-0/p640x640/14372430_1068026053312126_2296578501729708256_o.jpg?_nc_cat=101&_nc_sid=e3f864&_nc_ohc=m49IgKWxEPAAX-bjU7w&_nc_ht=scontent.fbeg2-1.fna&_nc_tp=6&oh=f94608c88d94c2981a4cd4de233c803b&oe=5EC2D37B" />
          </div>
          <div className="profile-header__image-container">
            <ProfileImage imgUrl={"https://scontent.fbeg2-1.fna.fbcdn.net/v/t1.0-1/p160x160/40418465_1839974952783895_4437898116779212800_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=9VxUFtYRzR8AX-Uxt_e&_nc_ht=scontent.fbeg2-1.fna&_nc_tp=6&oh=7f2abd8683fd096a124c9f429dc1b5c3&oe=5EC3699A"} />
          </div>
          <div className="profile-header__title">
            <h1>Višnja Mrdalj</h1>
            <div className="profile-header__headline">
              <span className="headline-content">lalalala</span>
              <button className="headline-content__button button--text">
                <span>Edit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className="divider"></div>

    <div className="profile-header__container-bottom">
      <div className="profile-navigation-container">
        <nav className="profile-navigation__nav">
          <div className="profile-navigation__list">
            <a className="profile-navigation__link">
              <div className="profile-navigation__item">
                <span className="profile-navigation__item-text">Timeline</span>
                <div class="profile-navigation__item-underline"></div>
              </div>
              <div className="profile-navigation__link-overlay"></div>
            </a>
            <a className="profile-navigation__link">
              <div className="profile-navigation__item">
                <span className="profile-navigation__item-text">About</span>
                <div class="profile-navigation__item-underline"></div>
              </div>
              <div className="profile-navigation__link-overlay"></div>
            </a>
          </div>
        </nav>
        <div className="profile-navigation__tools">
          <button className="button--grey">Edit Profile</button>
        </div>
      </div>
    </div>

    <div className="profile-page__content-wrapper">
      <div className="profile-page__content-wrapper__layout">
        <aside className="profile-page__aside">
          <section className="profile-page__aside-box intro-container">
            <h1>Intro</h1>
          </section>
          <section className="profile-page__aside-box photos-container">
            <h1>Photos</h1>
          </section>
        </aside>
        <main className="profile-page__main">
          <div className="profile-page__main-content">
            <section className="create-post"></section>
            <section className="profile-page__post-list__container">
              <PostList />
            </section>
          </div>
        </main>
      </div>
    </div>

  </div>
);

export default ProfilePage;