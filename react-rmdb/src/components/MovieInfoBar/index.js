import React from 'react'
import PropTypes from 'prop-types';
import {useParams, Link} from 'react-router-dom';

// Helpers
import {calcTime, convertMoney} from '../../helpers';

// Styles
import {Wrapper, Content, Tag} from './MovieInfoBar.styles'


const MovieInfoBar = ({buttons}) => {
    const { movieId } = useParams();
    return(
        <Wrapper>
            <Content>
                {buttons.map((name, index)=> {
                    return (<Link key={index} to={`${name}`} className='link'><Tag key={index}>{name}</Tag></Link>)
            })}
            </Content>
        </Wrapper>
    )
    // <Wrapper>
    //     <Content>
    //         <div className="column">
    //             <p>Running time: {calcTime(time)}</p>
    //         </div>
    //         <div className="column">
    //             <p>Budget: {convertMoney(budget)}</p>
    //         </div>
    //         <div className="column">
    //             <p>Revenue: {convertMoney(revenue)}</p>
    //         </div>
    //     </Content>
    // </Wrapper>
}

// MovieInfoBar.propTypes = {
//     title: PropTypes.number,
//     budget: PropTypes.number,
//     revenue: PropTypes.number
// }

export default MovieInfoBar
