import { useState } from "react";

export function AddWorkPlaceForm({ onAdd }) {
    const [formData, setFormData] = useState({
        title: '',
        name: '',
        description: '',
        link: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd(formData);
        setFormData({
            title: '',
            name: '',
            description: '',
            link: '',
        });
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Enter your title: </label>
                <input
                    type='text'
                    id='title'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="name">Enter your company's name: </label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="description">Enter your role description: </label>
                <input
                    type='text'
                    id='description'
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="link">Enter link to company's website: </label>
                <input
                    type='text'
                    id='link'
                    name='link'
                    value={formData.link}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Add new experience</button>

        </form>
    );    
}