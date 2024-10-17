import React, { useState, useEffect,useRef,useContext } from 'react';
import axios from '../../axios';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { IconContext } from '../../AppContext';
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const {FontAwesomeIcon} = useContext(IconContext);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results)
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const rowRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Scroll left function
  const scrollLeft = () => {
    rowRef.current.scrollLeft -= 200; // Adjust the scroll distance
  };

  // Scroll right function
  const scrollRight = () => {
    rowRef.current.scrollLeft += 200; // Adjust the scroll distance
  };
// Detect scrolling and show/hide arrows based on scroll position
const handleScroll = () => {
  const row = rowRef.current;
  setShowLeftArrow(row.scrollLeft > 0); // Show left arrow if not at the start
  setShowRightArrow(row.scrollLeft < row.scrollWidth - row.clientWidth); // Show right arrow if not at the end
};

useEffect(() => {
  const row = rowRef.current;
  row.addEventListener('scroll', handleScroll);
  return () => row.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <div className="row">
      <h2 style={{fontSize:18,marginLeft:20}}>{title}</h2>
      
        {/* Left arrow */}
        {showLeftArrow && (
        <button className="scroll-arrow left" onClick={scrollLeft}>
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>
        )}
       {/* Right arrow */}
       {showRightArrow && (
       <button className="scroll-arrow right" onClick={scrollRight}>
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </button>
         )}
      <div className="row__posters" ref={rowRef}>

        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${base_url}${movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}

      </div>
       
    </div>
  );
}

export default Row;
