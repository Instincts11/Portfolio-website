import { useState } from 'react';

// External video URLs configuration
// Videos hosted on Cloudinary CDN
const VIDEO_URLS = {
  football: "https://res.cloudinary.com/dmeo6qeac/video/upload/v1770895678/football-demo_jgiwb2.mp4",
  bakery: "https://res.cloudinary.com/dmeo6qeac/video/upload/v1770896476/bakery-demo_pzljpg.mp4",
  furniture: "https://res.cloudinary.com/dmeo6qeac/video/upload/v1770895045/furniture-demo_htxfw3.mp4",
  lostFound: "https://res.cloudinary.com/dmeo6qeac/video/upload/v1770900428/Screen_Recording_2026-02-12_172840_udrlhr.mp4",
  space: "https://res.cloudinary.com/dmeo6qeac/video/upload/v1770895761/space-demo_sgno42.mp4",
  travel: "https://res.cloudinary.com/dmeo6qeac/video/upload/v1770893457/travel-demo_pkm5ky.mp4"
};

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showPrivateModal, setShowPrivateModal] = useState(false);

  const githubProjects = [
    {
      title: "Football Academy Website",
      link: "https://github.com/Instincts11/Football-Academy-Website",
      videoUrl: VIDEO_URLS.football
    },
    {
      title: "Bakery Website (Next.js)",
      link: "https://github.com/Instincts11/Bakery-Website-Next-JS",
      videoUrl: VIDEO_URLS.bakery
    },
    {
      title: "Furnitures & Interiors E-commerce",
      link: "https://github.com/Instincts11/E-commerce-Furnitures-and-Interiors",
      videoUrl: VIDEO_URLS.furniture
    },
    {
      title: "Lost and Found Website",
      link: "#",
      videoUrl: VIDEO_URLS.lostFound,
      isPrivate: true
    },
    {
      title: "Space Exploration Website",
      link: "https://github.com/Instincts11/Space-website",
      videoUrl: VIDEO_URLS.space
    },
    {
      title: "Travel Blog Website",
      link: "https://github.com/Instincts11/Travel-Blog-Website",
      videoUrl: VIDEO_URLS.travel
    }
  ];

  return (
    <div className="section-container" id="Projects">
      <div className="section-header-row">
        <h1>My Projects</h1>
        <img src="/product-demo.svg" alt="projects-vector" className="vector-image-projects-row" />
      </div>
      <p>A selection of my recent work from GitHub.</p>
      
      <div className="projects-grid">
        {githubProjects.map((project, index) => (
          <div key={index} className="project-card">
            {project.videoUrl && (
              <div className="card-video-bg">
                <video muted loop onMouseEnter={(e) => e.currentTarget.play()} onMouseLeave={(e) => {e.currentTarget.pause(); e.currentTarget.currentTime = 0;}}>
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
              </div>
            )}
            <div className="project-content-overlay">
              <h3>{project.title}</h3>
              <div className="project-actions">
                <a 
                  href={project.isPrivate ? "javascript:void(0)" : project.link} 
                  target={project.isPrivate ? "_self" : "_blank"} 
                  rel="noopener noreferrer" 
                  className="project-link"
                  onClick={(e) => {
                    if (project.isPrivate) {
                      e.preventDefault();
                      setShowPrivateModal(true);
                    }
                  }}
                >
                  View on GitHub
                </a>
                <button 
                  className="demo-btn" 
                  onClick={() => setSelectedVideo(project.videoUrl || "https://www.w3schools.com/html/mov_bbb.mp4")}
                >
                  Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedVideo(null)}>&times;</button>
            <video controls autoPlay className="project-video">
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {showPrivateModal && (
        <div className="video-modal" onClick={() => setShowPrivateModal(false)}>
          <div className="modal-content-alert" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowPrivateModal(false)}>&times;</button>
            <div className="private-msg-box">
              <h2 style={{ color: '#ff5823', marginBottom: '1rem' }}>Private Repository</h2>
              <p style={{ fontSize: '1.1rem', textAlign: 'center' }}>
                This project's source code is currently private. If you'd like to learn more about it, feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

