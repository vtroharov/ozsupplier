import React, { Component } from 'react';
import styled from 'styled-components';
import banner from '../img/Home.jpg';
import pic from '../img/AboutUs.jpg';

export default class AboutUs extends Component {
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
                <div className="row my-4">
                    <div className="col-md-5 mx-auto">
                        <h4 className="text-muted text-center">About Us</h4>
                        <Desc className="text-muted text-justify">
                            When you shop in our Amazon stores, we want you to get the best products and services to meet your needs at the best price. This means a combination of exceptional service and product knowledge.
                            <br/><br/>
                            <h5 className="text-muted">Great Products & Great Service</h5>
                            Our customers appreciate the service-oriented attitude and the unique shopping experience, with Oz Supplier offering the highest quality and very latest in all things baby and more. We also love giving our customers exclusive offers and most importantly great service.
                            <br/><br/>
                            <h5 className="text-muted">Unique Products</h5>
                            We love to support the little guy. Our team of buyers are constantly on the lookout for the best products. Some of the most life changing products come from small businesses with a real passion for making a difference to people’s lives.
                            <br/><br/>
                            <h5 className="text-muted">Making Life Easy</h5>
                            At Oz Supplier, we believe your shopping experience should be effortless and enjoyable. To ensure this, we have an excellent team of local customer service representatives (located in our Sydney office).​​​​​​​
                        </Desc>
                    </div>
                    <div className="col-md-5 mx-auto">
                        <BannerImage1>
                            <img src={pic} alt="banner" className="bg" />
                        </BannerImage1>
                    </div>
                </div>
            </Main>
        );
    }
}

const Main = styled.div`
    margin-top: 5px;
    @media (max-width: 768px) {
        margin-top: 84px;
    }
`;

const Desc = styled.p`
    font-size: 0.9rem;
    font-style: italic;
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

const BannerImage1 = styled.div`
    width: 100%;
    .bg {
        width: 100%; 
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

