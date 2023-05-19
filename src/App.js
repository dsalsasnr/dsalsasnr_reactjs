import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Materi/Router/Home";
import Morning from "./Materi/Router/Morning";
import { Afternoon, Evening, Night } from "./Materi/Router/Afternoon";

const App = () => {
  const [userName, setUserName] = useState("");

  return (
    <Router>
      <div className="container">
        <h1 className="mt-3">Just a simple website</h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home setUserName={setUserName} />} />
          <Route path="/morning" element={<Morning name={userName} />} />
          <Route path="/afternoon" element={<Afternoon name={userName} />} />
          <Route path="/evening" element={<Evening name={userName} />} />
          <Route path="/night" element={<Night name={userName} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./Materi/Router/Home";
// import Morning from "./Materi/Router/Morning";
// import { Afternoon, Evening, Night } from "./Materi/Router/Afternoon";

// const App = () => {
//   const [userName, setUserName] = useState("");

//   return (
//     <Router>
//       <div className="container">
//         <h1 className="mt-3">Just a simple website</h1>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link to="/" className="nav-link">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/morning" className="nav-link">
//                 Morning
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/afternoon" className="nav-link">
//                 Afternoon
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/evening" className="nav-link">
//                 Evening
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/night" className="nav-link">
//                 Night
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home setUserName={setUserName} />} />
//           <Route path="/morning" element={<Morning name={userName} />} />
//           <Route path="/afternoon" element={<Afternoon name={userName} />} />
//           <Route path="/evening" element={<Evening name={userName} />} />
//           <Route path="/night" element={<Night name={userName} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
