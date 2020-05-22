import React, { Component } from 'react';
import styled from 'styled-components';
import banner from '../img/Home.jpg';
import blanket from '../img/Blanket.jpg';
import dinnerSet from '../img/DinnerSet.png';
import genderRev from '../img/GenderReveal.png';
import milestoneCards from '../img/MilestoneCards.jpg';
import pregnancyCards from '../img/PregnancyCards.jpg';
import swaddle from '../img/Swaddle.png';

class Card extends Component {
    render() {
        return (
            <div className="bg">
                <div className="img-container">
                    <img src={this.props.pic} alt="product" className="card-img-top" />
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                        {this.props.title}
                    </p>
                    <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">$</span>
                        {this.props.price}
                    </h5>
                </div>
            </div>
        );
    }
}



export default class Home extends Component {
    render() {
        return (
            <Main className="container-fluid">
                <div className="row">
                    <BannerImage>
                        <img src={banner} alt="banner" className="bg" />
                    </BannerImage>
                    <Text className="flexbox">
                        <h1 className="text-title">Your Online</h1>
                        <h1 className="text-sub">Shopping</h1>
                        <h5 className="text">First Class eCommerce</h5>
                    </Text>
                </div>
                <Links className="row my-4">
                    <a href='https://www.amazon.com' className="pic col-md-4 mx-auto nav-link">
                        <Card title="Blanket" price="40" pic={blanket} />
                    </a>
                    <a href='https://www.amazon.com' className="col-md-4 mx-auto nav-link">
                        <Card title="Milestone Cards" price="15" pic={milestoneCards} />
                    </a>
                    <a href='https://www.amazon.com' className="col-md-4 mx-auto nav-link">
                        <Card title="Dinner Set" price="20" pic={dinnerSet} />
                    </a>
                </Links>
                <h1 className="my-4 text-muted text-center">Best Sellers</h1>
                <Links className="row my-4">
                    <a href='https://www.amazon.com' className="col-md-4 mx-auto nav-link">
                        <Card title="Swaddle" price="25" pic={swaddle} />
                    </a>
                    <a href='https://www.amazon.com' className="col-md-4 mx-auto nav-link">
                        <Card title="Gender Reveal Decorations" price="20" pic={genderRev} />
                    </a>
                    <a href='https://www.amazon.com' className="col-md-4 mx-auto nav-link">
                        <Card title="Pregnancy Cards" price="15" pic={pregnancyCards} />
                    </a>
                </Links>
            </Main>
        );
    }
}

const Main = styled.div`
    margin-top: 70px;
    @media (min-width: 1100px) {
        width: 1140px;
        margin: auto;
    }
`;
const Text = styled.div`
    position: absolute; 
    color: var(--mainDark);
    margin-top: 10vw;
    text-align: right;
    width: 100%;
    padding-right: 2vw;
    .flexbox { 
        display: flex;
        margin: 5%;
    }
    .text-title { 
        font-size: 2vw;
        @media (max-width: 768px) {
            font-size: 4vw;
        } 
    }
    .text-sub {
        text-style: bold;
        margin-bottom: 6vw;
        font-size: 2vw;
        @media (max-width: 768px) {
            text-style: bold;
            margin-bottom: 6vw;
            font-size: 4vw;
        }
    }
    .text { 
        font-size: 1.5vw;
        @media (max-width: 768px) {
            font-size: 3vw;
        }
    }
    @media (max-width: 768px) {
        margin-top: 5vw;
    }
    @media (min-width: 1140px) {
        width: 1140px;
    }
`;
const BannerImage = styled.div`
    width: 100%;
    .bg {
        width: 100%; 
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`;
const Links = styled.div`
    background: var(--darkWhite);
    .bg {
        padding: 40px;
        width: 100%;
        transition: all 0.5s linear;
        &:hover {
            opacity: 0.5;
            transition:all 0.5s ease-in-out;
            transform: scale(1.1);
        }
    }
    @media (max-width: 768px) {
        padding-left: 40px;
        padding-right: 40px;
    }
`;



 