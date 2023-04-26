import React from 'react';
import "./AccommodationList.css";

export default function AccommodationList({ img_url, location, distance, date, price }) {
    return (
        <div id="accommodation-list">
            <button class="accommodation-item">
                <img class="accommodation-img" aria-hidden="true" elementtiming="LCP-target" fetchpriority="high" loading="eager" src={img_url} style={{objectFit: 'cover'}} alt="accommodation img"/>
                <span class="accommodation-info">
                    <span class="accommodation-location">{location}</span>
                    <span class="accommodation-distance">{distance}</span>
                    <span class="accommodation-date">{date}</span>
                    <span class="accommodation-price">{price}</span>
                </span>
            </button>
        </div>
    )
}