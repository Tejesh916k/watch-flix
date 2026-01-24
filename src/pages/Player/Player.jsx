import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id}=useParams();

  const navigate=useNavigate();

  const [apiData, setApiData] = useState({
    Title: '',
    Year: '',
    Poster: '',
    Plot: '',
    imdbID: '',
  });
  const [trailerUrl, setTrailerUrl] = useState('');

  // OMDb API does not require headers, just the API key in the URL
  const OMDB_API_KEY = '81b70767';

  useEffect(() => {
    // OMDb: fetch movie details by IMDb ID
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${OMDB_API_KEY}`)
      .then(res => res.json())
      .then(res => {
        setApiData(res);
        // Try to find a trailer on YouTube by movie title
        if (res.Title) {
          const ytQuery = encodeURIComponent(res.Title + ' official trailer');
          setTrailerUrl(`https://www.youtube.com/embed?listType=search&list=${ytQuery}`);
        }
      })
      .catch(err => console.error(err));
  }, [id]);
  
  

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={() => { navigate(-2) }} />
      <h2>{apiData.Title} ({apiData.Year})</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {trailerUrl && (
          <iframe
            width="800"
            height="450"
            src={trailerUrl}
            title="YouTube trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ margin: '20px 0' }}
          />
        )}
        <img src={apiData.Poster} alt={apiData.Title} style={{ maxWidth: 200, marginBottom: 20 }} />
        <p style={{ maxWidth: 600 }}>{apiData.Plot}</p>
      </div>

      {/* No extra iframe or OMDb fields, only show trailer above */}

    </div>
  )
}

export default Player
