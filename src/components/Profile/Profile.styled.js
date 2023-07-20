import styled from 'styled-components';

export const ProfileContainer = styled.div`
  max-width: 400px;
  background-color: white;
  border-radius: 6px;
  border: 1px solid grey;
  margin-bottom: 29px;
`;

export const ProfileDescription = styled.div`
  padding: 15px;
`;

export const ProfileImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  border-radius: 70px;
  align-items: center;
  width: 120px;
  background-color: #f5f4fa;
`;
export const ProfileUsername = styled.p`
  font-size: 20px;
  line-height: 37px;
  display: flex;
  justify-content: center;
`;

export const ProfileTagLocation = styled.p`
  font-size: 13px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  color: grey;
`;

export const ProfileList = styled.ul`
  display: flex;
  background-color: #f5f4fa;
  border-radius: 10px;
`;
export const ProfileListSocial = styled.li`
  border-top: 1px solid grey;
  border-right: 1px solid grey;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  font-size: 13px;
  &:last-child {
    border-right: none;
  }
`;
export const ProfileListFollowers = styled.span`
  color: grey;
`;
