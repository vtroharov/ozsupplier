import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/Logo.png';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-md navbar-light">
                <button className="navbar-toggler mr-5" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to='/'>
                    <img src={logo} alt="home" width="120" height="60" className="navbar-header" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="nav navbar-nav justify-content-end"> 
                        <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link to='/home' className='nav-link'>
                                home
                            </Link>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link to='/about_us' className='nav-link'>
                                about us
                            </Link>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link to='/contact_us' className='nav-link'>
                                contact us
                            </Link>
                        </li>
                    </ul>
                </div>
            </NavWrapper>  
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--lightWhite);
    position: relative;
    z-index: 9999;
    top: 0;
    width: 100%;
    margin-bottom: 0px !important;
    padding-bottom: 0px !important;
    .navbar-header {
        margin-right: 20px;
    }
    .nav {
        margin-left: 20px;
        margin-top: 15px;
        width: 100%;
    }
    .nav-item {
        margin-top: 0px;
        text-align: center;
        width: 20%;
        @media (max-width: 768px) {
            text-align: left;
        }
        cursor: pointer;
    }
    .nav-link {
        width: 100%;
        white-space: nowrap;
        color: var(--mainGrey) !important;
        font-size: 1.2rem;
        text-transform: capitalize;
        &:hover {
            color: var(--darkGrey) !important;
        }
    }
    @media (max-width: 768px) {
        position: absolute;
    }
`;
