import React from "react"
import "./Header.css"
import {Link} from "react-router-dom"

const Header=()=>{
    return(
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img alt="" className="header_icon"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/640px-IMDB_Logo_2016.svg.png"/></Link>
                <Link to="/movies/popular" style={{textDerocation:"none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDerocation:"none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDerocation:"none"}}><span>UpComing</span></Link>
            </div>
        </div>
    )
}
export default Header;