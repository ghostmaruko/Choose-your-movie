import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="item"
        key={props.id}

        onClick={() =>
          navigate("/details", {
            state: {
              id: props.id,
            },
          })
        }
      >
        <img className="cardImg" src={props.poster} alt={props.title} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 className="titleMovie">{props.title}</h2>
          <p className="paragraph">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
