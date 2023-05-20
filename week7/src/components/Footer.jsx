import React from 'react';
import { useState } from 'react';
import "./Footer.css";
import styled from "styled-components";

export default function Footer() {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const handleMenuButtonClick = () => {
        setIsMenuActive(!isMenuActive);
    };

    const handleCloseButtonClick = () => {
        setIsMenuActive(!isMenuActive);
    };

    return (
        <div>
            <div id="footer">
                <span id="footer-left">
                    <div class="footer-item">© 2023 Airbnb, Inc. ・</div>
                    <div class="footer-item">개인정보 이용방침 ・</div>
                    <div class="footer-item">이용약관 ・</div>
                    <div class="footer-item">사이트맵 ・</div>
                    <div class="footer-item">한국의 변경된 환불 정책 ・</div>
                    <div class="footer-item">회사 세부정보</div>
                </span>
                <span id="footer-right">
                    <div>
                        <svg id="footer-language" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '16px', width: '16px', fill: 'currentcolor'}}><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>
                    </div>
                    <div class="footer-item-right">한국어 (KR)</div>
                    <div class="footer-item-right">₩   KRW</div>
                    <button class="footer-menu-button" onClick={handleMenuButtonClick}>
                        <div class="footer-item-right">지원 및 참고자료</div>
                    </button>
                </span>
            </div>
            <FooterDiv>
                <FooterButton>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', fill: 'none', height: '24px', width: '24px', stroke: 'currentcolor', strokeWidth: 4, overflow: 'visible'}}><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
                    <FooterSpan>둘러보기</FooterSpan>
                </FooterButton>
                <FooterButton>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', fill: 'none', height: '24px', width: '24px', stroke: 'currentcolor', strokeWidth: 2.6666, overflow: 'visible'}}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
                    <FooterSpan>위시리스트</FooterSpan>
                </FooterButton>
                <FooterButton>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', fill: 'currentColor', height: '24px'}}><path d="m16 1c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 8c-2.7614237 0-5 2.2385763-5 5 0 2.0143973 1.2022141 3.7998876 2.9996346 4.5835001l.0003231 2.0984999-.1499943.0278452c-2.8326474.5613112-5.31897338 2.2230336-6.93575953 4.5872979 2.34343054 2.291067 5.54974273 3.7028569 9.08579613 3.7028569 3.5355506 0 6.7414538-1.4113884 9.0850203-3.701476-1.6141801-2.3628535-4.0978119-4.0247647-6.929184-4.5867938l-.1558786-.0287302.001228-2.0991413c1.7288399-.7547474 2.9066959-2.4357565 2.9936498-4.355479l.0051645-.2283797c0-2.7614237-2.2385763-5-5-5zm0-6c-7.17970175 0-13 5.82029825-13 13 0 2.9045768.95257276 5.5866683 2.56235849 7.7509147 1.42074739-1.9134907 3.33951478-3.4002416 5.53860831-4.2955956l.3480332-.1363191-.0229565-.0189706c-1.43704227-1.2411241-2.34462949-3.045583-2.42083359-5.0285539l-.00520991-.2714755c0-3.8659932 3.1340068-7 7-7s7 3.1340068 7 7c0 1.9941317-.8415062 3.8279876-2.224566 5.1193683l-.225434.2006317.0447787.0163138c2.3268368.8792152 4.3570558 2.4138611 5.8430586 4.4127726 1.6098837-2.1632453 2.5621627-4.8449575 2.5621627-7.7490864 0-7.17970175-5.8202983-13-13-13z"></path></svg>
                    <FooterSpan>로그인</FooterSpan>
                </FooterButton>
            </FooterDiv>
            <div className={`footer-menu ${isMenuActive ? 'active' : ''}`}>
                <button class="footer-close-button" onClick={handleCloseButtonClick}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 3, overflow: 'visible'}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                </button>
                <div class="footer-menu-div">
                    <section class="footer-menu-section">
                        <div class="footer-menu-category">
                            <h3 calss="footer-menu-category-title">에어비앤비 지원</h3>
                        </div>
                        <ul>
                            <li class="footer-menu-content">도움말 센터</li>
                            <li class="footer-menu-content">에어커버</li>
                            <li class="footer-menu-content">장애인 지원</li>
                            <li class="footer-menu-content">예약 취소 옵션</li>
                            <li class="footer-menu-content">에어비앤비의 코로나19 대응 방안</li>
                            <li class="footer-menu-content">이웃 민원 신고</li>
                        </ul>
                    </section>
                    <section class="footer-menu-section">
                        <div class="footer-menu-category">
                            <h3 calss="footer-menu-category-title">커뮤티니</h3>
                        </div>
                        <ul>
                            <li class="footer-menu-content">Airbnb.org: 재난 구호 숙소</li>
                            <li class="footer-menu-content">차별 철폐를 위한 노력</li>
                        </ul>
                    </section>
                    <section class="footer-menu-section">
                        <div class="footer-menu-category">
                            <h3 calss="footer-menu-category-title">호스팅</h3>
                        </div>
                        <ul>
                            <li class="footer-menu-content">당신의 공간을 에어비앤비하세요</li>
                            <li class="footer-menu-content">호스트를 위한 에어커버</li>
                            <li class="footer-menu-content">호스팅 자료 둘러보기</li>
                            <li class="footer-menu-content">커뮤니티 포럼 방문하기</li>
                            <li class="footer-menu-content">책임감 있는 호스팅</li>
                        </ul>
                    </section>
                    <section class="footer-menu-section">
                        <div class="footer-menu-category">
                            <h3 calss="footer-menu-category-title">에어비앤비</h3>
                        </div>
                        <ul>
                            <li class="footer-menu-content">뉴스룸</li>
                            <li class="footer-menu-content">새로운 기능에 대해 알아보기</li>
                            <li class="footer-menu-content">에어비앤비 공동창업자의 메시지</li>
                            <li class="footer-menu-content">채용정보</li>
                            <li class="footer-menu-content">투자자 정보</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}

const FooterDiv = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        bottom: 0;
        background-color: #fff;
        border-top: 1px solid #dddddd;
        height: 40px;
        padding-top: 14px;
        padding-bottom: 11px;
    }
`;

const FooterButton = styled.button`
    width: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border: none;
    color: #b0b0b0;
`;

const FooterSpan = styled.span`
    margin-top: 6px;
    font-size: 10px;
    color: #717171;
`;