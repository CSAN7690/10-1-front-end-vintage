import React, { useEffect, useqState } from 'react';
// import { Link } from 'react-router-dom';

const IndexPage = () => {
    const [vintageClothes, setVintageClothes] = useState([]);

    useEffect(() => {

        const url = "http://localhost:4005/vintage";

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setVintageClothes(data);
            })
    }, []);


    return (
        <div>
            <h1>Index Page</h1>
            {/* Display resources */}
            <ul>
                {vintageClothes.map((vintageItem) => (
                    <li key={vintageItem.id}>
                        {vintageItem.name}
                        {/* <Link to={`/show/${resource.id}`}>{resource.name}</Link> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IndexPage;