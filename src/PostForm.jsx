import React from 'react'
import { useState } from 'react'
import axios from 'axios'




function PostForm() {

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        body: "",
        public: false,
        id: ""
    })

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target

        setFormData({
            ...formData, [name]: type === "checkbox" ? checked : value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
            .then(res => {
                console.log(res.data);
                alert('Richiesta inviata con successo');

            })
    }


    return (
        <form>
            <div className="row g-3">
                <div className="col-12 col-md-6">
                    <input
                        type="text"
                        name="author"
                        placeholder="Autore"
                        className="form-control"
                        value={formData.author}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-12 col-md-6">
                    <input
                        type="text"
                        name="title"
                        placeholder="Titolo"
                        className="form-control"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-12 ">
                    <input
                        type="text"
                        name="body"
                        placeholder="Corpo del post"
                        className="form-control textarea-corpo"
                        value={formData.body}
                        onChange={handleChange}
                    />
                </div>

            </div>
            <div className="col-12 col-md-6 form-check mt-4">
                Pubblica
                <input
                    type="checkbox"
                    name="public"
                    className="form-check-input mx-2"
                    checked={formData.public}
                    onChange={handleChange}
                />
            </div>
            <button
                type="button"
                className="btn btn-primary mt-4"
                onClick={handleSubmit}>
                Invia
            </button>

        </form >
    )
}

export default PostForm
