import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreatePage = () => {
    const history = useHistory();

    // Store new resource data ✨🧪
    const [newResource, setNewResource] = useState({
        name: '',
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/resources', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newResource),
            });
            if (response.ok) {
                history.push('/');
            } else {
                console.error('Error creating resource:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating resource:', error.message);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewResource((prevResource) => ({
            ...prevResource,
            [name]: value,
        }));
    };

    return (
        <div>
            <h1>Create New Resource</h1>
            {/* Form for creating a new resource */}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={newResource.name}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Create Resource</button>
            </form>
        </div>
    );
};

export default CreatePage;