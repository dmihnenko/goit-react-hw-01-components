import PropTypes from 'prop-types';
import { ProfileContainer } from './Profile.styled';
import { ProfileDescription } from './Profile.styled';
import { ProfileImage } from './Profile.styled';
import { ProfileUsername } from './Profile.styled';
import { ProfileTagLocation } from './Profile.styled';
import { ProfileList } from './Profile.styled';
import { ProfileListSocial } from './Profile.styled';
import { ProfileListFollowers } from './Profile.styled';

export const Profile = props => {
  const { username, tag, location, avatar, followers, views, likes } = props;
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
          <span className="quantity">{followers}</span>
        </ProfileListSocial>
        <ProfileListSocial>
          <ProfileListFollowers>Views</ProfileListFollowers>
          <span className="quantity">{views}</span>
        </ProfileListSocial>
        <ProfileListSocial>
          <ProfileListFollowers>Likes </ProfileListFollowers>
          <span className="quantity">{likes}</span>
        </ProfileListSocial>
      </ProfileList>
    </ProfileContainer>
  );
};
Profile.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string,
  username: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};