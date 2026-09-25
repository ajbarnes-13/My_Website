import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import '../style/meowReqInfo.css';

function ReqInfo() {
    return (
        <section className="dr-meow-meow-req-info">
            <header className="dr-meow-meow-req-info-header">
                <h2>Dr. Meow Meow</h2>
                <h2>Requirements & Information Architecture</h2>

                <nav>
                    <NavLink to="/portfolio/meowReqInfo">Requirements</NavLink>
                    <NavLink to="/portfolio/meowDbArch">DB Architecture</NavLink>
                </nav>
            </header>

            <section className="dr-meow-meow-site-map-section">
                <h3>Sitemap</h3>

                <p>My original design had standalone pages for every table in the database. Food, Medications, Vaccines, 
                Vets, Health Conditions, and Behaviors all had their own pages. To improve user experience, I 
                consolidated these pages into a more centralized structure in the Pet Profile view. Dedicated 
                operational views were also added, such as Edit Pet Profile, Add New Pet, Add New Appointment, 
                and Add New Vet. These pages all handle bulk data entry while the Pet Profile supports quick 
                inline edits to individual records. The User Profile page was scrapped in favor of a simpler 
                Account page. Dr. Meow Meow has no social media features so I didn't see a need for individual 
                user profiles. Instead, the Account page handles account management, such as updating login 
                credentials.
                </p>

                <h4 className="sitemap-1">Sitemap v1</h4>
                <div className="sitemap-image">
                    <img src="/Original-Dr-Meow-Meow-Sitemap.drawio.png" alt="The original Sitemap for Dr. Meow Meow. 
                    Diagram made using Drawio." width="800" />
                </div>

                <h4 className="sitemap-2">Sitemap v2</h4>
                <div className="sitemap-image">
                    <img src="/Final-Dr-Meow-Meow-Sitemap.drawio.png" alt="The final Sitemap for Dr. Meow Meow. Diagram 
                    made using Drawio." width="1000" />
                </div>
            </section>

            <section className="dr-meow-meow-user-stories-section">
                <h3>User Stories</h3>

                <p>Before designing the database schema or mapping out the interface, I defined the Dr. Meow Meow's 
                    core functionality from the perspective of a pet parent. The following user stories helped define 
                    the Minimum Viable Product and ensured that every architectural decision directly served a practical 
                    user need.</p>

                <div className="dr-meow-meow-user-stories-list">
                    <p>1. As a user, I want only my own pets and records to be visible to me, so that my data stays private.</p>
                    <p>2. As a user, I want to sign in with my Google account, so that I don't need another password.</p>
                    <p>3. As a user, I want to create one appointment for all my pets at once, so that I don't have to enter the 
                    same visit several times.</p>
                    <p>4. As a user, I want the vet's office filled in automatically when I choose a vet, so that I don't have to 
                    type out long addresses.</p>
                    <p>5. As a user, I want my pet's age automatically calculated from its birthdate so it will always be accurate.</p>
                    <p>6. As a user, I want a warning before I navigate away from a form with unsaved changes, so that I don't lose my 
                    entered data.</p>
                    <p>7. As a user, I want to log my pets' health conditions, medications with specific dosages and stop dates, and 
                    behavioral patterns, so I have a complete medical history to share with my vet.</p>
                </div>
            </section>
        </section>
    )
}

export default ReqInfo;