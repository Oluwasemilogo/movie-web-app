import React, { useEffect, useState } from "react";
import axios from "axios"; 
import { Navbar } from "./Navbar";
import Play from "../Assets/Play.svg";
import imob from "../Assets/imob.svg";
import item from "../Assets/item.svg";


export const HeroSection = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        const apiKey = "784ecf9dd64095579e2d5c690c44398d";
        const randomPage = Math.floor(Math.random() * 10) + 1;
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${randomPage}`
        );

        if (response.data.results.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * response.data.results.length
          );
          const randomMovie = response.data.results[randomIndex];
          setMovie(randomMovie);
        } else {
          setError("No movie data found. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching random movie:", error);
        setError(
          "An error occurred while fetching movie data. Please try again later."
        );
      }
    };

    fetchRandomMovie();
  }, []);
  console.log(movie);

  const backgroundImageStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${
      movie?.backdrop_path || "" 
    })`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
  };

  return (
    <div style={backgroundImageStyle} className="w-full h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
        <div className="flex justify-between items-center">
          <div className="container pl-20 py-6">
            <div className="flex flex-col h-full">
              <Navbar />
              {movie && (
                <>
                  <h1 className="text-5xl text-white font-bold mt-36 w-[400px]">
                    {movie.title}
                  </h1>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <img src={imob} alt="imob icon" />
                      <p className="text-white text-sm font-light">
                        {movie.vote_average}/10
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={item} alt="fruit icon" />
                      <p className="text-white text-sm font-light">
                        {movie.popularity}
                      </p>
                    </div>
                  </div>
                  <p className="text-white text-md font-normal mt-4 w-[500px]">
                    {movie.overview}
                  </p>
                  <button className="px-4 py-2.5 mt-4 rounded-md w-[200px] bg-rose-700 text-white hover:bg-rose-800 focus:outline-none flex items-center gap-4">
                    <img src={Play} alt="play icon" />
                    WATCH TRAILER
                  </button>
                </>
              )}
              {error && (
                <h1 className="text-white text-lg font-bold mt-4 text-center">{error}</h1>
              )}
            </div>
          </div>
          <div className="pr-2 text-white py-2 mt-20">
            <p className="text-sm font-extralight text-white my-2">1</p>
            <p className="text-sm font-extralight text-white my-2">2</p>
            <p className="text-sm font-bold text-white my-2">3</p>
            <p className="text-sm font-extralight text-white my-2">4</p>
            <p className="text-sm font-extralight text-white my-2">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};
