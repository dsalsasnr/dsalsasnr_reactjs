import React, { useState } from "react";
// import Komponen from "./Materi/Komponen";
import MyNavbar from "./Materi/Komponen/Pembahasan/Task-Basic-Component/Navbar";
//import MyComponent from "./Materi/Komponen/Pembahasan/Task-Basic-Component/Button";
import MyFooter from "./Materi/Komponen/Pembahasan/Task-Basic-Component/Footer";
import Content from "./Materi/Komponen/Pembahasan/Task-Basic-Component/Content";
import ClassComponent from "./Materi/Komponen/Pembahasan/ClassComponent";

function App() {
  const [getNavbar, setNavbar] = useState(" ");

  // const navHeading = "Navbar";
  // const navText = "Social Media";

  const changeNavbar = () => {
    setNavbar("Good Morning");
    // alert("haii");
    // console.log("button di klik");
  };

  const paragraph = () => {
    return (
      <div>
        <marquee>Task Basic Component</marquee>
      </div>
    );
  };

  return (
    <div className="App">
      {/* <MyNavbar navText={navText} navHeading={navHeading} /> */}
      <MyNavbar newNav={getNavbar} />
      <p>{getNavbar}</p>
      <button onClick={() => changeNavbar()}>Button</button>
      <Content />
      <ClassComponent />
      {/* <MyComponent click={click} /> */}
      <MyFooter paragraph={paragraph} />
    </div>
  );
}

export default App;
