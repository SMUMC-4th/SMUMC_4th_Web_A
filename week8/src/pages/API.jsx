import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';

export default function API() {
    const serviceKey = process.env.REACT_APP_SERVICE_KEY
    const pageNo = '1';
    const numOfRows = '32';
    const resultType = 'json';
    
    const baseUrl = `http://apis.data.go.kr/B551177/StatusOfPassengerWorldWeatherInfo/getPassengerArrivalsWorldWeather`;
    const queryParams = `?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&type=${resultType}`;
    const url = baseUrl + queryParams;

    // console.log(url);

    const [airline, setAirline] = useState([]);
    const [flightId, setFlightId] = useState([]);
    const [wimage, setWimage] = useState([]);
    const [temperature, setTemp] = useState([]);
    
    useEffect(() => {
        axios.get(url).then((Response) => {
            const data = Response.data.response.body.items;
            let airlineTemp = [];
            let flightIdTemp = [];
            let wimageTemp = [];
            let temperatureTemp = [];
            
            for (let i = 0; i < data.length; i++) {
                airlineTemp[i] = data[i].airline;
                flightIdTemp[i] = data[i].flightId;
                wimageTemp[i] = data[i].wimage;
                temperatureTemp[i] = data[i].temp;
            }
            setAirline(airlineTemp);
            setFlightId(flightIdTemp);
            setWimage(wimageTemp);
            setTemp(temperatureTemp);
        })
    }, []);
    
    return (
        <Wrap>
            {airline.map((item, index) => (
                <AirplaneDiv>
                    <div key={index}>
                        <AirlineDiv>{item} {flightId[index]}</AirlineDiv>
                        <ImgDiv src={wimage[index]}></ImgDiv>
                        <div>Temperature: {temperature[index]}</div>
                    </div>
                </AirplaneDiv>
            ))}
        </Wrap>
    );
}

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const AirplaneDiv = styled.div`
    background-color: skyblue;
    border-radius: 20px;
    margin: 15px;
    padding: 15px;
    width: 250px;
    display: flex;
    justify-content: center;
`;

const AirlineDiv = styled.div`
    font-weight: 600;
`;

const ImgDiv = styled.img`
    width: 100px;
    height: 100px;
    padding: 10px;
`;