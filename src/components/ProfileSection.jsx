import React from 'react';

const ProfileSection = ({ name, bio, imageUrl }) => {
  return (
    <div className="profile-section">
      <img src={imageUrl} alt={name} className="profile-img" />
      <h1 className="profile-name">{name}</h1>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};

export default ProfileSection;
