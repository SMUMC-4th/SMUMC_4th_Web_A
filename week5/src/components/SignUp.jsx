import React, { useEffect, useState } from 'react';
import "./SignUp.css";

export default function SignUp() {
    const [isActive, setIsActive] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberValid, setphoneNumberValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const handleCloseButtonClick = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        if(phoneNumberValid) {
          setNotAllow(false);
          return;
        }
        setNotAllow(true);
      }, [phoneNumberValid]);
  
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
        const isNotNumber = isNaN(Number(phoneNumber));

        if(!isNotNumber) {
          setphoneNumberValid(true);
        } else {
            setphoneNumberValid(false);
        }
    };

    return (
        <div className={`sign-up-box ${isActive ? 'active' : ''}`}>
            <div className="sign-up-container">
                <div class="sign-up-header">
                    <button id="close-button" onClick={handleCloseButtonClick}>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 3, overflow: 'visible'}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                    </button>
                    <span id="sign-up-title">회원 가입</span>
                </div>
                <div class="sign-up-content">
                    <div id="sign-up-welcome">에어비앤비에 오신 것을 환영합니다.</div>
                    <div class="info-input-box">
                        <select id="country-select">
                            <option value='+82' selected>한국 (+82)</option>
                        </select>
                        <input id="phone-number-input" placeholder="전화번호" onChange={handlePhoneNumber}></input>
                        <div className="error-message-wrap">
                            {!phoneNumberValid && phoneNumber.length > 0 && (
                                <div>숫자만 입력해 주세요.</div>
                            )}
                        </div>
                    </div>
                    <span>
                        <span id="sign-up-info">전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다. </span>
                        <span id="privacy-info">개인정보 처리방침</span>
                    </span>
                    <button id="continue-button" disabled={notAllow}>계속</button>
                </div>
            </div>
        </div>
    )
}