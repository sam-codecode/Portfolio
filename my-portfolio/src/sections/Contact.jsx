// src/sections/Contact.jsx
import "./Contact.css";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* LEFT */}
        <div className="contact-left">
          <h2>Contact Me</h2>

          <a href="mailto:srthankyou2@gmail.com" className="contact-link">
            <Mail size={18} />
            <span>srthankyou2@gmail.com</span>
          </a>

          <a
            href="https://github.com/sam-codecode"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/samuel-raj-47b199322/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <p>
            🚀 Got a project idea, collaboration, or hiring opportunity?
            <br />
            <br />
            I’m always open to building impactful systems, solving real-world
            problems, and working with passionate people.
          </p>

          <p className="contact-quote">
            <strong>“Burdened with glorious purpose.”</strong>
          </p>
        </div>

      </div>
    </section>
  );
}
