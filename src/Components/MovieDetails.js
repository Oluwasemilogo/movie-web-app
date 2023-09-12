import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SideBar } from "./SideBar";
import star from "../Assets/Star.svg";
import otherImage from '../Assets/otherImage.svg';




const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = "784ecf9dd64095579e2d5c690c44398d";
        const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setMovieDetails(data);
        } else {
          setError("Failed to fetch movie details. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
         setError("An error occurred while fetching movie details.");
      }
    };

    fetchMovieDetails();
  }, [id]);
  console.log(movieDetails);

  const formattedReleaseDate = movieDetails
    ? new Date(movieDetails.release_date).toUTCString()
    : "";

  return (
    <div>
      {error && <h1 className="text-red-500 text-center font-normal text-2xl">{error}</h1>}
      {movieDetails && !error && (
        <div className="flex">
          <SideBar />
          {/* main */}
          <div className="p-10">
            <img
              data-testid="movie-poster"
              src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
              alt={movieDetails.title}
              className="h-[380px] w-[1300px] bg-no-repeat bg-cover rounded-lg"
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-6 mt-6  ">
                <h1
                  data-testid="movie-title"
                  className="text-lg text-[#404040] font-medium"
                >
                  {movieDetails.title}
                </h1>
                <p
                  data-testid="movie-release-date"
                  className="text-lg text-[#404040] font-medium"
                >
                  {formattedReleaseDate}
                </p>
                <p
                  data-testid="movie-runtime"
                  className="text-lg text-[#404040] font-medium"
                >
                  {movieDetails.runtime} minutes
                </p>
                <div className="flex">
                  <ul className="flex gap-3 items-center">
                    {movieDetails.genres.map((genre) => (
                      <li
                        key={genre.id}
                        className="text-sm text-[#B91C1C] font-semibold rounded-lg border border-solid border-[#F8E7EB] px-2 py-1"
                      >
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img src={star} alt="star" className="w-6 h-6" />
                <p className="text-[#666] text-md font-normal ">
                  {movieDetails.vote_average}
                </p>
                |
                <p className=" text-md font-normal">
                  {movieDetails.vote_count}
                </p>
              </div>
            </div>
            {/* fnf */}
            <div className="flex justify-between items-center">
              <div>
                <p
                  data-testid="movie-overview"
                  className="text-[#333] text-md font-normal w-[700px] mt-2 "
                >
                  {movieDetails.overview}
                </p>
                <p className="text-[#333] text-md font-normal flex mt-2 ">
                  Tagline:
                  <p className="text-[#BE123C] ">{movieDetails.tagline}</p>
                </p>
                <p className="text-[#333] flex text-md font-normal  mt-2 ">
                  Status:
                  <p className="text-[#BE123C] ">{movieDetails.status}</p>
                </p>
                <div className="flex text-[#333] text-md font-normal  mt-2 ">
                  <p>Spoken Languages:</p>
                  <p className="text-[#BE123C] ">
                    {movieDetails.spoken_languages
                      .map((lang) => lang.name)
                      .join(", ")}
                  </p>
                </div>
                <div className="flex text-[#333] text-md font-normal  mt-2">
                  <p>Homepage:</p>
                  <a
                    href={movieDetails.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#BE123C]  hover:font-semibold"
                  >
                    {movieDetails.homepage}
                  </a>
                </div>
              </div>
              <img src={otherImage} alt="otherImage" />
            </div>
            {/* fgf */}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
