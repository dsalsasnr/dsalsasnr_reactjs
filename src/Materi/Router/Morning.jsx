import React from "react";

const Morning = ({ name }) => {
  const greeting = name ? `Good Morning, ${name}!` : "Good Morning!";

  return (
    <div>
      <h2>Morning</h2>
      <p>{greeting}</p>
      <p>Quote of the Morning: Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default Morning;
