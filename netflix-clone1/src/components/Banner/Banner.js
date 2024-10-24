import React, { useState, useEffect, useContext } from 'react';
import axios from '../../axios';
import requests from '../../requests';
import './Banner.css';
import { IconContext } from '../../AppContext';
import { faInfoCircle,faPlay } from '@fortawesome/free-solid-svg-icons';


function Banner() {
  const [movie, setMovie] = useState([]);
  const {FontAwesomeIcon} = useContext(IconContext);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="banner__description">
          {truncate(movie?.overview, 150)}
        </p>
        <br/>
        <div className="banner__buttons">
          <button className="banner__button" style={{ backgroundColor:'white',color:'black' }}>  <FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px' ,color:'black'}}/> Play</button>
          <button className="banner__button" >  <FontAwesomeIcon icon={faInfoCircle} /> More Info</button>
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
