import React from 'react';
import { useState } from 'react';
import "./Footer.css";

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
            <div className={`footer-menu ${isMenuActive ? 'active' : ''}`}>
                <buttion class="footer-close-button" onClick={handleCloseButtonClick}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 3, overflow: 'visible'}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                </buttion>
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