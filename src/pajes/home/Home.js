// import React, { useEffect, useState } from "react";
// import "./Home.css"
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import { Link } from "react-router-dom";
// import MovieList from "../../components/movieList/movieList";


// let Home = () => {

//     const [popularMovies, setPopularMovies] = useState([])

//     useEffect(() => {
//         fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
//             .then(res => res.json())
//             .then(data => [setPopularMovies(data.results),console.log(data.results)])
//     }, [])



//     return ( 
//         <>
//             <div className="poster">
//                 <Carousel
//                     showThumbs={false}
//                     autoPlay={true}
//                     transitionTime={1}
//                     infiniteLoop={true}
//                     showStatus={false}
//                 >
//                     {popularMovies.map(movie => {


//                         return (
//                             <div key={movie?.id + movie?.overview}>
//                                 <Link  style={{ textDecoration: "none", color: "white " }} to={`/movie/${movie.id}`}>
//                                 <div  className="posterImage">
//                                     <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
//                                 </div>
//                                 <div className="posterImage__overlay">
//                                     <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
//                                     <div className="posterImage__runtime">{movie ? movie.release_data : ""}</div>
//                                     <span className="posterImage_rating">{movie ? movie.vote_average : ""} <i className="fas fa-star" /></span>
//                                 </div>

//                                 <div className="posterImage__description">{movie ? movie.overview : ""}</div>
//                                 </Link>
//                             </div>
//                         )


//                     })}
//                 </Carousel>
//                 <MovieList/>
//             </div>

//         </>
//     )
// }
// export default Home;

import React, { useEffect, useState } from "react"
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";

const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} key={movie?.id + movie?.overview} >
                                
                                    <div className="posterImage">
                                        <img alt="" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                    </div>
                                    <div className="posterImage__overlay">
                                        <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                                        <div className="posterImage__runtime">
                                            {movie ? movie.release_date : ""}
                                            <span className="posterImage__rating">
                                                {movie ? movie.vote_average : ""}
                                                <i className="fas fa-star" />{" "}
                                            </span>
                                        </div>
                                        <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                    </div>
                                
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
            </div>
        </>
    )
}

export default Home