import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Movie.css";

const MoviesPage = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [option, setOption] = useState("movie");
  const [showInfo, setShowInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const uploadData = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch("https://hoblist.com/api/movieList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      }),
    });
    console.log(response);

    const data = await response.json();
    console.log(data);
    setMovies(data.result);
    setIsLoading(false);
    // console.log(movies.length);
  }, []);
  useEffect(() => {
    uploadData();
  }, [uploadData]);

  return (
    <>
      <div>
        <div className="company-info-container">
          <div className="toggle-container">
            <select
              name=""
              id=""
              onChange={(e) => {
                console.log(e.target.value);
                setOption(e.target.value);
              }}
            >
              <option value="movie">Movie</option>
              <option value="company_info">Company Info</option>
            </select>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Logout
            </button>
          </div>
          {option == "company_info" && (
            <div className="company-details">
              <p>Company: Geeksynergy Technologies Pvt Ltd</p>
              <p>Address: Sanjayanagar, Bengaluru-56</p>
              <p>Phone: XXXXXXXXX09</p>
              <p>Email: XXXXXX@gmail.com</p>
            </div>
          )}
        </div>
      </div>
      {option == "movie" && (
        <div>
          <h1 style={{ textAlign: "center" }}>Movies List</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {movies.length > 0 ? (
              movies.map((movie) => (
                <div
                  key={movie._id}
                  style={{
                    display: "flex",
                    margin: "3rem 0",
                    width: "600px",
                    // textAlign: "center",
                    // justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        margin: "0 10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "300px",
                      }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/4655/4655143.png"
                        alt={movie.title}
                        style={{ width: "40px", height: "40px" }}
                      />
                      <p style={{ textAlign: "center" }}>{movie.totalVoted}</p>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/57/57055.png"
                        alt={movie.title}
                        style={{ width: "40px", height: "40px" }}
                      />
                    </div>
                    <p style={{ textAlign: "center" }}>Votes</p>
                  </div>

                  <img
                    src={movie.poster}
                    alt={movie.title}
                    style={{ width: "200px", height: "300px" }}
                  />
                  <div>
                    <h3 style={{ margin: "0.5rem 40px" }}>{movie.title}</h3>
                    <p style={{ margin: "0.5rem 40px" }}>
                      Genre: {movie.genre}
                    </p>
                    <p style={{ margin: "0.5rem 40px" }}>
                      Director: {movie.director[0]}
                    </p>
                    {movie.stars != null && movie.stars.length > 0 && (
                      <p style={{ margin: "0.5rem 40px" }}>
                        Starring:
                        {movie.stars.map((star) => (
                          <p key={star}>{star},</p>
                        ))}
                      </p>
                    )}
                    <p style={{ margin: "0.5rem 40px" }}>{movie.language}</p>
                    <p style={{ margin: "0.5rem 40px" }}>{movie.genre}</p>
                    <p style={{ margin: "0.5rem 40px" }}>
                      Rating: {movie.voting}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div>
                {isLoading ? <p>Loading movies.....</p> : <p>NO movies </p>}
              </div>
            )}
            {/* <button onClick={uploadData}>Upload Movie Data</button> */}
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesPage;
