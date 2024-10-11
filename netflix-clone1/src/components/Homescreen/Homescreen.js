import React from 'react';
import Row from '../Row/Row';
import requests from '../../requests';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import './Homescreen.css';
import Footer from '../Footer/Footer';

function Homescreen() {
  return (
    <div className="homeScreen">
        <Header />
        <Banner />

      <Row title="Top Searches" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      <Footer />
    </div>
  );
}

export default Homescreen;
