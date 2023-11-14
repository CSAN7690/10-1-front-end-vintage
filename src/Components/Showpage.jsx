import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API = import.meta.env.VITE_BASE_URL;

function ShowPage() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`${API}/items/${id}`)
            .then(response => response.json())
            .then(data => setItem(data))
            .catch(error => console.error('Error fetching item:', error));
    }, [id]);

    return (
        <div>
            <h2>Item Details</h2>
            {item ? (
                <div>
                    {/* Display the item details */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ShowPage;