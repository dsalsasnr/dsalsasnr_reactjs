import React from "react";

const GreetingPage = ({ name, timeOfDay, greeting }) => {
  return (
    <div>
      <h2>{timeOfDay}</h2>
      <p>{greeting}</p>
      <p>Quote of the {timeOfDay}: Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

const Afternoon = ({ name }) => {
  const timeOfDay = "Afternoon";
  const greeting = name ? `Good Afternoon, ${name}!` : "Good Afternoon!";

  return <GreetingPage name={name} timeOfDay={timeOfDay} greeting={greeting} />;
};

const Evening = ({ name }) => {
  const timeOfDay = "Evening";
  const greeting = name ? `Good Evening, ${name}!` : "Good Evening!";

  return <GreetingPage name={name} timeOfDay={timeOfDay} greeting={greeting} />;
};

const Night = ({ name }) => {
  const timeOfDay = "Night";
  const greeting = name ? `Good Night, ${name}!` : "Good Night!";

  return <GreetingPage name={name} timeOfDay={timeOfDay} greeting={greeting} />;
};

export { Afternoon, Evening, Night };
