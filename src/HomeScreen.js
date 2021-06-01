import React from 'react'
import Banner from './Banner'
import "./HomeScreen.css"
import Nav from './Nav'
import requests from './Requests'
import Row from './Row'

function HomeScreen() {
    return (
        <div className="HomeScreen">

            <Nav />

            <Banner />
        
            <Row title="Netlix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchURL={requests.fetchTrending} />
            <Row title="Top Rated" fetchURL={requests.fetchTopRated}  />
            <Row title="Action movies" fetchURL={requests.fetchActionMovies} />
            <Row title="Comedy movies" fetchURL={requests.fetchComedyMovies} />
            <Row title="Horror movies" fetchURL={requests.fetchHorrorMovies} />
            <Row title="Romance movies" fetchURL={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchURL={requests.fetchDocumentariesMovies}  />

        </div>
    )
}

export default HomeScreen
