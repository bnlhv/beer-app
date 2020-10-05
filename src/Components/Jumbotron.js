import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import beer from '../assets/beer-jumbo.jpg'

export default function Jumbotron() {
    
    const styleJumbo = {
        background: `url(${beer}) no-repeat fixed bottom`,
        backgroundSize: 'cover',
        color: '#efefef',
        height: '250px',
        position: 'relative',
        zIndex: '-2',
        textAlign: 'center',
        alignItems: 'center'
    }

    const styleOverlay = {
        backgroundColor: '#aea4a4',
        opacity: '0.6',
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        zIndex: '-1'
    }

    const styleH1 = {
        fontSize: '60px',
        fontWeight: '700'
    }

    const styleP = {
        fontSize: '30px',
        fontWeight: '500'
    }
    
    return (
        <>
            <Jumbo fluid className="jumbo" style={styleJumbo}>
                <div className="overlay" style={styleOverlay}></div>
                <Container>
                    <h1 style={styleH1}>Welcome</h1>
                    <p style={styleP}>the greatest beer site ever!!</p>
                </Container>
            </Jumbo>
        </>
    )
}
