import React from 'react'
import YouTube from 'react-youtube';


// Styles
import {Wrapper, Content} from './Videos.styles'

const Videos = () => {
    const movie = JSON.parse(sessionStorage.getItem("movieData"))
    
    const opts = {
        width: '320',
        height: '240'
    }

    return (
        <Wrapper>
        <h1>Videos</h1>
        <Content>
            {movie.videokey.reverse().map((key,index)=>(
           <YouTube key={index} videoId={key.key} opts={opts}/>
           
          ))}
        </Content>
        </Wrapper>
    )   
}

export default Videos;
