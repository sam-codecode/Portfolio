import "./Hero.css"

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-inner">

        {/* LEFT — PHOTO */}
        <div className="hero-photo">
          <img src="/images/profile.jpg" alt="Samuel Raj" />
        </div>

        {/* RIGHT — CONTENT */}
        <div className="hero-content">
          <h1>
            Hi, I’m <span>Samuel Raj</span>
          </h1>

          <p className="hero-intro">
            Data Science & AI enthusiast focused on building intelligent,
            real-world solutions at the intersection of mathematics,
            machine learning, and software engineering.
          </p>

          {/* INFO GRID */}
          <div className="hero-grid">

            <div className="hero-card">
              <h3>Education</h3>
              <p>
                <strong>Universiti Sains Malaysia (USM)</strong><br />
                B.Sc. Intelligent Computing (Year 2)<br />
                CGPA: 3.51 / 4.00<br />
                Expected Graduation: 2028
              </p>
            </div>

            <div className="hero-card">
              <h3>Technical Skills</h3>
              <ul>
                <li>Python, Java, C++</li>
                <li>NumPy, Pandas, PyTorch, Scikit-learn</li>
                <li>Machine Learning & Deep Learning</li>
                <li>Statistics, Probability, Linear Algebra, Calculus</li>
              </ul>
            </div>

            <div className="hero-card">
              <h3>Experience</h3>
              <p>
                <strong>Data Science Intern — AI Labs (Mock)</strong><br />
                Built ML models, performed EDA, and assisted in deploying
                data pipelines.<br />
                <em>(Replace later)</em>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

