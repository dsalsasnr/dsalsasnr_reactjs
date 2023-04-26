import React from "react";
import "./Materi/Style/WebStyle.css";
import NavigationBar from "./Materi/StylingComponent/Navbar";
import Intro from "./Materi/StylingComponent/Intro";
import Content from "./Materi/StylingComponent/Content";

// // import Komponen from "./Materi/Komponen";
// import MyNavbar from "./Materi/Komponen/Pembahasan/Task-Basic-Component/Navbar";
// //import MyComponent from "./Materi/Komponen/Pembahasan/Task-Basic-Component/Button";
// import MyFooter from "./Materi/Komponen/Pembahasan/Task-Basic-Component/Footer";
// import Content from "./Materi/Komponen/Pembahasan/Task-Basic-Component/Content";
// import ClassComponent from "./Materi/Komponen/Pembahasan/ClassComponent";

function App() {
  return (
    <div className="App">
      {/* Intro */}
      <div className="webBg">
        <NavigationBar />
        <Intro />
      </div>
      <div className="content">
        <Content />
      </div>
      <div className="end"></div>
      {/* End of intro */}
    </div>
  );
}

export default App;
