import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './indexPage.css'

const apiURL= (`http://localhost:4005`);


const IndexPage = () => {

    const [vintageClothing, setVintageClothing] = useState([])

    useEffect(() => {
        fetch(`${apiURL}/vintage`)
            .then((response) => {
                return response.json();
            })
            .then((responseJSON) => {
                setVintageClothing(responseJSON);
            })
             .catch((error)=>console(error));
    }, []);

    return (
        <div>
            <h1>Index Page</h1>
            {/* Display resources */}
            <ul>
                {vintageClothing.map((vintage) => (
                    <li key={vintage.id}>
                        <Link to={`/vintage/shows/${vintage.id}`}>{vintage.name}{vintage.style}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IndexPage;