import React, { Component } from 'react';
import styled from 'styled-components';
import { ButtonContainer } from '../components/Button';
import banner from '../img/Contact.jpg';

import * as emailjs from 'emailjs-com'
import { Form, FormGroup, Input } from 'reactstrap'


export default class Contact extends Component {

    state = {
        subject: '',
        user_email: '',
        message: '',
      }
    handleSubmit(e) {
        e.preventDefault()
        emailjs.sendForm('ozsupplier_email', 'contact_us', e.target, 'user_P36dBX2APj7TMymPAWrYa')
        this.resetForm()
     }
    resetForm() {
        this.setState({
          subject: '',
          user_email: '',
          message: '',
        })
      }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }

    render() {
        return (
            <Main className="container-fluid">
                <div className="row ml-1">
                <CForm className="col-md-7 my-5">
                    <Form  onSubmit={this.handleSubmit.bind(this)}>
                        <div className="heading col-md-12 mx-auto text-left text-muted my-2">GET IN TOUCH!
                        </div>
                        <FormGroup className="mx-auto" controlId="formBasicName">
                            <Input
                                type="text"
                                name="subject"
                                value={this.state.subject}
                                className="text-primary"
                                onChange={this.handleChange.bind(this, 'subject')}
                                placeholder="Subject"
                                required
                            />
                        </FormGroup>
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
                        <FormGroup className="mx-auto" controlId="formBasicMessage">
                            <Input
                                type="textarea"
                                name="message"
                                rows="8"
                                className="text-primary"
                                value={this.state.message}
                                onChange={this.handleChange.bind(this, 'message')}
                                placeholder="Your Message"
                                required
                            />
                        </FormGroup>
                        <Input type="hidden" name="subject" value={this.state.subject} />
                        <FormGroup className="mx-auto">
                            <ButtonContainer type="submit" disabled={!this.state.user_email} variant="primary" className="btn btn-default px-5">Send</ButtonContainer>
                        </FormGroup>
                    </Form>
                </CForm>
                <Pic className="col-md-5 my-5">
                    <BannerImage>
                        <img src={banner} alt="banner" className="bg" />
                    </BannerImage>
                </Pic>
                </div>
            </Main>
        );
    }
}

const Main = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    @media (max-width: 768px) {
        margin-top: 73px;
    }
`;

const Pic = styled.div`
    display: flex;
    align-items: flex-end;
`;

const BannerImage = styled.div`
    width: 100%;
    .bg {
        width: 100%; 
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    @media (max-width: 768px) {
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;
const CForm = styled.div`
    background: var(--darkWhite);
    padding: 30px;
    .heading {
        text-align: center;
        font-size: 0.7rem;
    }
    .btn {
        width: 100%;
    }
`;

