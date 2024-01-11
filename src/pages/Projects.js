import React from 'react';

import '../components/css/Projects.css';

function Projects() {
  return (
    <div className="projects-page">
      <h1>
        These Are Some Of My Personal Projects, You Can View More On My{' '}
        <a href="" target="_blank">
          Github Profile.
        </a>{' '}
      </h1>
      <div className="project">
        <div className="project-img-container">
          <img src="/secrets.png" alt="secrets home page" />
        </div>
        <div className="project-detail">
          <p>
            Secrets is a Server Side Rendered Application built using
            react.js/express.js and mongodb for database.
          </p>
          <p>
            It a platform where users get to posts their deepest thoughts
            anonymously without fear of judgement.
          </p>
          <p>
            Be you a rake, a closet communist or serial killer, spill your
            deepest desires, darkest fears, and most outrageous dreams. Unleash
            the unfiltered you, knowing there's no judgment, just a community of
            listeners eager to hear the unsaid. Secrets won't ask your name,
            just your story.
          </p>
          <div className="project-meta">
            <a href="" target="_blank">
              Source Code
            </a>
            <a href="" target="_blank">
              Website
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-img-container">
          <img src="/ublog.png" alt="secrets home page" />
        </div>

        <div className="project-detail">
          <p>
            Secrets is a Server Side Rendered Application built using
            react/expressjs and mongodb for database.
          </p>
          <div className="project-meta">
            <a href="" target="_blank">
              Source Code
            </a>
            <a href="" target="_blank">
              Website
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-img-container">
          <img src="/whisper.png" alt="secrets home page" />
        </div>
        <div className="project-detail">
          <p>
            Secrets is a Server Side Rendered Application built using
            react/expressjs and mongodb for database.
          </p>
          <div className="project-meta">
            <a href="" target="_blank">
              Source Code
            </a>
            <a href="" target="_blank">
              Website
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-img-container aredian">
          <img src="/aredian.png" alt="secrets home page" />
        </div>

        <div className="project-detail">
          <p>
            Secrets is a Server Side Rendered Application built using
            react/expressjs and mongodb for database.
          </p>
          <div className="project-meta">
            <a href="" target="_blank">
              Source Code
            </a>
            <a href="" target="_blank">
              Website
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-img-container">
          <img src="/secrets.png" alt="secrets home page" />
        </div>
        <div className="project-detail">
          <p>
            Secrets is a Server Side Rendered Application built using
            react/expressjs and mongodb for database.
          </p>

          <div className="project-meta">
            <a href="" target="_blank">
              Source Code
            </a>
            <a href="" target="_blank">
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
