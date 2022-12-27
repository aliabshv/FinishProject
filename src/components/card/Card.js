// import React, { useEffect, useState } from "react";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "./Card.css";
// import { Link } from "react-router-dom";

// const Cards = ({movie}) => {
//     const [isLoading, setIsLoading] = useState(true)

//     useEffect(() => {
//         setTimeout(() => {
//             setIsLoading(false)
//         }, 1500)
//     }, [])

//     return(
//     <>
//         {
//             isLoading?
//                 <div className="cards">
//                     <SkeletonTheme color={"#202020"} highlightColor={"#444"}>
//                         <Skeleton height={300} duration={2} />
//                     </SkeletonTheme>
//                 </div>
//                 :
//                 <Link to={`movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
//                     <div className="cards">
//                         <img src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}  className="cards_img" alt=""/>
//                         <div className="cards_overlay">
//                             <div className="card_title">
//                                 {movie?movie.original_title:""}
//                             </div>
//                             <div className="card_runtime">
//                            { movie?movie.release_data:""}
//                            <span className=" card_rating"> { movie?movie.vote_average:""} <i className="fas fa-star"></i></span>
//                             </div>
//                             <div className="card_description">{ movie?movie.overwiew.slice(0,118)+"...":""}</div>
//                         </div>
//                     </div>
//                 </Link>

        
//         }
//     </>
//     )
// }

// export default Cards

import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./Card.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards