import { useState } from 'react'
import axios from 'axios'

function PostForm() {

    // Creo una variabile di stato 'formData' per memorizzare i dati del form.
    // Inizializzo 'formData' come oggetto con le chiavi: title, author, body, public, e id, che ho ripreso dall'end point 
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        body: "",
        public: false,
        id: ""
    })

    // Questa funzione viene chiamata ogni volta che un campo del form viene modificato.
    // Si occupa di aggiornare il valore del campo corrispondente nello stato 'formData'.
    // Se il campo è un checkbox, viene usato 'checked', altrimenti 'value' per i campi di testo.
    const handleChange = (event) => {

        const { name, value, type, checked } = event.target;

        // setFormData aggiorna lo stato con il nuovo valore del campo che ha subito la modifica.
        // Se il campo è un checkbox, aggiorna con 'checked' (vero o falso), altrimenti usa 'value' per altri tipi di input.
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        })
    }

    // Questa funzione viene chiamata quando l'utente invia il form.
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
            .then(res => {
                console.log(res.data);
                alert('Richiesta inviata con successo');  // Mostra un messaggio di successo all'utente.
            })

        // resetto i campi una volta mandati i dati
        setFormData({
            title: "",
            author: "",
            body: "",
            public: false,
        })

            .catch(err => {
                console.error(err);
                alert('Si è verificato un errore');
            })
    }

    return (
        <form>
            <div className="row g-3">
                {/* Campo per l'autore */}
                <div className="col-12 col-md-6">
                    <input
                        type="text"
                        name="author"  // Il nome del campo per identificare l'input
                        placeholder="Autore"
                        className="form-control"
                        value={formData.author}  // Il valore dell'input è preso da 'formData.author'
                        onChange={handleChange}  // Quando cambia, chiama 'handleChange' per aggiornare lo stato
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

                <div className="col-12">
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
                    name="public"  // Nome del campo, per distinguere il valore
                    className="form-check-input mx-2"
                    checked={formData.public}  // La checkbox è selezionata se 'formData.public' è true
                    onChange={handleChange}  // Quando la checkbox viene cliccata, chiama 'handleChange'
                />
            </div>


            <button
                type="button"
                className="btn btn-primary mt-4"
                onClick={handleSubmit}>  {/* Quando cliccato, chiama la funzione 'handleSubmit' */}
                Invia
            </button>
        </form>
    )
}

export default PostForm;
