import React, { useEffect, useState } from 'react';
import "./Login.css";
import userImg from "../assets/user1.jpeg";
import { useSelector } from "react-redux";

function Login() {
    const [isActive, setIsActive] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhoneNumber, setUserPhoneNumber] = useState('');
    const state = useSelector((state) => state);

    const handleCloseButtonClick = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        if(Object.keys(state.user).length === 0) {
            return;
        }
        setUserName(state.user.info.name);
        setUserEmail(state.user.info.email);
        setUserPhoneNumber(state.user.info.phoneNumber);
    }, []);

    return (
        <div className={`login-box ${isActive ? 'active' : ''}`}>
            <div class="login-container">
                <div class="login-header">
                    <button id="close-button" onClick={handleCloseButtonClick}>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 3, overflow: 'visible'}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                    </button>
                    <span id="login-title">{userName}님, 다시 만나 반갑습니다.</span>
                </div>
                <div class="login-content">
                    <img id="profile-img" alt="user-profile" src={userImg}/>
                    <div class="email">
                        <svg viewBox="0 0 24 24" role="img" aria-hidden="false" aria-label="이메일" focusable="false" style={{height: '16px', width: '16px', display: 'block', fill: 'currentcolor'}}><path d="m22.5 4h-21c-.83 0-1.5.67-1.5 1.51v12.99c0 .83.67 1.5 1.5 1.5h20.99a1.5 1.5 0 0 0 1.51-1.51v-12.98c0-.84-.67-1.51-1.5-1.51zm.5 14.2-6.14-7.91 6.14-4.66v12.58zm-.83-13.2-9.69 7.36c-.26.2-.72.2-.98 0l-9.67-7.36h20.35zm-21.17.63 6.14 4.67-6.14 7.88zm.63 13.37 6.3-8.1 2.97 2.26c.62.47 1.57.47 2.19 0l2.97-2.26 6.29 8.1z" fill-rule="evenodd"></path></svg>
                        <span id="user-email">{userEmail}</span>
                    </div>
                    <div class="phone-number">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-label="전화번호" role="img" focusable="false" style={{display: 'block', height: '16px', width: '16px', fill: 'currentcolor'}}><path d="m22 1c2.6887547 0 4.8818181 2.12230671 4.9953805 4.78311038l.0046195.21688962v20c0 2.6887547-2.1223067 4.8818181-4.7831104 4.9953805l-.2168896.0046195h-12c-2.6887547 0-4.88181811-2.1223067-4.99538049-4.7831104l-.00461951-.2168896v-20c0-2.6887547 2.12230671-4.88181811 4.78311038-4.99538049l.21688962-.00461951zm0 2h-12c-1.59768088 0-2.90366088 1.24891996-2.99490731 2.82372721l-.00509269.17627279v20c0 1.5976809 1.24891996 2.9036609 2.82372721 2.9949073l.17627279.0050927h12c1.5976809 0 2.9036609-1.24892 2.9949073-2.8237272l.0050927-.1762728v-20c0-1.59768088-1.24892-2.90366088-2.8237272-2.99490731zm-6 22c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm4-4c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm8-4c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm8-4c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1z"></path></svg>
                        <span id="user-number">{userPhoneNumber}</span>
                    </div>
                    <button id="continue-button">계속</button>
                </div>
                <div class="login-footer">
                    <div id="login-info">전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다.</div>
                    <span>
                        <span id="id-check">본인이 아니신가요? </span>
                        <span id="different-id">다른 계정 사용하기</span>
                    </span>
                </div>
            </div>
           
        </div>
    )
}

export default Login;