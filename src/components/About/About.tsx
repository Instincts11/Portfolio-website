export default function About() {
  return (
    <div className="section-container" id="About">
      <div className="section-header-row">
        <h1>About Me</h1>
        <img src="/writing.svg" alt="about-vector" className="vector-image-about-row" />
      </div>
      <div className="about-details">
        <p>
          I am a full-stack developer focused on building scalable, maintainable web applications using modern technologies. I enjoy solving complex problems, designing clean architecture, and continuously improving system performance. I leverage advanced AI-assisted development tools to accelerate workflows, enhance code quality, and optimize debugging while maintaining strong ownership and critical thinking. I value collaboration, structured thinking, and delivering solutions that create measurable impact.
        </p>
        
        <div className="education-card">
          <h2>Education</h2>
          <h3>Bachelor of Physics with Machine Learning</h3>
          <p>Mar Ivanios College | 2024</p>
        </div>

        <div className="accomplishments-list">
          <h2>Accomplishments</h2>
          <ul>
            <li>Built a country-based filtering app using APIs to display relevant places, demonstrating frontend logic and real-world usability.</li>
            <li>Continuously self-learn and implement modern web technologies, with a strong focus on personal growth and contributing to impactful development projects.</li>
            <li>Participated in ideathons, applying problem-solving skills and creative thinking to develop innovative tech solutions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
