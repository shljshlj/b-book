import React from 'react';

import './profile-image.styles.scss';

const ProfileImage = ({ imgUrl }) => (
  <a class="img-link">
    <div className="profile-header__image profile-header__image-outside">
      <div className="profile-header__image-inside">
        <img src={imgUrl} />
      </div>
    </div>
  </a>
);

export default ProfileImage;