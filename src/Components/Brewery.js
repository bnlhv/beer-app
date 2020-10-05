import React, { useState, useEffect, Fragment } from 'react';
import { Container, Spinner } from 'react-bootstrap'

export default function Brewery( { match } ) {

    const [brewery, setBrewery] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect (() => {
        fetchItems();
    }, [])

    const fetchItems = async () => {
        const res = await fetch(`https://api.openbrewerydb.org/breweries/${match.params.id}`);
        const data = await res.json();
        console.log(data);
        setBrewery(data);
        setIsLoading(true);
    }

    const h1Style = {
        width: '100%', 
        textAlign: 'center', 
        borderBottom: '1px solid #000', 
        lineHeight: '0.1e',
        margin: '10px 0 20p', 
        textTransform: 'uppercase',
        textShadow: '0 2px white, 0 3px #777'

    }

    const addressStyle = {
        lineHeight: '3rem',
        marginTop: '2rem',
        fontSize: '20px'
    }


    const pageContent = <div dangerouslySetInnerHTML={{__html:`
                        <div>
                            <h1 style={h1Style}>
                                ${brewery.name}
                            </h1>
                        </div>
                        <div>
                            <address style=${addressStyle}>
                                <b>Address: </b>${brewery.street}, ${brewery.city}, ${brewery.state}<br/>
                                ${brewery.country}<br/>
                                <b>Phone: </b>${brewery.phone}
                                <br/>
                                <b>Website :</b><a href={\`${brewery.website_url}\`}> tap to go to the site</a>
                            </address>
                        </div>
                    `}} />

    return (
        <Container >
            {
                !(isLoading) ? <Container ><Spinner animation="border" /></Container> : (
                    <Container >
                        <div>
                            <h1 style={h1Style}>
                                {brewery.name}
                            </h1>
                        </div>
                        <div>
                            <address style={addressStyle}>
                                <b>Address: </b>{brewery.street}, {brewery.city}, {brewery.state}<br/>
                                {brewery.country}<br/>
                                <b>Phone: </b>{brewery.phone}
                                <br/>
                                <b>Website :</b><a href={brewery.website_url}> tap to go to the site</a>
                            </address>
                        </div>
                    </Container>
                )
            }
        </Container>
    )
}