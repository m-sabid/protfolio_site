import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function MoreInfo() {
  return (
    <div className="grid gap-5 grid-cols-3">
      <div className="col-span-1 font-bold">
        <h2 className="text-secondary">My Achievements</h2>
        <ul className="flex flex-col gap-4 text-sm font-normal ">
          <li>Implemented elegant UI designs across various projects.</li>
          <li>
            Developed efficient backend solutions for enhanced performance.
          </li>
          <li>
            Overcame challenges in diverse projects, showcasing problem-solving
            skills.
          </li>
        </ul>
      </div>
      <div className="col-span-1 font-bold">
        <h2 className="text-secondary">Crafted Expertise</h2>
        <ul className="flex flex-col gap-4 text-sm font-normal ">
          <li>Meticulously honed skills in multiple programming languages.</li>
          <li>
            Proficient in utilizing frameworks for robust and scalable
            solutions.
          </li>
          <li>
            Demonstrated creativity in solving complex problems through
            innovative approaches.
          </li>
        </ul>
      </div>
      <div className="col-span-1 font-bold">
        <h2 className="text-secondary">Let's Connect</h2>
        <ul className="flex flex-col gap-4 text-sm font-normal ">
          <li>
            <span className="flex items-center gap-1">
              <FaEnvelope className="text-primary" />
              Contact me at:
            </span>
            your.email@example.com
          </li>
          <li>
            <span className="flex items-center gap-1">
              <FaLinkedin className="text-primary" />
              LinkedIn:
            </span>
            linkedin.com/in/yourusername
          </li>
          <li>
            <span className="flex items-center gap-1">
              <FaGithub className="text-primary" /> GitHub:
            </span>
            github.com/yourusername
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MoreInfo;
