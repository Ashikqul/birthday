import React from 'react';
import Banner from '../Banner/Banner';
import Letter from '../Latter/letter';
import Poster from './poster';
import LoveCalendar from '../LoveCalendar/LoveCalendar';
import Playlist from '../Playlist/Playlist';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Letter></Letter>
            <Poster></Poster>
            <LoveCalendar></LoveCalendar>
            <Playlist></Playlist>
        </div>
    );
};

export default Home;