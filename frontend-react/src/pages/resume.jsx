import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/resume.css';

function Resume () {
    return (
        <>
            <section className="resume-header">
                <h3>ALICE BARNES</h3>
                <h4><em>(he/him)</em></h4>
                <p>785-218-7952 • alice.m.j.barnes@gmail.com • Lawrence, KS • 
                    <a href="https://alicebarnes.vercel.app/"> My Website </a> • 
                    <a href="https://github.com/ajbarnes-13" target="_blank" rel="noopener noreferrer"> My Github</a></p>
            </section>

            <section className="professional-summary">
                <h4>PROFESSIONAL SUMMARY:</h4>
                <p>Detail-oriented Software Engineer with a strong foundation in full-stack
                     development, database architecture, and technical communication. 
                     Experienced in designing responsive web applications and data 
                     pipelines using JavaScript, HTML, CSS, React, Node.js, and SQL. 
                     Combines backend logic and modern development practices with an 
                     operational background in enterprise process management and 
                     documentation.
                </p>
            </section>

            <section className="education">
                <h4>EDUCATION:</h4>
                <p>•	<strong>Oregon State University:</strong> <em>Bachelor of Science in Computer Science 
                    with a minor in environmental science | December 2026 (expected)</em>
                </p>
                <p>•	<strong>University of Kansas:</strong> <em>Bachelor of General Studies in Anthropology 
                    with a minor in creative writing | May 2018</em>
                </p>
            </section>

            <section className="technical-skills">
                <h4>TECHNICAL SKILLS:</h4>
                <p>•	Languages, Frameworks & Libraries: JavaScript (ES6+), SQL, HTML5, CSS3, React, Node.js, 
                    Express.js</p>
                <p>•	Databases & Cloud: MySQL, MongoDB</p>
                <p>•	Tools & Methodologies: Git, GitHub, Agile/Scrum, CI/CD Principles, 
                    Technical Documentation, System Design, Software Development Life Cycle
                </p>
            </section>

            <section className="technical-projects">
                <h4>TECHNICAL PROJECTS:</h4>
                <p><strong>Full-Stack Web Application: <a href="https://drmeowmeow.up.railway.app/" target="_blank" rel="noopener noreferrer">Dr. Meow Meow</a></strong> | <em>JavaScript, React, HTML, CSS, 
                    Node.js, Express, MySQL</em> | August 2026 – Present</p>
                <p>•	Architected and deployed a full-stack web application featuring user authentication, state 
                    management, and responsive UI components.</p>
                <p>•	Designed modular RESTful API endpoints and database schemas to manage asynchronous 
                    client-server requests efficiently.</p>
                <p>•	Authored developer and engineer documentation, including database schema, ERD, wireframe, 
                    sitemap, complete API endpoint references, environment setup guides, and deployment instructions.
                    </p>

                <p><strong>Frontend Web Application: Portfolio Website</strong> | <em>JavaScript, React, HTML, CSS</em> | 
                September 2026</p>
                <p>•	Developed a responsive single-page web application to host projects, developer documentation, 
                    and engineer documentation</p>
                <p>•	Implemented accessible UI styling</p>
            </section>

            <section className="professional-experience">
                <h4>PROFESSIONAL EXPERIENCE:</h4>
                <p><strong>Arthur J. Gallagher & Co.</strong></p>
                <p><em>Central Processing Assistant III | June 2021 – August 2024</em></p>
                <p>•	Managed policy processing, endorsements, reinstatements, and cancellations.</p>
                <p>•	Collaborated with underwriters and external partners to resolve operational discrepancies 
                    and streamline workflow pipelines.</p>
                <p>•	Maintained data accuracy and confidentiality across high-volume records, ensuring documentation 
                    adherence to regulatory standards.</p>

                <br></br>

                <p><strong>Atlas General Insurance Services (acquired by Arthur J. Gallagher & Co. in 2021)</strong></p>
                <p><em>Central Processing Assistant I | November 2018 – June 2021</em></p>
                <p>•	Handled policy issuance, endorsements, and loss-run requests with strict attention to data integrity 
                    and confidentiality.</p>
                <p>•	Communicated with client representatives and underwriters to identify missing requirements and resolve 
                    initial documentation errors.</p>
                <p>•	Audited high-volume records for discrepancies prior to final underwriting approval.</p>
            </section>
            <br></br>
        </>
    );
}

export default Resume;
