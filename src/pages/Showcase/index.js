import React, { useState, useEffect, useRef } from "react";
// import { FiAlertCircle } from "react-icons/fi";

import "./styles.css";

export default function Showcase() {
  const [projects, setProjects] = useState([
    'https://raw.githubusercontent.com/marlonrodler/typing-speed/main/typing-speed.jpg', 
    'https://raw.githubusercontent.com/marlonrodler/pokedex-react/main/pokedex-react.jpg',
    'https://raw.githubusercontent.com/marlonrodler/clone-spotify/master/clone-spotify.jpg'
  ]);
  const refCard = useRef(null);

  useEffect(() => {
    console.log('refCard:',refCard);

    setTimeout(() => {
      for (let i = 0; i < projects.length; i++) {
        refCard[i].style.backgroundImage = `url(${projects[i]})`;
      }
    }, 1000);
    
  }, [projects]);


  return (
    <div className="container">
      <div className="cards">
        {
          projects.map((item, index) => {
            return (
              <div ref={(span) => { refCard[index] = span }} className='card' key={index}>
                <div className="card-content"></div>
                <div className="card-content"></div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
