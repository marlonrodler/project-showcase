import React, { useState, useEffect, useRef } from "react";
import { BsGithub, BsFillPlayCircleFill } from "react-icons/bs";
import myProjects from "../../data/myProjects";

import "./styles.css";

export default function Showcase() {
  const [projects] = useState(myProjects);
  const refCard = useRef(null);

  useEffect(() => {

    for (const key of Object.keys(projects)) {
      refCard[key].style.backgroundImage = `url(${projects[key][0]})`;
    }
  }, [projects]);

  return (
    <div className="container">
      <div className="cards">
        {

          Object.entries(projects).map(([key, value]) => {
            return (
              <div ref={(span) => { refCard[key] = span }} className='card' key={key}>
                <a className="card-content" href={value[1]} target='_blank' rel="noreferrer">
                  <BsGithub />
                </a>
                <a className="card-content" href={value[2]} target='_blank' rel="noreferrer">
                  <BsFillPlayCircleFill />
                </a>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
