/* eslint-disable @next/next/no-img-element */
"use client"
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import "./page.css";
export default function Page() {
    return <div className="home-page">
        <Sidebar />
        <div>
            <Navbar />
            <section className="movie-section">
                <div className="movie-poster-container">
                    <img
                        src="/pic-2.jpg"
                        alt=""
                    />
                </div>

                <div className="movie-details-container">
                    <h2>Keith Piper</h2>

                    <div className="movie-ratings-container"></div>

                    <div className="movie-misc-info">
                        <div className="info-tab">
                            <h3>Title</h3>
                            <span>Business Advisor</span>
                        </div>

                        <div className="info-tab">
                            <h3>Education</h3>
                            <span>LLB, LLM</span>
                        </div>

                        <div className="info-tab">
                            <h3>Email</h3>
                            <span>keith.piper@quickincrops.com</span>
                        </div>

                        <div className="info-tab">
                            <h3>Ratings</h3>
                            <span>4.8</span>
                        </div>
                    </div>

                    {/* <div className="movie-genre">
                    <h3>Genre</h3>
                    <div className="movie-genre-container">
                        {movieData.genres.map((genre, index) => (
                            <span className="bordered-info-button" key={index}>
                                {genre.name}{" "}
                            </span>
                        ))}
                    </div>
                </div> */}

                    <div className="movie-synopsis">
                        <h3>Synopsis</h3>
                        <p>Keith Piper is a seasoned legal professional specializing in providing strategic counsel to businesses of all sizes. With over two decades of experience in the legal industry, Keith has developed a reputation for his sharp analytical skills, comprehensive understanding of business law, and his ability to craft innovative solutions to complex legal challenges. His clients range from startups and small enterprises to large corporations, across various sectors including technology, finance, healthcare, and manufacturing.</p>
                    </div>

                    {/* <div className="movie-cast">
                    <h3>Cast</h3>
                    <div className="movie-cast-container">
                        {creditData &&
                            creditData.cast.length !== 0 &&
                            creditData.cast.map((c, index) => (
                                <span className="bordered-info-button" key={index}>
                                    {c.name}
                                </span>
                            ))}
                    </div>
                </div> */}

                    {/* <div className="movie-button-container">
                    {movieData.homepage && (
                        <button className="website-button">
                            <a href={movieData.homepage}>Website</a>
                        </button>
                    )}
                    <button className="website-button">
                        <a href={`https://www.imdb.com/title/${movieData.imdb_id}`}>
                            IMDB
                        </a>
                    </button>
                </div> */}
                </div>
            </section>
        </div>
    </div>


}