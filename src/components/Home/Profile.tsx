import { useMemo } from "react";
import Typewriter from "typewriter-effect";
import Navbar from "../Navbar/Navbar";
import ScrollService from "../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  const typewriterOptions = useMemo(() => ({
    strings: [
      "Enthusiastic Dev 😎",
      "Full stack Developer 💻",
      "Mern stack Dev 📱",
      "Cross Platform Dev 🔴",
      "React/React Native 🌐",
    ],
    autoStart: true,
    loop: true,
    deleteSpeed: 50,
    delay: 75,
  }), []);

  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">AMAL V R</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1 className="typewriter-header">
                <Typewriter options={typewriterOptions} />
              </h1>
            </span>
            <span className="profile-role-tagline">
              I turn complex challenges into elegant, scalable software solutions.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="/Resume_AMAL_V_R.pdf" download="AMAL_V_R_Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
