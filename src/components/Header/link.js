import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    color: ${props => props.active ? 'pink' : '#ffffff'}
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    padding-right: 33px;
    border-right: 1px dotted #fff;
    transition: color 0.3s;

    &:hover {
        color: #8d8d8d;
        text-decoration: none;
    }

    &:last-child{
        border-right: none;
    }
`

class Link extends Component{
    render(){
        return(
            <StyledLink href={this.props.link}> {this.props.text} </StyledLink>
        )
    }
}

export default Link;