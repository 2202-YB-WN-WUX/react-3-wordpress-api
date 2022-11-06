import axios from 'axios';
import { useState } from 'react'

const formEndpoint = process.env.REACT_APP_WP_API_CONTACT_FORM;

const ContactForm = () => {
    // collect inputs and store in state
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    // set up state for our contact form
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = () => {
        // process all our data (i.e. the user inputs) into a single object
        const formData = new FormData();
        formData.append('your-name', name)
        formData.append('your-email', email)
        formData.append('your-message', message)

        // post our data to contact form 7, which is in the wordpress backend
        // use axios to do it- first argument is the endpoint, the second argument is the form data,
        // the third argument is the headers, which is telling the server what to expect
        axios.post(formEndpoint, formData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((response) => {
            console.log("test");
            console.log(response)
            setSubmitted(true)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div id="form-container">
            <p className="mb-5">Get in touch</p>
            <form
                method="POST"
                onSubmit={event => {
                    event.preventDefault();
                    handleSubmit();
                }
                }>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <label htmlFor="message">Message</label>
                <textarea
                    type="text"
                    name="message"
                    required
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}
                />
                <button className="button">
                    Send a message
                </button>
            </form>
        </div>
    )
}

export default ContactForm