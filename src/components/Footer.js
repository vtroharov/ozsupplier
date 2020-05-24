import React, { Component } from 'react'
import styled from 'styled-components';
import face from '../img/face_6.png';
import * as emailjs from 'emailjs-com'
import { Form, FormGroup, Input } from 'reactstrap'
import { ButtonContainer } from './Button';

export default class Footer extends Component {

    state = {
        user_email: '',
      }
    handleSubmit(e) {
        e.preventDefault()
        emailjs.sendForm('ozsupplier_email', 'subscribe', e.target, 'user_P36dBX2APj7TMymPAWrYa')
        this.resetForm()
     }
    resetForm() {
        this.setState({
          user_email: '',
        })
      }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }

    render() {
        return (
            <Bottom>
                <div className="container-fluid">
                    <div className="row mt-0">
                        <div className="col-md-4">
                            <p className="text-uppercase">About Us</p>
                            <p className="text-justify">OzSupplier is an Australian brand creating unique and modern products.<br/>​​​​​​​Founded in 2018, OzSupplier started out of a desire for beautiful and high quality products, cherished and loved by people everywhere.</p>
                        </div>
                        <div className="fluid col-md-3 ml-5 text-left">
                            <p className="text-uppercase">Address</p>
                            <div>Suite 2, 205 Clarence St</div>
                            <div>Sydney NSW 2000</div>
                            <div>Australia</div>
                            <br/>
                            <div>
                                Follow Us <img src={face} alt="face" width="25" height="25" className="social mx-2" onClick={() => {
                                let win = window.open('')
                                win.location.replace('https://www.facebook.com/ozsupplier')
                            }}>
                            </img>
                            </div>
                        </div>
                        <div className="col-md-4 pl-4 pr-4">
                            <p>Sign Up To Receive Special Promotions</p>
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                                <FormGroup className="mx-auto" controlId="formBasicEmail">
                                    <Input
                                        type="email"
                                        name="user_email"
                                        value={this.state.user_email}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'user_email')}
                                        placeholder="Your Email"
                                        required
                                    />
                                </FormGroup>
                                <Input type="hidden" name="subject" value={this.state.subject} />
                                <Input type="hidden" name="message" value={this.state.message} />
                                <FormGroup className="mx-auto">
                                    <ButtonContainer type="submit" disabled={!this.state.user_email} variant="primary" className="btn btn-default">Submit</ButtonContainer>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mx-auto">
                            <p>Copyright © 2019 OzSupplier. All rights reserved.</p>
                        </div>                    
                    </div> 
                </div>
            </Bottom>
        )
    }
}

const Bottom = styled.div`
    background: var(--darkGrey);
    color: var(--mainWhite);
    padding: 10px;
    font-size: 0.8rem;
    font-style: Italic;
    .btn {
        width: 100%;
    }
    .fluid {
        @media (max-width: 768px) {
            font-size: 1rem;
            margin: 20px;
        }
    }
    .social {
        cursor: pointer;
        margin-right: 6px;
    }
`;

