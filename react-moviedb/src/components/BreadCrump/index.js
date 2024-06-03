import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

// Styles
import {Wrapper, Content} from './BreadCrump.styles';

const BreadCrump = ({movieTitle}) => {
    return (
        <Wrapper>
            <Content>
                <Link to='/react-moviedb'>
                    <span>Home</span>
                </Link>
                <span>|</span>
                <span>{movieTitle}</span>
            </Content>
        </Wrapper>
    );
}

BreadCrump.propTypes = {
    movieTitle: PropTypes.string,
}

export default BreadCrump;

