import React from "react";
import '../Contacts.css';

function Contacts(){
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };


        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            alert(result.message);
            e.target.reset();
        } catch (err) {
            alert("Failed to send message. Please try again!");
        }
    };
    return(
        <>
        <section id="contact" className="contacts">
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="message" placeholder="Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
        </>
    );
}
export default Contacts;