import React from "react";

const Button = (props) => {
  const item = props
  return (
    <>
      <button
      className=""
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "4px",
          borderRadius: "4px",
        }}
      >
        {item.name}
        {item.icon}
      </button>
    </>
  );
};

export default Button;
