import './Contact.css';
export default function Contact(){
    return(<section id="contact" className="contact-panel" >
  <div class="container">
    <h2>Contact Me</h2>
    <p>I'd love to hear from you! Reach out through the form below or connect with me on social media.</p>
    
    <div className="contact-form">
      <form action="./sendMail.php" method="POST">
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required/>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required/>
        </div>
        <div className="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="btn-submit">Send Message</button>
      </form>
    </div>

    <div className="social-links">
      <a href="https://x.com/ShankariRohini" target="_blank" class="social-icon twitter">Twitter</a>
      <a href="https://www.linkedin.com/in/rohini-shankari-byra-32252b274/" target="_blank" class="social-icon linkedin">LinkedIn</a>
      <a href="mailto:example@example.com" class="social-icon email">Email:rohinishankari613@gmail.com</a>
    </div>
  </div>
</section>);
    }
