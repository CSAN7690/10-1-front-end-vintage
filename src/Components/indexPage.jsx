import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage = () => {
    const resources = [];
    return (
        <div>
            <h1>Index Page</h1>
            {/* Display resources */}
            <ul>
                {resources.map((resource) => (
                    <li key={resource.id}>
                        <Link to={`/show/${resource.id}`}>{resource.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IndexPage;