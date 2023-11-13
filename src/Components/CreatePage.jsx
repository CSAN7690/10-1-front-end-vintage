import React, { useState } from 'react';

function CreatePage(props) {

    const [formData, setFormData] = useState({
        name: '',
        style: '',
        category: '',
        price: ''
    });

    const handleInputChange = (event) => {
        setFormData({
            formData, [event.target.name]: event.target.value
        });
    };

    //Form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Form submitted with data:', formData);
    };

    return (
        <div>
            <h1>Add Vintage Clothing Item</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </label>
                <br />


                <label>
                    Style:
                    <input
                        type="text"
                        name="style"
                        value={formData.style}
                        onChange={handleInputChange}
                    />
                </label>
                <br />


                <label>
                    Category:
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                    />
                </label>
                <br />


                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                    />
                </label>
                <br />


                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreatePage;