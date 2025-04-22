import React from "react";
import '../Contacts.css';

function Contacts(){
    return(
        <>
        <section id="contact" className="contacts">
            <h2>Get in Touch</h2>
            <form action="https://formspree.io/f/xvgaogba" method="POST">
                <label>
                    <span>Your email:</span>
                    <input type="email" name="email"/>
                </label>
                <label>
                <span>Your message:</span>
                    <textarea name="message"></textarea>
                </label>
                    <button type="submit">Send</button>
            </form>
        </section>
        </>
    );
}
export default Contacts;