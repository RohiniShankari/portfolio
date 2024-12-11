import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about" style={{backgroundColor:"grey" }} >
            <h2>About Me</h2>
            <section id="about" style={{backgroundColor:"#78859c",color:"#d3dded"}}>
    <div class="about-container">
        <div class="about-text" >
            
            <p>
                Hi, I'm <strong>Byra Rohini Sankari</strong>, a passionate web developer with a solid foundation in software engineering.
                 I specialize in creating responsive and dynamic web applications using modern technologies like JavaScript, React.js, and Node.js.
            </p>
            <h3>Educational Background</h3>
            <ul class="education-list">
                <li><strong>Bachelor's in Computer Science</strong> - Rajiv gandhi university of Knowledge technologies,2026</li>
                <li><strong>Relevant Coursework:<br/></strong> Web Development, Data Structures, Algorithms, and Database Management.</li>
                
            </ul>
            
            
        </div>
        
    </div>
</section>

        </section>
    );
};

export default About;