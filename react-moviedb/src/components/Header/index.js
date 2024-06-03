import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb-logo.svg';

import {Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styles';

// Styles


// Context
import {Context} from '../../context';

const Header = () => {

    const [user, setUser] = useContext(Context);
    return(
        <Wrapper>
        <Content>
            <Link to='/react-moviedb'>
                <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
            </Link>
            {user?(
                <span className="loggedin">Logged in as: {user.userName}</span>

            ):(
                <Link to='/react-moviedb/login'>
                    <span className='login'>Log in</span>
                </Link>
            )}
            <TMDBLogoImg src={TMDBLogo} alt='tmbd-logo'/>
        </Content>
    </Wrapper>
    )
    
};

export default Header;
