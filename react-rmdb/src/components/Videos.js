import React from 'react'

const Videos = () => {
    const movie = JSON.parse(sessionStorage.getItem("movieData"))
    console.log("yay")
    console.log(movie.videokey)
    return (
        <div>
            {movie.videokey.map((key,index)=>(
           <div key={index}>{key.key}</div>
          ))}
        </div>
        
    )
}

export default Videos
