import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import CoverImage from '../assets/cover.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${CoverImage}) no-repeat fixed;
        background-size: cover;
        height: 290px;
        position: relative;
        z-index: -2;
        color: #fff;
    }

    .overlay {
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay">
                <Container>
                    <h1>Hello World</h1>
                    <p> We are living in 21st Century </p>
                </Container>
            </div>
        </Jumbo>
    </Styles>
);