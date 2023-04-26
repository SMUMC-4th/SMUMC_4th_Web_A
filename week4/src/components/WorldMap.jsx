import React from 'react';
import "./WorldMap.css";

export default function WorldMap() {
    return (
        <div id="world-map">
            <img id="world-map-img" alt="world map img" src="https://i0.wp.com/magazine.contenta.co/wp-content/uploads/2015/12/%EB%8C%80%EC%84%9C%EC%96%91%EC%A4%91%EC%8B%AC.gif" />
            <div id="map-setting">
                <button class="map-setting-button" id="map-my">
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '18px', width: '18px', fill: 'var(--iw-ihca)'}}><path d="m10.8431856 16.3486078c-.1735846.4112215-.6145289.7245188-1.05402708.6364803-.43949821-.0880384-.78907341-.5390778-.78915852-.9850881v-7l-7.05847799-.00695887c-.44831896-.00008467-.83440826-.31461578-.92290244-.75185074-.08849417-.43723497.14515025-.87590858.55850035-1.04859923l13.11043368-5.11686739c.3538762-.15082918.7644025-.07215022 1.0366284.19867383.272226.27082405.3513122.67923635.1997023 1.03129017z"></path></svg>
                </button>
                <button class="map-setting-button" id="map-plus">
                    <svg viewBox="0 0 16 16" height="16" width="16" fill="currentColor" focusable="false" aria-hidden="true" role="presentation"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1a1 1 0 0 1 2 0v14a1 1 0 1 1-2 0V1z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path></svg>
                </button>
                <button class="map-setting-button" id="map-minus">
                    <svg viewBox="0 0 16 16" height="16" width="16" fill="currentColor" focusable="false" aria-hidden="true" role="presentation"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path></svg>
                </button>
            </div>
        </div>
    )
}