import React, { Component } from 'react';
import styled from 'styled-components';
import banner from '../img/AboutUs.jpg';

export default class AboutUs extends Component {
    render() {
        return (
            <Main className="container-fluid">
                <div className="row my-3">
                    <div className="col-5 mx-auto">
                        <BannerImage>
                            <img src={banner} alt="banner" className="bg" />
                        </BannerImage>
                    </div>
                    <div className="col-5 mx-auto">
                        <p className="text-muted text-center">About Us</p>
                        <Desc className="text-muted text-justify">
                            When you shop in our Amazon stores, we want you to get the best products and services to meet your needs at the best price. This means a combination of exceptional service and product knowledge.
                            <br/>
                            <p className="text-muted">Great Products & Great Service</p>
                            Our customers appreciate the service-oriented attitude and the unique shopping experiance, with Oz Supplier offering the highest quality and very latest in all things baby and more. We also love giving our customers exclusive offers and most importantly great service.
                            <br/>
                            <p className="text-muted">Unique Products</p>
                            We love to support the little guy. Our team of buyers are constantly on the lookout for the best products. Some of the most life changing products come from small businesses with a real passion for making a difference to peaople's lives.
                            <br/>
                            <p className="text-muted">Making Life Easy</p>
                            At Oz Supplier, we believe your shopping experiance should be effortless and enjoyable. To ensure this, we have an excellent team of local customer service representatives (located in our Sydney office).​​​​​​​
                        </Desc>
                    </div>
                </div>
            </Main>
        );
    }
}

const Main = styled.div`
    margin-top: 90px;
    @media (min-width: 1140px) {
        width: 1140px;
        margin: auto;
    }
`;

const Desc = styled.p`
    font-size: 0.7rem;
    font-style: italic;
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

