import React, { useEffect,useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';



const TitleCards = ({title,category}) => {

  const [apiData,setApiData]=useState([]);

  const cardsRef=useRef();

  // OMDb API does not require headers, just the API key in the URL
  const OMDB_API_KEY = '81b70767';
  
  

  const handleWheel=(event)=>
  {
    event.preventDefault();
    cardsRef.current.scrollLeft +=event.deltaY;
  }

  useEffect(() => {
    // Use more specific/popular search terms for each category
    let searchTerm = 'Avengers';
    if (title === 'Blockbuster Movies') searchTerm = 'Avengers';
    else if (title === 'Only on Netflix') searchTerm = 'Batman';
    else if (title === 'Upcoming') searchTerm = 'Spider-Man';
    else if (title === 'Top Pics for You') searchTerm = 'Harry Potter';
    else if (category) searchTerm = category;

    fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=${OMDB_API_KEY}`)
      .then(res => res.json())
      .then(res => setApiData(res.Search || []))
      .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [title, category])

  return (
    <div className='title-cards'>
      <h2>{title?title: "Popular On NetFlix"}</h2>
       <div className="card-list" ref={cardsRef}>
        {apiData.length === 0 ? (
          <p style={{ color: 'white', padding: '2rem' }}>No movies found.</p>
        ) : (
          apiData.map((card, index) => {
            const ytSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(card.Title + ' official trailer')}`;
            return (
              <a href={ytSearchUrl} className="card" key={index} target="_blank" rel="noopener noreferrer">
                <img src={card.Poster !== 'N/A' ? card.Poster : 'https://via.placeholder.com/300x450?text=No+Image'} alt={card.Title} />
                <p>{card.Title}</p>
              </a>
            );
          })
        )}
       </div>
    </div>
  )
 
}

export default TitleCards
