import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const TicketForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        body: "",
        public: false,
        id: ""
    })
}

handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setFormData({
        ...formData, [name]: type === "checkbox" ? checked : value,
    })
}


function PostForm() {


    return (
        <form>
            <div className="row g-3">
                <div className="col-12 col-md-6">
                    <input
                        value={formData.author}
                        type="text"
                        placeholder="Autore"
                        className="form-control"
                    />
                </div>
                <div className="col-12 col-md-6">
                    <input
                        value={formData.title}
                        type="text"
                        placeholder="Titolo"
                        className="form-control"
                    />
                </div>
                <div className="col-12 ">
                    <input
                        value={formData.body}
                        type="text"
                        placeholder="Corpo del post "
                        className="form-control textarea-corpo"
                    />
                </div>

            </div>
            <div className="col-12 col-md-6 form-check mt-4">
                Pubblica
                <input
                    checked={formData.public}
                    type="checkbox"
                    name='Pubblica'
                    className='mx-2' />
            </div>
            <button
                type="button"
                className="btn btn-primary mt-4"
                onClick={''}>
                Invia
            </button>

        </form >
    )
}

export default PostForm
