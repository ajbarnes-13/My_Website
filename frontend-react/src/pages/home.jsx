import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/home.css';

function Home () {
    return (
        <>
            <section className="home">
                <p>Hello, I'm Alice. I am a Software Engineer and Technical Writer. I build full-stack web 
                    applications and write the documentation that makes them simple to use.</p>
                <p>My path to tech started with an interest in human behavior. After earning an Anthropology 
                    degree, I spent six years in insurance operations untangling high-volume processing pipelines 
                    and resolving bottlenecks. That experience taught me that when workflows break down and 
                    instructions don't exist, business stalls. I learned firsthand that clear, accurate 
                    documentation is the backbone of any functional company.</p>
                <p>I returned to school for Computer Science to build the systems I used to operate. My technical 
                    work focuses on the MERN stack and relational SQL databases. I also minored in Environmental 
                    Science, which sharpened my ability to analyze complex, interconnected systems.</p>
                <p>I write code, but the planning stage is my favorite part of the lifecycle. I love mapping out 
                    system architecture, database relationships, and user interfaces. This systems-first mindset 
                    naturally drives my work as a technical writer, where I create comprehensive documentation for 
                    the entire software development lifecycle.</p>
                <p>Head over to my <NavLink to="/portfolio">Portfolio</NavLink> to see my full-stack applications 
                    and system documentation, or check out my <NavLink to="/resume">Resume</NavLink> for a detailed
                     breakdown of my technical skills and professional history.</p>
            </section>
        </>
    )
}

export default Home;
