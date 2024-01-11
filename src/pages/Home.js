import React from 'react';

import '../components/css/Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="slogan">
        <img src="/l.png" alt="Less Than Sign" />
        <span>Driven by code, fueled by curiosity.</span>
        <img src="/g.png" alt="Greater Than Sign" />
      </div>

      <div className="home-detail">
        <p>Hi, I'm Ugo.</p>
        <p>
          A full-stack developer who loves building cool stuff, from
          eye-catching front end to the powerful systems behind them. I'm
          JavaScript Enthusiast and I'm confident using React.js, Node.js,
          Express.js and MongoDB to make things happen.
        </p>
        <p>
          I'm always eager to explore new frontiers, so I'm currently dabbling
          in Docker, Kubernetes, and Python to expand my toolkit. I'm not a guru
          yet, but I'm excited to see where these skills take me.
        </p>
        <p>
          Whether it's crafting a smooth user experience or wrangling data
          behind the scenes, I'm passionate about creating solutions that work
          and make a difference. So if you've got a project in mind, let's chat
          and see if I can help bring it to life!
        </p>
      </div>
    </div>
  );
}

export default Home;
