import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileDescription,
  ProfileImage,
  ProfileUsername,
  ProfileTagLocation,
  ProfileList,
  ProfileListSocial,
  ProfileListFollowers,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <ProfileDescription>
        <ProfileImage src={avatar} alt="User avatar" className="avatar" />
        <ProfileUsername className="name">{username}</ProfileUsername>
        <ProfileTagLocation className="tag">@{tag}</ProfileTagLocation>
        <ProfileTagLocation className="location">{location}</ProfileTagLocation>
      </ProfileDescription>

      <ProfileList>
        <ProfileListSocial>
          <ProfileListFollowers>Followers</ProfileListFollowers>
          <span className="quantity">{stats.followers}</span>
        </ProfileListSocial>
        <ProfileListSocial>
          <ProfileListFollowers>Views</ProfileListFollowers>
          <span className="quantity">{stats.views}</span>
        </ProfileListSocial>
        <ProfileListSocial>
          <ProfileListFollowers>Likes </ProfileListFollowers>
          <span className="quantity">{stats.likes}</span>
        </ProfileListSocial>
      </ProfileList>
    </ProfileContainer>
  );
};
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
