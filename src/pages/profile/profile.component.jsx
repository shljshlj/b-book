import React from 'react';

import ProfileImage from '../../components/profile-image/profile-image.component';

import './profile.styles.scss';

const ProfilePage = () => (
  <div className="profile-page">
    <header className="profile-header">
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
            <button className="headline-content__button button">
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
    </header>
    <nav className="profile-navigation">
      <ul className="profile-navigation__list">
        <li className="profile-navigation__item">Timeline</li>
        <li className="profile-navigation__item">About</li>
      </ul>
    </nav>
    <main></main>

  </div>
);

export default ProfilePage;