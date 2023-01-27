import React from "react";
import "./Team.css";
import team1 from "../../images/team/team1.jpg";
import team2 from "../../images/team/team2.jpg";
import team3 from "../../images/team/team3.jpg";
import { Fade, Zoom } from "react-awesome-reveal";

const Team = () => {
  const teamMembers = [
    {
      image: team1,
      fullName: "Name Surname",
      position: "manager",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      image: team2,
      fullName: "Name Surname",
      position: "developer",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      image: team3,
      fullName: "Name Surname",
      position: "designer",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
  ];

  return (
    <div className="team">
      <div className="right">
        <Fade direction="down">
          <h1 className="head">
            creative and <br />
            professional
          </h1>
        </Fade>
        <Fade direction="left" delay={2}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nisi
            ea obcaecati quis dolorem autem. Porro quasi in ut doloribus? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Nam nisi ea
            obcaecati quis dolorem autem. Porro quasi in ut doloribus?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            dignissimos doloremque, reiciendis id dolorem rerum. Id placeat
            maiores quod soluta.
          </p>
          <button className="btn">Read More</button>
        </Fade>
      </div>

      {/* left side  */}
      <div className="left">
        <Fade direction="down">
          <h1 className="head">our team</h1>
        </Fade>
        <div className="team_members">
          {teamMembers.map((member, i) => (
            <Fade direction="right">
              <div className="team_member" key={i}>
                <img src={member.image} alt="teamMember" />
                <div className="text">
                  <h1 className="name">{member.fullName}</h1>
                  <p className="position">{member.position}</p>
                  <p className="detail">{member.details}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
