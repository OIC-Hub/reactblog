import React from "react";
import PokerGame from "/pokergame.png";
import { FaFacebookF } from "react-icons/fa";

const Profile = () => {
  return (
    <>
      <section>
        <img
          src={PokerGame}
          alt=""
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <p>Name: Mariam</p>
        <p>Tech stack: Frontend</p>
        <a href="https://www.facebook.com" style={{}}>
          <FaFacebookF  />
        </a>
      </section>
    </>
  );
};

export default Profile;
