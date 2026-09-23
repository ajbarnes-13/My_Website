import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/portfolio.css';

function Portfolio () {
    return (
        <>
            <section className="dr-meow-meow">
                <h3><a href="https://drmeowmeow.up.railway.app/" target="_blank" rel="noopener noreferrer">Dr. Meow Meow</a></h3>
                <p><a href="https://drmeowmeow.up.railway.app/" target="_blank" rel="noopener noreferrer">Dr. Meow Meow </a> 
                is a full-stack pet health and behavior tracking app, built with React on the frontend, a Node.js/Express REST API 
                on the backend, and a MySQL database, with Firebase handling authentication. The idea started with my cat, Sunny 
                (aka Bun-bun). She began having health problems, and I found myself struggling to piece together a timeline: when 
                did this start, how often is it happening, is there a pattern I'm missing? I built the first version of this app to 
                solve that one problem for myself. Since I also enjoy collecting data about my interests, it quickly grew into a much 
                larger app for tracking appointments, medications, vaccines, food, and behavior, all backed by a REST API I designed 
                and built from scratch. The goal is for any pet parent to keep their pet's data organized in one place, instead of 
                relying on faulty memory or scattered notes.
                </p>
                <p className="instructions"><strong>How To Use:</strong></p>
                <p>Click the Dr. Meow Meow link at the top of this page, or navigate to https://drmeowmeow.up.railway.app/ and 
                    follow the on-screen prompts to make an account and login. If you don't want to make an account, you can 
                    use the credentials below to access the site. I made this account with dummy data so potential employers could 
                    access all the site's features without needing to make an account themselves. <strong>Note: </strong> For security 
                    reasons, the ability to update the email and password for this account has been disabled. If you would like to test 
                    out those features, you will need to make your own account.
                </p>
                <p className="credentials"><strong>Email: </strong>demo@thisisafakeemail.com | <strong>Password: </strong>12345A</p>
            </section>

            <section>
                <br></br>
            </section>
        </>
    )
}

export default Portfolio;