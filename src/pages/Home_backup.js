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
                <Links className="row my-3">
                    <a href='https://www.amazon.com.au/Eco-Baby-Planet-Milestone-Blanket/dp/B07RT3T958' className="pic col-md-4 mx-auto nav-link">
                        <Card title="Milestone Blanket" price="39.95" pic={blanket} />
                    </a>
                    <a href='https://www.amazon.com.au/Eco-Baby-Planet-Newborn-Swaddle/dp/B083XLLJ4M' className="col-md-4 mx-auto nav-link">
                        <Card title="Swaddle Blanket" price="34.95" pic={swaddle} />
                    </a>
                    <a href='https://www.amazon.com.au/Eco-Baby-Planet-Bamboo-Dinnerware/dp/B0848J2VSH' className="col-md-4 mx-auto nav-link">
                        <Card title="Dinner Set" price="34.95" pic={dinnerSet} />
                    </a>
                </Links>
                {/* <h1 className="text-muted text-center">Best Sellers</h1> */}
                <Links className="row my-3">
                    <a href='https://www.amazon.com.au/Eco-Baby-Planet-Milestone-Cards/dp/B07RT3VH2Q' className="col-md-4 mx-auto nav-link">
                        <Card title="Baby Milestone Cards" price="12.95" pic={milestoneCards} />
                    </a>
                    <a href='https://www.amazon.com.au/Eco-Baby-Planet-Pregnancy-Milestone/dp/B07XXHJFJQ' className="col-md-4 mx-auto nav-link">
                        <Card title="Pregnancy Cards" price="12.90" pic={pregnancyCards} />
                    </a>
                    <a href='https://www.amazon.com.au/Gender-Reveal-Party-Supplies-Decorations/dp/B083XN6HTZ' className="col-md-4 mx-auto nav-link">
                        <Card title="Gender Reveal Decorations" price="29.90" pic={genderRev} />
                    </a>
                </Links>
            </Main>
        );
    }
}

const Main = styled.div`
    @media (max-width: 768px) {
        margin-top: 68px;
    }
`;
const Text = styled.div`
    position: absolute; 
    color: var(--mainDark);
    margin-top: 8vw;
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
        font-size: 2vw;
        @media (max-width: 768px) {
            text-style: bold;
            font-size: 3vw;
        }
    }
    .text { 
        font-size: 2vw;
        @media (max-width: 768px) {
            font-size: 3vw;
        }
    }
    @media (max-width: 768px) {
        margin-top: 5vw;
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
        padding: 30px;
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



 
