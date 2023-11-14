import React, { useState } from 'react';

const API = import.meta.env.VITE_BASE_URL;

function CreatePage(props) {
    const [formData, setFormData] = useState({
        name: '',
        style: '',
        category: '',
        price: ''
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`${API}/vintage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {

                console.log('Item created:', data);

            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });
    };

    return (
        <div>
            <h1>Add Vintage Clothing Item</h1>
            <form onSubmit={handleSubmit}>
                {/* Form fields */}
                {/* Rest of your form */}
            </form>
        </div>
    );
}

export default CreatePage;   