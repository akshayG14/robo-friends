import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib pa3 br3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}=200*200`} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
