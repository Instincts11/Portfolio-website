export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: "HTML, CSS, JavaScript, Python, TypeScript"
    },
    {
      title: "Frameworks & Libraries",
      skills: "React.js, Node.js, Express.js, Django, React Native, Next.js"
    },
    {
      title: "Databases & Tools",
      skills: "MongoDB, Git, GitHub, VS Code, Postman, REST APIs"
    },
    {
      title: "Design & Other",
      skills: "Responsive Design, DOM Manipulation"
    },
    {
      title: "Certifications",
      skills: "Full Stack Web Development Cohort, Apna College"
    },
    {
      title: "Soft Skills",
      skills: "Fast Learner, Strong Communication, Clear Thinking, Team Collaboration, Task Management"
    },
    {
      title: "AI Tools & Workflow",
      skills: "ChatGPT, Claude, Raptor, DeepSeek, Windsurf, GitHub Copilot"
    }
  ];

  return (
    <div className="section-container" id="Skills">
      <img src="/programming.svg" alt="skills-vector" className="vector-image-skills" />
      <div className="skills-content">
        <h1>Technical Skills & Certifications</h1>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <span className="category-title">{category.title}:</span>
              <span className="category-skills">{category.skills}</span>
            </div>
          ))}
        </div>

        <div className="interests-section">
          <span className="category-title">Interests:</span>
          <span className="category-skills">Building interactive user-centric web applications with modern front-end tech like React.js</span>
        </div>
      </div>
    </div>
  );
}

