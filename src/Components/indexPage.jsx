import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './indexPage.css'

const API = import.meta.env.VITE_BASE_URL

const IndexPage = () => {

    const [vintageClothing, setVintageClothing] = useState([])

    useEffect(() => {
        fetch(`${API}/vintage`)
            .then((response) => {
                return response.json();
            })
            .then((responseJSON) => {
                setVintageClothing(responseJSON);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>Index Page</h1>
            {/* Display resources */}
            <ul>
                {vintageClothing.map((item) => (
                    <li key={item.id}>
                        <Link to={`/show/${item.id}`}>{item.name}{item.style}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IndexPage;