import React from 'react';
import { useState } from 'react';
import "./CategoryBar.css";

export default function CategoryBar() {
    const [currentIdx, setCurrentIdx] = useState(0);
    const categoryList = document.querySelector(".category-list");
    const categoryButton = document.querySelectorAll(".category-button");
    const categoryCount = categoryButton.length;

    const handleRightButtonClick = () => {
        if (currentIdx < categoryCount - 15) {
            moveCategory(currentIdx + 10);
        }
    };
    
    const handleLeftButtonClick = () => {
        if (currentIdx > 0) {
            moveCategory(currentIdx - 10);
        }
    };

    const moveCategory = (num) => {
        categoryList.style.left = -num * 102 + 'px';
        setCurrentIdx(num);
    }

    return (
        <div id="navigation-bar">
            <button class="arrow" id="arrow-left" onClick={handleLeftButtonClick}>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: 5.33333, overflow: 'visible'}}><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
            </button>
            <div class="category-wrap">
                <div class="category-list">
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="" width="24" height="24"/>
                        <div>국립공원</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="" width="24" height="24"/>
                        <div>멋진 수영장</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg" alt="" width="24" height="24"/>
                        <div>디자인</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg" alt="" width="24" height="24"/>
                        <div>스키를 탄 채로 출입 가능</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg" alt="" width="24" height="24"/>
                        <div>Luxe</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg" alt="" width="24" height="24"/>
                        <div>개인실</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" alt="" width="24" height="24"/>
                        <div>최고의 전망</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" alt="" width="24" height="24"/>
                        <div>기상천외한 숙소</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg" alt="" width="24" height="24"/>
                        <div>한옥</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" alt="" width="24" height="24"/>
                        <div>해변 바로 앞</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" alt="" width="24" height="24"/>
                        <div>인기 급상승</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg" alt="" width="24" height="24"/>
                        <div>한적한 시골</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" alt="" width="24" height="24"/>
                        <div>캐슬</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg" alt="" width="24" height="24"/>
                        <div>료칸</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" alt="" width="24" height="24"/>
                        <div>동굴</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" alt="" width="24" height="24"/>
                        <div>캠핑장</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg" alt="" width="24" height="24"/>
                        <div>사막</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" alt="" width="24" height="24"/>
                        <div>섬</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg" alt="" width="24" height="24"/>
                        <div>북극</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg" alt="" width="24" height="24"/>
                        <div>상징적 도시</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg" alt="" width="24" height="24"/>
                        <div>열대 지역</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg" alt="" width="24" height="24"/>
                        <div>해변 근처</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg" alt="" width="24" height="24"/>
                        <div>와인 농장</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" alt="" width="24" height="24"/>
                        <div>초소형 주택</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg" alt="" width="24" height="24"/>
                        <div>창작 공간</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" alt="" width="24" height="24"/>
                        <div>농장</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg" alt="" width="24" height="24"/>
                        <div>캠핑카</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg" alt="" width="24" height="24"/>
                        <div>보트</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg" alt="" width="24" height="24"/>
                        <div>세상의 꼭대기</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg" alt="" width="24" height="24"/>
                        <div>그랜드 피아노</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg" alt="" width="24" height="24"/>
                        <div>골프장</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg" alt="" width="24" height="24"/>
                        <div>풍차</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg" alt="" width="24" height="24"/>
                        <div>전문가급 주방</div>
                    </button>
                    <button class="category-button">
                        <img class="category-button-img" src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg" alt="" width="24" height="24"/>
                        <div>서핑</div>
                    </button>
                </div>
            </div>
            <button class="arrow" id="arrow-right" onClick={handleRightButtonClick}>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: 5.33333, overflow: 'visible'}}><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg>
            </button>
            <div id="filter-container">
                <button id="filter">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', height: '14px', width: '14px', fill: 'currentColor'}} aria-hidden="true" role="presentation" focusable="false"><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
                    <span>필터</span>
                </button>
            </div>
        </div>
    )
}