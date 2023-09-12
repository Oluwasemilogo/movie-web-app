import React, { useEffect, useState } from "react";
import rightIcon from "../Assets/right.svg";
import imob from "../Assets/imob.svg";
import item from "../Assets/item.svg";
import { Link } from "react-router-dom";
import likeIcon from "../Assets/likeIcon.svg";

export const Featured = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [error, setError] = useState(null);
  const [likedMovies, setLikedMovies] = useState([]); // State to track liked movies

  useEffect(() => {
    // Fetch top-rated movies from the TMDB API
    const fetchTopRatedMovies = async () => {
      try {
        const apiKey = "784ecf9dd64095579e2d5c690c44398d";
        const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setTopMovies(data.results.slice(0, 10));
        } else {
          setError("Error fetching top-rated movies. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
        setError(
          "An error occurred while fetching top-rated movies. Please try again later."
        );
      }
    };

    fetchTopRatedMovies();
  }, []);

  // Function to toggle liked status of a movie
  const toggleLiked = (movieId) => {
    if (likedMovies.includes(movieId)) {
      // Movie is already liked, so unlike it
      setLikedMovies(likedMovies.filter((id) => id !== movieId));
    } else {
      // Movie is not liked, so like it
      setLikedMovies([...likedMovies, movieId]);
    }
  };

  // Define the SVG with the red fill color
  const redFillSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="red"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
        fill="red"
      />
    </svg>
  );

  return (
    <div className="px-20 py-6">
      <div className="flex justify-between items-center my-8">
        <h1 className="font-medium text-3xl text-black">Featured Movies</h1>
        <div className="flex items-center gap-2">
          <p className="text-rose-700 text-md font-normal">See more</p>
          <img src={rightIcon} alt="right icon" />
        </div>
      </div>

      {error ? (
        <p className="text-red-600 text-lg font-semibold my-4">{error}</p>
      ) : (
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 my-12">
          {topMovies.map((movie) => (
            <Link to={`/movies/${movie.id}`}>
              <div
                key={movie.id}
                data-testid="movie-card"
                className="bg-white rounded-lg shadow-sm flex flex-col items-start my-8 pb-4 w-[300px]"
              >
                {/* <div className="flex items-center justify-end absolute top-2 right-2">
                  <button
                    onClick={() => toggleLiked(movie.id)}
                    className={`${
                      likedMovies.includes(movie.id) ? "text-red-600" : ""
                    }`}
                  >
                    {likedMovies.includes(movie.id) ? (
                      redFillSVG // Use the red fill SVG when liked
                    ) : (
                      <img src={likeIcon} alt="Like" /> // Use the default like icon
                    )}
                  </button>
                </div> */}
                <img
                  data-testid="movie-poster"
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.poster}
                  className="w-[300px] h-[370px] "
                />
                <div className="flex items-center justify-end absolute top-2 right-2">
                  <button
                    onClick={() => toggleLiked(movie.id)}
                    className={`${
                      likedMovies.includes(movie.id) ? "text-red-600" : ""
                    }`}
                  >
                    {likedMovies.includes(movie.id) ? (
                      redFillSVG // Use the red fill SVG when liked
                    ) : (
                      <img src={likeIcon} alt="Like" /> // Use the default like icon
                    )}
                  </button>
                </div>
                <h2
                  data-testid="movie-title"
                  className="text-lg font-medium mt-1"
                >
                  {movie.title}
                </h2>
                <p
                  data-testid="movie-release-date"
                  className="text-gray-500 text-sm mt-2"
                >
                  Release Date: {movie.release_date}
                </p>
                <div className="flex justify-between items-center ">
                  <div className="flex items-center gap-2">
                    <img src={imob} alt="imob icon" />
                    <p>{movie.vote_average}/10</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={item} alt="imob icon" />
                    <p>{movie.popularity}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
