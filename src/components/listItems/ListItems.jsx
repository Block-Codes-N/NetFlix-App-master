import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import "./listItems.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const ListItems = ({index, item}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState({})
  useEffect(() => {
    const getMovie = async () =>{
      try {
        const movies = await Promise.all(
        item.content.map(async (movieId) => {
          const res = await axios.get(`/movies/find/${movieId}`, {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWE1Njg2Y2U2MzAxYzYwNDBmMjhlMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTY2MjE4MiwiZXhwIjoxNzA2MDk0MTgyfQ.nDrAZ8CmyDALPVouwnLqMT7uoJBGk2ANNjK641UeL5w"
        } 
      })
    }))
      console.log(item)
      // setMovie(res.data);
      // // console.log(res)
      } catch (err) {
        console.log(err)
      }
    }

    getMovie();
  },[item])

  return (
    <div className="listItems" style={{left: isHovered && index * 225 -50 + index * 2.5}}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.img}alt="" />

      {isHovered && (
        <>
      < video src= {movie.trailer} autoPlay = {true} loop/>
   
    <div className="itemInfo">
      <div className="icons">
        <PlayArrow/>
        <Add/>
        <ThumbUpAltOutlined/> 
        <ThumbDownAltOutlined/>

      </div>

      <div className="itemInfoTop">
        <span>{movie.duration}</span>
        <span className="limit">+{movie.limit}</span>
        <span>{movie.year}</span>
      </div>
      <div className="desc">
        {movie.desc}
      </div>
      <div className="genre">{movie.genre}</div>

    </div> 
    </>
    )}
    </div>
  )
}

export default ListItems