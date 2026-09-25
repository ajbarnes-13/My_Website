import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import '../style/meowDbArch.css';

function DbArch() {
    return (
        <section className="dr-meow-meow-db-arch">
            <header className="dr-meow-meow-db-arch-header">
                <h2>Dr. Meow Meow</h2>
                <h2>Database Architecture</h2>

                <nav>
                    <NavLink to="/portfolio/meowReqInfo">Requirements</NavLink>
                    <NavLink to="/portfolio/meowDbArch">DB Architecture</NavLink>
                </nav>
            </header>

            <section className="dr-meow-meow-erd-section">
                <h3>Entity-Relationship Diagram</h3>

                <p>The initial v1 ERD established the foundational data structure of Dr. Meow Meow. As the frontend requirements changed, the ERD had to change with 
                it to improve normalization, data security, and long-term record keeping.</p>
                <p><strong>Database Normalization: </strong> The Vet Office attribute became a distinct entity to allow multiple veterinarians to share an office.</p>
                <p><strong>Data Isolation: </strong> To prevent users from being able to access other users' pets, I added an Owner UID (tied to the user's Firebase 
                Auth ID) to both the Pet and Vet Office tables. After verifying the user's login token, the backend uses this UID to scope every query to that specific 
                account.</p>
                <p><strong>UI-Driven Refinements: </strong> Specific entities were updated to support changes to the frontend. Appointment gained an Office foreign key 
                and a Time field, Medication gained a Times Per Day attribute, and Food and Behavior gained Date Stopped attributes. This ensures that past prescriptions, 
                diets, and behavioral patterns are retained in the pet's history so the user can access them later.</p>

                <h4 className="erd-1">ERD v1</h4>
                <div className="erd-image">
                    <img src="/Original-Dr-Meow-Meow-ERD.drawio.png" alt="The original Entity-Relationship Diagram for Dr. Meow Meow. Diagram made using Drawio." />
                </div>

                <h4 className="erd-2">ERD v2</h4>
                <div className="erd-image">
                    <img src="/Final-Dr-Meow-Meow-ERD.drawio.png" alt="The final Entity-Relationship Diagram for Dr. Meow Meow. Diagram made using Drawio." />
                </div>
            </section>
        </section>
    )
}

export default DbArch;
