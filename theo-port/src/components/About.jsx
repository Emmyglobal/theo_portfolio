import React from "react";
import '../About.css';

function About(){
    return (
        <>
        <section id="about" className="about">
            <h2>About Myself</h2><hr />
            <h3>Vincent Theophilus Ikechukwu</h3>
            <h4>Data Analyst & Digital Marketing Expert</h4>
            <p>With a strong academic foundation in Mathematics and years of professional experience,
                I've established myself as a leader in data analysis, digital marketing, customer experience management, social media strategy, and education.</p>
            <h3>Expertise</h3>
            <h4>Data Analysis: </h4>
            <p> Transforming complex datasets into actionable business intelligence with expertise in Excel, Power BI, Tableau, and SQL.</p>
            <h4>Digital Marketing:</h4>
            <p>Developing comprehensive campaigns, optimizing conversions, and driving audience engagement with measurable results.</p>
            <h4>Customer Experience:</h4>
            <p>Championing exceptional customer service practices, training teams to deliver personalized experiences that foster loyalty and increase retention.</p>
            <h4>Customer Experience</h4>
            <p>Championing exceptional customer service practices, training teams to deliver personalized experiences that foster loyalty and increase retention.
            </p>
            <h4>Social Media Management:</h4>
            <p>Building engaged communities and strengthening brand presence through innovative strategies and content development.</p>
            <h4>Education:</h4>
            <p>Mentoring the next generation of professionals, sharing practical knowledge and theoretical concepts with equal emphasis.</p>
            <h4>Technical Proficiency</h4>
            <ul>
                <li>Data Analysis Tools: Excel, Power BI, Tableau, SQL</li>
                <li>Microsoft Office Suite: Expert-level certification</li>
                <li>Digital Marketing Platforms: Google Analytics, Facebook Business Manager, content writing, blogging, email marketing, e.t.c</li>
            </ul>
            <h4>Professional Philosophy</h4>
            <p>I approach every project with a commitment to excellence, integrity, and innovation. My multidisciplinary background enables me to identify unique perspectives and solutions. I believe in continuous learning and adaptation, staying current with emerging technologies and methodologies.</p>
            <h4>Let's Connect</h4>
            <p>I welcome collaboration opportunities and professional discussions. Reach out through the contact form or connect with me on</p>
            <a href="https://www.linkedin.com/in/vincent-theophilus-ikechukwu-86040a106?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><button>LinkedIn</button></a>

            <h4>Get in Touch</h4>
            <p>
            <a
                href="https://wa.me/2348139171125"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#25D366', fontSize: '1.2rem' }}
            >
                <i className="fab fa-whatsapp" style={{ marginRight: '8px' }}></i>
                WhatsApp: +2348139171125
            </a>
            </p>
            <img src="/theo.jpg" alt="Theophilus'" />
        </section>
        </>
    );
}
export default About;
