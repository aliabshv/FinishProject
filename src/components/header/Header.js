import React from "react"
import "./Header.css"
import {Link} from "react-router-dom"

const Header=()=>{
    return(
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img alt="" className="header_icon"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/640px-IMDB_Logo_2016.svg.png"/></Link>
                <Link to="/movie/popular" style={{textDerocation:"none"}}><span>Popular</span></Link>
                <Link to="/movie/top_rated" style={{textDerocation:"none"}}><span>Top Rated</span></Link>
                <Link to="/movie/upcoming" style={{textDerocation:"none"}}><span>UpComing</span></Link>
            </div>
            <div className="headerRight">
                <input type="text" placeholder="Search for a movie..... "/>
                <h1 className="headerRightH1">Search</h1>
            </div>
        </div>
    )
}
export default Header;