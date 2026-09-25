import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import '../style/meowReqInfo.css';

function ReqInfo() {
    return (
        <section className="dr-meow-meow-req-info">
            <h2>Dr. Meow Meow</h2>
            <h2>Requirements & Information Architecture</h2>

            <nav>
                <NavLink to="/portfolio/meowReqInfo">Requirements</NavLink>
                <NavLink to="/portfolio/meowDbArch">DB Architecture</NavLink>
            </nav>

            <h3>Sitemap</h3>

            <p>My original design had standalone pages for every table in the database. Food, Medications, Vaccines, 
                Vets, Health Conditions, and Behaviors all had their own pages. To improve user experience, I 
                consolidated these pages into a more centralized structure in the Pet Profile view. Dedicated 
                operational views were also added, such as Edit Pet Profile, Add New Pet, Add New Appointment, 
                and Add New Vet. These pages all handle bulk data entry while the Pet Profile supports quick 
                inline edits to individual records. The User Profile page was scrapped in favor of a simpler 
                Account page. Dr. Meow Meow has no social media features so I didn't see a need for individual 
                user profiles. Instead, the Account page handles account management, such as updating login 
                credentials.</p>

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
    )
}

export default ReqInfo;