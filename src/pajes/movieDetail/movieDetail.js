import React , {useEffect,useState} from "react";
import "./movieDetail.css"
import { useParams } from "react-router-dom";

const Movie=()=>{
    const [currentMovieDetail,setMovie]=useState()
    const {id}= useParams()

    useEffect(()=>{
        getData()
        window.scrollTo(0,0)
    },[])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => console.log(data.results))
    }
}