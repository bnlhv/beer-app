import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default function Breweries() {

    const [breweries, setBreweries] = useState([]);

    useEffect (() => {
        fetchItems();
    }, [])

    const fetchItems = async () => {
        const res = await fetch('https://api.openbrewerydb.org/breweries');
        const data = await res.json();
        console.log(data);
        setBreweries(data);
    }

    const h1Style = {
        fontSize: '24px',
        lineHeight: '3rem',
        marginTop: '2rem',
        width: '100%', 
        textAlign: 'center' 
    }

    return (
        <Container>
            {
                breweries.map( brewery => {
                   return ( 
                        <h1 
                            key={brewery.id} 
                            style={h1Style}>
                                <Link to={`/Breweries/${brewery.id}`}>
                                    {brewery.name}
                                </Link>
                        </h1>
                    );
                })
            }
        </Container>
    )
}
