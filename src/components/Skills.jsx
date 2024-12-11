import './Skills.css';
export default function Skills(){
    return(
        <section id="skills">
        <h2>My Skills</h2>
        <div class="skills-container">
          <div class="skill">
            <p>HTML & CSS</p>
            <div class="skill-bar" data-skill="90%"></div>
          </div>
          
          <div class="skill">
            <p>JavaScript & jquery</p>
            <div class="skill-bar" data-skill="75%"></div>
          </div>
          <div class="skill">
            <p>React.js & bootstrap</p>
            <div class="skill-bar" data-skill="85%"></div>
          </div>
          <div class="skill">
            <p>Node.js & express.js</p>
            <div class="skill-bar" data-skill="70%"></div>
          </div>
          <div class="skill">
            <p>mongoDB & SQL</p>
            <div class="skill-bar" data-skill="70%"></div>
          </div>
          <div class="skill">
            <p>java & python</p>
            <div class="skill-bar" data-skill="70%"></div>
          </div>
        </div>
      </section>
      
      
    );
}