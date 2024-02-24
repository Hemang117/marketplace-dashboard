import React from "react";
import "./MainContainer.css";
import Banner from "../img/back.jpg";
import Back from "../img/back.jpg";
import CardMain from "./CardMain";
import Card1 from "../img/card1.jpg";
import Card2 from "../img/card2.jpg";
import Card3 from "../img/card3.jpg";
import Card4 from "../img/card4.jpg";


function MainContainer() {
  return (
    <div className="maincontainer"       style={{
            background: `url(${Back})`,
            backgroundRepeat: "no-repeat",
            backgroundSize:"contain",
            backgroundPosition: "center",
          }}>
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          
        </div>

        <div className="cards">
          <main>
            <CardMain imgSrc={Card1} title={"Card 1"}/>
            <CardMain imgSrc={Card2} title={"Card 2"}/>
            <CardMain imgSrc={Card3} title={"Card 3"}/>
            <CardMain imgSrc={Card4} title={"Card 4"}/>
          </main>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
