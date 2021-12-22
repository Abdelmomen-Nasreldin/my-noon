import React from 'react'
import { Container, Image, Row } from 'react-bootstrap';
export default function Navbar({ AdLink }) {
    return (
        <Container>
            <Row className="justify-content-center">

                <Image  type="image" src={AdLink} />
                
            </Row>
        </Container>
    );
};