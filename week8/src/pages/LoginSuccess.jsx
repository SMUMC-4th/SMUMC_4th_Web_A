import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function LoginSuccess() {
    const location = useLocation();
    const [name, setName] = useState('');
    const [profile_image, setProfileImage] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const user = location.state?.user;

    useEffect(() => {
       setName(user.properties.nickname);
       setProfileImage(user.properties.profile_image);
       setBirthday(user.kakao_account.birthday);
       setEmail(user.kakao_account.email);
    }, []);

    return (
        <Page>
            <UserInfoDiv>
                <InfoWrap>
                    <Title>🔖 name 🔖</Title>
                    <Info>{name}</Info>
                </InfoWrap>
                <InfoWrap>
                    <ProfileImg src={profile_image}/>
                </InfoWrap>
                <InfoWrap>
                    <Title>💌 email 💌</Title>
                    <Info>{email}</Info>
                </InfoWrap>
                <InfoWrap>
                    <Title>🎂 birthday 🎂</Title>
                    <Info>{birthday}</Info>
                </InfoWrap>
            </UserInfoDiv>
        </Page>
    );
}
const Page = styled.div`
    background-color: #262626;
    border-radius: 30px;
    display: flex; 
    justify-content: center;
    padding: 50px 0;
    margin-top: 10px;
`;

const UserInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
`;

const InfoWrap = styled.div`
    margin: 10px 0;
`;

const Title = styled.span`
    color: #e0dde4;
`;

const Info = styled.span`
    font-weight: 300;
    font-style: italic;
    padding-left: 10px;
    color: #e6ddf8;
    text-shadow: #e6ddf8 1px 0 2px;
`;

const ProfileImg = styled.img`
    width: 400px;
    height: 300px;
    border-radius: 36px;
`;