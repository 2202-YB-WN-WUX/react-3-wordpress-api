const ContactForm = () => {
    return (
        <div id="form-container">
            <p>Get in touch</p>
            <form onSubmit={event => { event.preventDefault() }}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    required
                />
                <label htmlFor="message">Message</label>
                <input
                    type="text"
                    name="message"
                    required
                />
                <button
                    className="button">Send a message</button>
            </form>
        </div>
    )
}

export default ContactForm