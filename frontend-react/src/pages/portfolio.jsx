import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/portfolio.css';

function Portfolio () {
    return (
        <>
            <section className="dr-meow-meow">
                <h3><a href="https://drmeowmeow.up.railway.app/" target="_blank" rel="noopener noreferrer">Dr. Meow Meow</a></h3>
                <p><a href="https://drmeowmeow.up.railway.app/" target="_blank" rel="noopener noreferrer">Dr. Meow Meow </a> 
                 is a pet health and behavior tracking app with an SQL backend. The idea started with my cat, Sunny, 
                 aka Bun-bun. She began having health problems, and I found myself struggling to piece together a timeline: 
                 when did this start, how often is it happening, is there a pattern I'm missing? I built the first version 
                 of this app to solve that one problem for myself. However, I also enjoy collecting data, so it quickly grew 
                 into a much larger app for tracking more than just health problems. The goal is for any pet parent to be able 
                 to keep their pet's data organized in one place, without relying on faulty memory or scattered notes.
                </p>
                <p className="instructions"><strong>How To Use:</strong></p>
                <p>If you don't want to make your own account, you can use the credentials below to access the site. I made this
                     account with dummy data so potential employers could access all the site's features without needing to make 
                     an account themselves. <strong>Note: </strong> For security reasons, the ability to update the email and 
                     password for this account has been disabled. If you would like to test out those features, you will need to
                      make your own account.
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